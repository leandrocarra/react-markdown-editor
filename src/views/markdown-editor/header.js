'use strict'

import React, { PropTypes } from 'react'
import Button from 'components/button'
import SaveMessage from 'components/save-message'

const MarkdownEditorHeader = ({ isSaving, handleRemove, handleCreate }) => (
  <header className='editor-header'>
    <SaveMessage isSaving={isSaving} />

    <Button onClick={handleCreate} kind='success'>
      Create
    </Button>

    <Button onClick={handleRemove} kind='danger'>
      Remove
    </Button>
  </header>
)

MarkdownEditorHeader.prototypes = {
  handleRemove: PropTypes.func.isRequired,
  handleCreate: PropTypes.func.isRequired
}

export default MarkdownEditorHeader
