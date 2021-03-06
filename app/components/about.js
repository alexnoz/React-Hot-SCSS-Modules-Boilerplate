import React, { Component, Fragment } from 'react'

// use this function to do component-level code splitting
import loadComponent from '../routes'

const Login = loadComponent('login')

class About extends Component {
  state = { showLogin: false }

  onClick = e => {
    this.setState(prevState => ({
      showLogin: !prevState.showLogin
    }))
  }

  render () {
    const { showLogin } = this.state

    return (
      <Fragment>
        <h2>About:</h2>
        <p>
          The aim of this project is to provide a boilerplate that helps
          to build a PWA using SSR, HMR and Code Splitting
        </p>
        <h3>Features:</h3>
        <ul>
          <li>Hot module replacement</li>
          <li>Server-side rendering</li>
          <li>Code splitting</li>
          <li>Progressive Web App (passes all of the {
            <a
              rel='noopener noreferer'
              target='_blank'
              href='https://developers.google.com/web/tools/lighthouse/'
            >
              lighthouse's
            </a>
            } audits)
          </li>
        </ul>
        <button onClick={this.onClick}>
          {showLogin ? 'Hide ' : 'Show '}
          a dynamic component example
        </button>
        {showLogin && <Login />}
      </Fragment>
    )
  }
}

export default About
