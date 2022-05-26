import { composeWithDevTools } from 'redux-devtools-extension'
import { combineReducers, legacy_createStore } from "redux"
import { cashReducer } from "./cashReducer"
import { customerReducer } from "./customerReducer"

const rootReducer = combineReducers({
    cash: cashReducer,
    customers: customerReducer
})
  
export const store = legacy_createStore(rootReducer, composeWithDevTools())
  