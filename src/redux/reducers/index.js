import { combineReducers } from "redux";
import task from './dataCrad'
import favorite from './dataCrad'

const rootReducers = () => combineReducers({
    task,
    favorite
})

export default rootReducers;