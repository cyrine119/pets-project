import {combineReducers} from "redux";
import authReducer from "./AuthReducer";
import { petReducer } from "./pet";
import {editReducer} from "./edit"

const rootReducer = combineReducers({authReducer, petReducer, editReducer})

export default rootReducer;