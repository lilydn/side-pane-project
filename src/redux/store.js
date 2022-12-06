import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import RootReducer from './reducers';

export default function configureAppStore(preloadedState) {
	const middlewares = [thunkMiddleware];
	const middlewareEnhancer = applyMiddleware(...middlewares);

	const store = configureStore({
		reducer: RootReducer,
		middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
		preloadedState,
		enhancers: [middlewareEnhancer],
	});

	return store;
}
