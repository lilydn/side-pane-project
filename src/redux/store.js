import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import RootReducer from './reducers';

export default function configureAppStore(preloadedState) {
	const middlewares = [thunkMiddleware];
	const middlewareEnhancer = applyMiddleware(...middlewares);

	const enhancers = [middlewareEnhancer];
	const composedEnhancers = applyMiddleware(enhancers);

	const store = configureStore(RootReducer, preloadedState, composedEnhancers);

	// if (module.hot) {
	// 	module.hot.accept('./reducers', () => store.replaceReducer(RootReducer));
	// }

	return store;
}
