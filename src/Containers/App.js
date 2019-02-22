import React from 'react'
import '../Styles/App.css'
import Layout from './Layout/Layout'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
/* import logo from '../Other/logo.svg'

const unkown = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
} */

const App = () => {
  return (
    <div style={{backgroundColor: 'grey'}}>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Layout} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
