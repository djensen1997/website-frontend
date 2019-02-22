import React from 'react'

// First we import some modules...
import { Router, Route } from 'react-router'
import Home from '../Home/Home'
import connect from 'react-redux/lib/connect/connect';

export class Layout extends React.Component {
  componentDidMount() {

  }

  render() {
    return (
      <Home />
    )
  }
}

function mapStateToProps(state) {
  return {

  }
}

function mapDispatchToProps (dispatch) {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout)
