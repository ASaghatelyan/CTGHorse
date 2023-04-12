import {combineReducers, legacy_createStore as createStore} from 'redux';
import configReducer from './configReducer';
import horseRegister from './horseRegister';
import userInfo from './userReducer';


const store = createStore(
  combineReducers({
    config: configReducer,
    horseRegister: horseRegister,
  }),
);

export default store;
