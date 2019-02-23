import {
  SET_PAGE_NAME,
  TOGGLE_SIDE_NAV,
} from '../Actions/NavActionTypes'

const initialState = {
  pageName: 'Home Page',
  isSideNavOpen: false,
}

export default function(state = initialState, action) {
  switch (action.type) {
      case SET_PAGE_NAME: {
        const newState = {
          ...state,
          pageName: action.pageName
        }
        return newState
      }
      case TOGGLE_SIDE_NAV: {
        const newState = {
          ...state,
          isSideNavOpen: !state.isSideNavOpen,
        }
        return newState
      }
      default: {
          return {...state}
      }
  }
}
  