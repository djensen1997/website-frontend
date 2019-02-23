import React from 'react'
import { connect } from 'react-redux'
import {
  Paper,
  withStyles,
} from '@material-ui/core'
import styles from '../../Styles/AboutStyles'

export class About extends React.Component {
  render() {
    const {
      classes,
    } = this.props
    return (
      <Paper className={classes.main}> Hello About </Paper>
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

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(About))
