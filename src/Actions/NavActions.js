import * as types from './NavActionTypes'

export function setPageName(pageName) {
  return dispatch => {
      return dispatch({
          type: types.SET_PAGE_NAME,
          pageName,
      })
  }
}

export function toggleSideNav() {
  return dispatch => {
    return dispatch({
      type: types.TOGGLE_SIDE_NAV,
    })
  }
}
