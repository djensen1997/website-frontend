import { combineReducers } from "redux"
import mainPageReducer from "./mainPageReducer"
import layout from './layoutReducer'

export default combineReducers({
    mainPageReducer,
    layout,
})
