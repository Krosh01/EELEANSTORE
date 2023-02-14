import { combineReducers } from "redux";
import task from './dataCrad'
import chosen from './dataCrad'

const rootReducers = (coin) => combineReducers({
    task, chosen
})

export default rootReducers;