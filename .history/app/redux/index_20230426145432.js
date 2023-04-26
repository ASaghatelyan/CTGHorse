import {combineReducers, legacy_createStore as createStore} from 'redux';
import configReducer from './configReducer';
import horseRegister from './horseRegister';
import userInfo from './userReducer';
import filterData from './filterReduser';



const store = createStore(
  combineReducers({
    config: configReducer,
    horseRegister: horseRegister,
    userInfo: userInfo,
    filterData: filterData,
  }),
);

export default store;
