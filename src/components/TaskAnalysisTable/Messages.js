import { defineMessages } from 'react-intl'

/**
 * Internationalized messages for use with TaskAnalysisTable
 */
export default defineMessages({
  controlsLabel: {
    id: "Admin.TaskAnalysisTable.columnHeaders.actions",
    defaultMessage: "Actions",
  },

  invertLabel: {
    id: "TasksTable.invert.abel",
    defaultMessage: "invert",
  },

  invertedLabel: {
    id: "TasksTable.inverted.label",
    defaultMessage: "inverted",
  },

  idLabel: {
    id: "Task.fields.id.label",
    defaultMessage: "Internal Id",
  },

  featureIdLabel: {
    id: "Task.fields.featureId.label",
    defaultMessage: "Feature Id",
  },

  statusLabel: {
    id: "Task.fields.status.label",
    defaultMessage: "Status",
  },

  priorityLabel: {
    id: "Task.fields.priority.label",
    defaultMessage: "Priority",
  },

  mappedOnLabel: {
    id: "Task.fields.mappedOn.label",
    defaultMessage: "Mapped On",
  },

  reviewStatusLabel: {
    id: "Task.fields.reviewStatus.label",
    defaultMessage: "Review Status",
  },

  completedByLabel: {
    id: "Task.fields.completedBy.label",
    defaultMessage: "Completed By",
  },

  completedDurationLabel: {
    id: "Admin.fields.completedDuration.label",
    defaultMessage: "Completion Time",
  },

  reviewRequestedByLabel: {
    id: "Task.fields.requestedBy.label",
    defaultMessage: "Mapper",
  },

  reviewedByLabel: {
    id: "Task.fields.reviewedBy.label",
    defaultMessage: "Reviewer",
  },

  reviewedAtLabel: {
    id: "Admin.fields.reviewedAt.label",
    defaultMessage: "Reviewed On",
  },

  reviewDurationLabel: {
    id: "Admin.fields.reviewDuration.label",
    defaultMessage: "Review Time",
  },

  commentsLabel: {
    id: "Admin.TaskAnalysisTable.columnHeaders.comments",
    defaultMessage: "Comments",
  },

  tagsLabel: {
    id: "Admin.TaskAnalysisTable.columnHeaders.tags",
    defaultMessage: "Tags",
  },

  inspectTaskLabel: {
    id: "Admin.TaskAnalysisTable.controls.inspectTask.label",
    defaultMessage: "Inspect",
  },

  reviewTaskLabel: {
    id: "Admin.TaskAnalysisTable.controls.reviewTask.label",
    defaultMessage: "Review",
  },

  editTaskLabel: {
    id: "Admin.TaskAnalysisTable.controls.editTask.label",
    defaultMessage: "Edit",
  },

  startTaskLabel: {
    id: "Admin.TaskAnalysisTable.controls.startTask.label",
    defaultMessage: "Start",
  },

  bulkSelectionTooltip: {
    id: "Admin.manageTasks.controls.bulkSelection.tooltip",
    defaultMessage: "Select tasks",
  },

  taskCountShownStatus: {
    id: "Admin.TaskAnalysisTableHeader.taskCountStatus",
    defaultMessage: "Shown: {countShown} Tasks",
  },

  taskCountSelectedStatus: {
    id: "Admin.TaskAnalysisTableHeader.taskCountSelectedStatus",
    defaultMessage: "Selected: {selectedCount} Tasks",
  },

  taskPercentShownStatus: {
    id: "Admin.TaskAnalysisTableHeader.taskPercentStatus",
    defaultMessage: "Shown: {percentShown}% ({countShown}) of {countTotal} Tasks",
  },

  changeStatusToLabel: {
    id: "Admin.manageTasks.controls.changeStatusTo.label",
    defaultMessage: "Change status to ",
  },

  chooseStatusLabel: {
    id: "Admin.manageTasks.controls.chooseStatus.label",
    defaultMessage: "Choose ... ",
  },

  changeReviewStatusLabel: {
    id: "Admin.manageTasks.controls.changeReviewStatus.label",
    defaultMessage: "Remove from review queue ",
  },

  showReviewColumnsLabel: {
    id: "Admin.manageTasks.controls.showReviewColumns.label",
    defaultMessage: "Show Review Columns",
  },

  hideReviewColumnsLabel: {
    id: "Admin.manageTasks.controls.hideReviewColumns.label",
    defaultMessage: "Hide Review Columns",
  },

  configureColumnsLabel: {
    id: "Admin.manageTasks.controls.configureColumns.label",
    defaultMessage: "Configure Columns",
  },

  exportCSVLabel: {
    id: "Admin.manageTasks.controls.exportCSV.label",
    defaultMessage: "Export CSV",
  },

  exportGeoJSONLabel: {
    id: "Admin.manageTasks.controls.exportGeoJSON.label",
    defaultMessage: "Export GeoJSON",
  },

  exportMapperReviewCSVLabel: {
    id: "Admin.manageTasks.controls.exportMapperReviewCSV.label",
    defaultMessage: "Export Mapper Review CSV",
  },

  shownLabel: {
    id: "Admin.TaskAnalysisTableHeader.controls.chooseShown.label",
    defaultMessage: "Shown",
  },

  multipleTasksTooltip: {
    id: "Admin.TaskAnalysisTable.multipleTasks.tooltip",
    defaultMessage: "Multiple bundled tasks",
  },

  bundleMemberTooltip: {
    id: "Admin.TaskAnalysisTable.bundleMember.tooltip",
    defaultMessage: "Member of a task bundle",
  },
})
