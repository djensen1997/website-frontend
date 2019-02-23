const drawerWidth = 250

const styles = theme => ({
  content: {
    height: 'calc(100% - 74px)',
    padding: '5px',
    overflowY: 'auto',
    transition: theme.transitions.create(['margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  contentShift: {
    //width: `calc(100% - ${drawerWidth + 10}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  nav: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  navShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  main: {
    backgroundColor: 'light-grey',
    width: '100%',
    height: '100%',
    position: 'fixed',
  },
  menuButton: {
    marginLeft: '-20px',
    marginRight: '20px',
  },
  sideNav: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
  }
})

export default styles
