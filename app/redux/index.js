import { combineReducers, legacy_createStore as createStore } from "redux";
import configReducer from "./configReducer";
import userReducer from "./customerReducer";
 


const store = createStore(
  combineReducers({
    config: configReducer,
    customer: userReducer,
  }));

export default store;
