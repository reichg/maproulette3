import React, { Component } from 'react'
import _get from 'lodash/get'
import _cloneDeep from 'lodash/cloneDeep'
import _isEqual from 'lodash/isEqual'
import _keys from 'lodash/keys'
import _pickBy from 'lodash/pickBy'
import _omit from 'lodash/omit'
import { fromLatLngBounds, GLOBAL_MAPBOUNDS } from '../../../services/MapBounds/MapBounds'

const DEFAULT_PAGE_SIZE = 20
const DEFAULT_CRITERIA = {sortCriteria: {sortBy: 'name', direction: 'DESC'},
                          pageSize: DEFAULT_PAGE_SIZE, filters:{},
                          invertFields: {}}

/**
 * WithFilterCriteria keeps track of the current criteria being used
 * to filter, sort and page the tasks.
 *
 * @author [Kelli Rotstan](https://github.com/krotstan)
 */
export const WithFilterCriteria = function(WrappedComponent) {
   return class extends Component {
     state = {
       loading: false,
       criteria: DEFAULT_CRITERIA,
       pageSize: DEFAULT_PAGE_SIZE,
     }

     updateCriteria = (newCriteria) => {
       const criteria = _cloneDeep(this.state.criteria)
       criteria.sortCriteria = newCriteria.sortCriteria
       criteria.page = newCriteria.page
       criteria.filters = newCriteria.filters
       criteria.includeTags = newCriteria.includeTags

       this.setState({criteria})
       if (this.props.setSearchFilters) {
         this.props.setSearchFilters(criteria)
       }
     }

     updateTaskFilterBounds = (bounds, zoom) => {
       const newCriteria = _cloneDeep(this.state.criteria)
       newCriteria.boundingBox = fromLatLngBounds(bounds)
       newCriteria.zoom = zoom

       if (!this.state.initialBounds) {
         // We need to save our first time initialBounds so that if we clear all
         // filters we have an initial bounding box to come back to.
         this.setState({criteria: newCriteria,
                        initialBounds: fromLatLngBounds(bounds),
                        initialZoom: zoom})
       }
       else {
         this.setState({criteria: newCriteria})
       }
     }

     updateTaskPropertyCriteria = (propertySearch) => {
       const criteria = _cloneDeep(this.state.criteria)
       criteria.filters.taskPropertySearch = propertySearch
       this.setState({criteria})
     }

     invertField = (fieldName) => {
       const criteria = _cloneDeep(this.state.criteria)
       criteria.invertFields[fieldName] = !criteria.invertFields[fieldName]
       this.setState({criteria})
       if (this.props.setSearchFilters) {
         this.props.setSearchFilters(criteria)
       }
     }

     clearTaskPropertyCriteria = () => {
       const criteria = _cloneDeep(this.state.criteria)
       criteria.filters.taskPropertySearch = null
       this.setState({criteria})
     }

     clearAllFilters = () => {
       if (this.props.clearAllFilters) {
         this.props.clearAllFilters()
       }

       const newCriteria = _cloneDeep(DEFAULT_CRITERIA)
       newCriteria.boundingBox = this.state.initialBounds
       newCriteria.zoom = this.state.zoom
       newCriteria.filters["status"] = _keys(_pickBy(this.props.includeTaskStatuses, (s) => s))
       newCriteria.filters["reviewStatus"] = _keys(_pickBy(this.props.includeReviewStatuses, (r) => r))
       newCriteria.filters["priorities"] = _keys(_pickBy(this.props.includeTaskPriorities, (p) => p))

       this.setState({criteria: newCriteria})
     }

     refresh = () => {
       this.update(this.props, this.state.criteria)
     }

     changePageSize = (pageSize) => {
       const typedCriteria = _cloneDeep(this.state.criteria)
       typedCriteria.pageSize = pageSize
       this.setState({criteria: typedCriteria})
     }

     setFiltered = (column, value) => {
       const typedCriteria = _cloneDeep(this.state.criteria)
       typedCriteria.filters[column] = value

       //Reset Page so it goes back to 0
       typedCriteria.page = 0
       this.setState({criteria: typedCriteria})
     }

     updateIncludedFilters(props) {
       const typedCriteria = _cloneDeep(this.state.criteria)
       typedCriteria.filters["status"] = _keys(_pickBy(props.includeTaskStatuses, (s) => s))
       typedCriteria.filters["reviewStatus"] = _keys(_pickBy(props.includeTaskReviewStatuses, (r) => r))
       typedCriteria.filters["priorities"] = _keys(_pickBy(props.includeTaskPriorities, (p) => p))
       this.setState({criteria: typedCriteria})
       return typedCriteria
     }

     update(props, criteria) {
       const pageSize = _get(this.state.criteria, 'pageSize') || DEFAULT_PAGE_SIZE

       const typedCriteria = _cloneDeep(this.state.criteria)
       typedCriteria.pageSize = pageSize

       this.setState({criteria: typedCriteria})
     }

     refreshTasks = (typedCriteria) => {
       const challengeId = _get(this.props, 'challenge.id') || this.props.challengeId
       this.setState({loading: true})

       const criteria = typedCriteria || _cloneDeep(this.state.criteria)

       // If we don't have bounds yet, we still want results so let's fetch all
       // tasks globally for this challenge.
       if (!criteria.boundingBox) {
         if (this.props.skipInitialFetch || !challengeId) {
           return
         }
         criteria.boundingBox = GLOBAL_MAPBOUNDS
       }

       this.props.augmentClusteredTasks(challengeId, false,
                                        criteria,
                                        this.state.criteria.pageSize,
                                        false).then((results) => {
         this.setState({loading: false})
       })
     }

     componentDidMount() {
       const typedCriteria = this.updateIncludedFilters(this.props)
       const challengeId = _get(this.props, 'challenge.id') || this.props.challengeId
       if (challengeId) {
         this.refreshTasks(typedCriteria)
       }

     }

     componentDidUpdate(prevProps, prevState) {
       const challengeId = _get(this.props, 'challenge.id') || this.props.challengeId
       if (!challengeId) {
         return
       }

       let typedCriteria = _cloneDeep(this.state.criteria)

       if (prevProps.includeTaskStatuses !== this.props.includeTaskStatuses ||
           prevProps.includeTaskReviewStatuses !== this.props.includeTaskReviewStatuses ||
           prevProps.includeTaskPriorities !== this.props.includeTaskPriorities) {
         typedCriteria = this.updateIncludedFilters(this.props)
       }

       if (!_isEqual(prevState.criteria, this.state.criteria) && !this.props.skipRefreshTasks) {
         this.refreshTasks(typedCriteria)
       }
       else if (_get(prevProps, 'challenge.id') !== _get(this.props, 'challenge.id') ||
                this.props.challengeId !== prevProps.challengeId) {
         this.refreshTasks(typedCriteria)
       }
     }

     render() {
       const criteria = this.state.criteria || DEFAULT_CRITERIA
       return (
         <WrappedComponent defaultPageSize={DEFAULT_PAGE_SIZE}
                           updateTaskFilterBounds={this.updateTaskFilterBounds}
                           updateReviewTasks={(criteria) => this.update(this.props, criteria)}
                           updateTaskPropertyCriteria={this.updateTaskPropertyCriteria}
                           clearTaskPropertyCriteria={this.clearTaskPropertyCriteria}
                           invertField={this.invertField}
                           refresh={this.refresh}
                           criteria={criteria}
                           pageSize={criteria.pageSize}
                           page={criteria.page}
                           changePageSize={this.changePageSize}
                           setFiltered={this.setFiltered}
                           loadingTasks={this.state.loading}
                           updateCriteria={this.updateCriteria}
                           refreshTasks={this.refreshTasks}
                           clearAllFilters={this.clearAllFilters}
                           setInitialBounds={bounds => this.setState({initialBounds: bounds})}
                           {..._omit(this.props, ['loadingChallenge', 'clearAllFilters'])} />)
     }
   }
 }

export default WrappedComponent => WithFilterCriteria(WrappedComponent)
