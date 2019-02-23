import React from 'react'

import { Route, Switch, Link } from 'react-router-dom'
import HomePage from '../Home/Home'
import AboutPage from '../About/About'
import { connect } from 'react-redux'
import styles from '../../Styles/LayoutStyles'
import classNames from 'classnames'
import {
  withStyles,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  Divider,
  ListItem,
  List,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core'
import {
  Menu,
} from '@material-ui/icons'
import * as navActions from '../../Actions/NavActions'
import pageInfo from './PageInfo'

export class Layout extends React.Component {
  componentDidMount() {

  }

  render() {
    const {
      classes,
      pageName,
      isSideNavOpen,
    } = this.props
    return (
      <div className={classes.main}>
        <AppBar
          id='app bar'
          position="static"
          style={{backgroundColor: 'rgb(130, 5, 5)'}}
          className={classNames(classes.nav, {[classes.navShift]: isSideNavOpen})}
        >
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={() => this.props.toggleSideNav()}>
              <Menu />
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              {pageName}
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.sideNav}
          variant="persistent"
          anchor="left"
          open={isSideNavOpen}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          {/* <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </div> */}
          <Divider />
          <List>
            {pageInfo.map((page) => {
              const PageIcon = page.icon
              return (
                <Link to={page.route} exact>
                  <ListItem button key={page.name}>
                    <ListItemIcon><PageIcon /></ListItemIcon>
                    <ListItemText primary={page.name} />
                  </ListItem>
                </Link>
              )
            })}
          </List>
        </Drawer>
        <Switch>
          <div id="content" className={classNames(classes.content, {[classes.contentShift]: isSideNavOpen})}>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/About" component={AboutPage} />
          </div>
        </Switch>
      </div>
    )
  }
}

Layout.defaultProps = {
  pageName: 'Home Page',
}

function mapStateToProps(state) {
  return {
    pageName: state.layout.pageName,
    isSideNavOpen: state.layout.isSideNavOpen,
  }
}

function mapDispatchToProps (dispatch) {
  return {
    toggleSideNav: () => dispatch(navActions.toggleSideNav()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Layout))
