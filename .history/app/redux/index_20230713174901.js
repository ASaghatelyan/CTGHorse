import {combineReducers, legacy_createStore as createStore} from 'redux';
import configReducer from './configReducer';
import horseRegister from './horseRegister';
import userInfo from './userReducer';
import filterData from './filterReduser';
import filterItem from './filterItemReducer';
import toastMessages from './toastMessages';



const store = createStore(
  combineReducers({
    config: configReducer,
    horseRegister: horseRegister,
    userInfo: userInfo,
    filterData: filterData,
    filterItem: filterItem,
    toast:toastMessages
  }),
);

export default store;
