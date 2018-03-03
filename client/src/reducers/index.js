import { combineReducers } from 'redux';
import authReducer from './authReducer';
import apiReducer from './apiReducer';

export default combineReducers({
    user: authReducer,
    api: apiReducer
});
