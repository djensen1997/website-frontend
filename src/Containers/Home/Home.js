import React from 'react'
import { connect } from 'react-redux'
import {
  Paper,
  withStyles,
} from '@material-ui/core'
import styles from '../../Styles/HomeStyles'

export class Home extends React.Component {
  render() {
    return (
      <Paper> Hello World </Paper>
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

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Home))
