import React from 'react'

class ErrorBoundary extends React.Component<{}, {
  hasError: boolean
  error: null
  info: null
}> {
  state = {
    hasError: false,
    error: null,
    info: null,
  }

  componentDidCatch (error: any, info: any) {
    console.log(error, info)
    this.setState({
      hasError: true,
      error,
      info,
    })
  }

  render () {
    if (this.state.hasError) {
      return (<h1>Something went wrong.</h1>)
    }
    return this.props.children
  }
}

export default ErrorBoundary
