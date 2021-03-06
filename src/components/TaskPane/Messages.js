import { defineMessages } from 'react-intl'

/**
 * Internationalized messages for use with TaskPane.
 */
export default defineMessages({
  inspectLabel: {
    id: "Task.pane.controls.inspect.label",
    defaultMessage: "Inspect",
  },

  taskLockedLabel: {
    id: "Task.pane.indicators.locked.label",
    defaultMessage: "Task locked",
  },

  taskReadOnlyLabel: {
    id: "Task.pane.indicators.readOnly.label",
    defaultMessage: "Read-only Preview",
  },

  taskUnlockLabel: {
    id: "Task.pane.controls.unlock.label",
    defaultMessage: "Unlock",
  },

  taskTryLockLabel: {
    id: "Task.pane.controls.tryLock.label",
    defaultMessage: "Try locking",
  },

  previewTaskLabel: {
    id: "Task.pane.controls.preview.label",
    defaultMessage: "Preview Task",
  },

  browseChallengeLabel: {
    id: "Task.pane.controls.browseChallenge.label",
    defaultMessage: "Browse Challenge",
  },

  retryLockLabel: {
    id: "Task.pane.controls.retryLock.label",
    defaultMessage: "Retry Lock",
  },

  lockFailedTitle: {
    id: "Task.pane.lockFailedDialog.title",
    defaultMessage: "Unable to Lock Task",
  },

  lockFailedPrompt: {
    id: "Task.pane.lockFailedDialog.prompt",
    defaultMessage: "Task lock could not be acquired. A read-only preview is available."
  },

  saveChangesLabel: {
    id: "Task.pane.controls.saveChanges.label",
    defaultMessage: "Save Changes",
  },
})
