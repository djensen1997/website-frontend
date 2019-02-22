import React from 'react'

import { Route, Switch } from 'react-router-dom'
import Home from '../Home/Home'
import { connect } from 'react-redux'
import styles from '../../Styles/LayoutStyles'
import {
  withStyles
} from '@material-ui/core'

export class Layout extends React.Component {
  componentDidMount() {

  }

  render() {
    const {
      classes
    } = this.props
    return (
      <div>
        <Switch>
          <div id="content" className={classes.content}>
            <Route exact path="/" component={Home} />
          </div>
        </Switch>
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Layout))
