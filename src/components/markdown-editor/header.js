'use strict'

import React, { PropTypes } from 'react'

const MarkdownEditorHeader = ({ isSaving, handleRemove, handleCreate }) => (
  <header className='editor-header'>
    <p className='save-message'>{isSaving ? 'Aguardando...' : 'Salvo!'}</p>
    <button onClick={handleCreate}>Create</button>
    <button onClick={handleRemove} className='button-remove'>Remove</button>
  </header>
)

MarkdownEditorHeader.prototypes = {
  isSaving: PropTypes.bool.isRequired,
  handleRemove: PropTypes.func.isRequired,
  handleCreate: PropTypes.func.isRequired
}

export default MarkdownEditorHeader
