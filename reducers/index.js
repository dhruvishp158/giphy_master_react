import {combineReducers} from 'redux';
import searchReducer from './Search';

export default combineReducers(
    {
        search:searchReducer,
    }
);