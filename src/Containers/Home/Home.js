import React from 'react'
import { connect } from 'react-redux'
import {
  Paper,
  withStyles,
} from '@material-ui/core'
import styles from '../../Styles/HomeStyles'

export class Home extends React.Component {
  render() {
    const {
      classes,
      message,
    } = this.props
    return (
      <Paper className={classes.main}> {message} </Paper>
    )
  }
}

function mapStateToProps(state) {
  return {
    message: state.mainPageReducer.message,
  }
}

function mapDispatchToProps (dispatch) {
  return {
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Home))
