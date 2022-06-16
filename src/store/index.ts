import {createStore, applyMiddleware} from "redux";
import { listReducer } from "./reducer/listReducer";
import thunk from "redux-thunk";

export const store = createStore(listReducer, applyMiddleware(thunk));