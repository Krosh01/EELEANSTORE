import { applyMiddleware, compose, createStore } from "redux"
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from "redux-thunk"
import rootReducers from "./reducers"

const coin = {}
const composeFunk = process.env.NODE_ENV === 'development' ? composeWithDevTools : compose
const composeEnhances = composeFunk(applyMiddleware(thunk))

const store = createStore(rootReducers(), coin, composeEnhances)

export default store;