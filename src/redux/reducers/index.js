import { combineReducers } from "redux";
import task from './dataCrad'
import favorite from './dataCrad'
import makeOrder from './dataCrad'

const rootReducers = () => combineReducers({
    task,
    favorite,
    makeOrder
})

export default rootReducers;