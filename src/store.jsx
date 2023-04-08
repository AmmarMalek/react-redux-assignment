import { combineReducers, createStore } from "redux";
import MyData from "./reducer/reducer";

const store = createStore(combineReducers({
    listdata : MyData,
}))

export default store;