import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { cashReducer } from "./cashReducer";
import { customerReducer } from "./customerReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    cash: cashReducer,
    customers: customerReducer,
});

export const store = legacy_createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);
