import React, { Component } from 'react'
import Dropdown from '../Dropdown/Dropdown'
import SvgSymbol from '../SvgSymbol/SvgSymbol'

export default class FilterDropdown extends Component {
  render() {
    return (
      <Dropdown
        className="mr-dropdown--right"
        dropdownButton={dropdown => (
          <button
            className="mr-flex mr-items-center mr-text-blue-light"
            onClick={dropdown.toggleDropdownVisible}
          >
            <span className="mr-text-base mr-uppercase mr-mr-1">
              {this.props.title}
            </span>
            <SvgSymbol
              sym="icon-cheveron-down"
              viewBox="0 0 20 20"
              className="mr-fill-current mr-w-5 mr-h-5"
            />
          </button>
        )}
        dropdownContent={() =>
          <ul className="mr-list-dropdown">
            {this.props.filters}
          </ul>
        }
      />
    )
  }
}
