import { createStore, combineReducers } from "redux";
import Cakes from "./Reducers/CakesReducers";
import Ice from "./Reducers/IceCreamReducers";

export default createStore(combineReducers({ Cakes, Ice }));