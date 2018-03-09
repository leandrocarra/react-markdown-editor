'use script'

import React, { Component } from 'react'
import marked from 'marked'
import MarkdownEditor from 'components/markdown-editor'

import './css/style.css'

import('highlight.js').then((hljs) => {
  marked.setOptions({
    highlight: (code, lang) => {
      if (lang && hljs.getLanguage(lang)) {
        return hljs.highlight(lang, code).value
      }
      return hljs.highlightAuto(code).value
    }
  })
})

class App extends Component {
  constructor () {
    super()
    this.state = { value: '' }

    this.handleChange = (e) => {
      this.setState({ value: e.target.value })
    }
    this.getMarkup = () => {
      return { __html: marked(this.state.value) }
    }
    this.handleSave = () => {
      localStorage.setItem('md', this.state.value)
    }
  }

  componentDidMount () {
    const value = localStorage.getItem('md')
    this.setState({ value })
  }

  componentDidUpdate () {
    clearInterval(this.timer)
    this.timer = setTimeout(this.handleSave, 700)
  }

  render () {
    return (
      <MarkdownEditor
        value={this.state.value}
        handleChange={this.handleChange}
        getMarkup={this.getMarkup}
        handleSave={this.handleSave}
      />
    )
  }
}

export default App
