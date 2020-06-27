import {combineReducers} from "redux"
import firstReducer from './data'

const rootReducer = () =>  {
  return combineReducers({
    data: firstReducer
  })
}

export default rootReducer