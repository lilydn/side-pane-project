import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { store } from './index';

const reducer = combineReducers({
	// here we will be adding reducers
});
const store = configureStore({
	reducer,
});
export default store;
