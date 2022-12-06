import { combineReducers } from '@reduxjs/toolkit';
import dataSlice from './dataSlice';

const appReducer = combineReducers({
	data: dataSlice,
});

const RootReducer = (state, action) => {
	return appReducer(state, action);
};

export default RootReducer;
