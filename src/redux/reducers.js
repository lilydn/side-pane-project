import { combineReducers } from '@reduxjs/toolkit';
import dataSlice from './dataSlice';

const reducer = combineReducers({
	data: dataSlice,
});

// const RootReducer = (state, action) => {
// 	return appReducer(state, action);
// };

export default reducer;
