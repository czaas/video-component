import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

import { rootReducer } from './reducer';

export function store(initialState) {
	return createStore(
		rootReducer,
		initialState,
		applyMiddleware(thunkMiddleware, createLogger())
	)
}