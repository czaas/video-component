import { combineReducers } from 'redux';

import {
	REQUEST_VIDEOS,
	RECEIVE_VIDEOS,
	GET_VIDEOS,
} from './_action-types';



export const rootReducer = combineReducers({
	videoFeatureReducer
});

export function videoFeatureReducer(state = {
	mainVideo: '',
	allVideos: [],
	isLoading: false,
}, action) {
	switch (action.type) {
		case GET_VIDEOS:
			return Object.assign({}, state, {
				isLoading: true,
			});

		case RECEIVE_VIDEOS:
			return Object.assign({}, state, {
				isLoading: false,
				allVideos: [...action.data]
			});

		default: 
			return state;
	}
}