import {combineReducers} from 'redux';
import homeReducer from './homeReducer';
import viewReducer from './viewReducer';

export default combineReducers({
    home: homeReducer,
    view: viewReducer
})