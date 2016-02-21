import { combineReducers } from 'redux';

import {
	REQUEST_VIDEOS,
	RECEIVE_VIDEOS,
	GET_VIDEOS,
	SET_MAIN_VIDEO,
} from './_action-types';



export const rootReducer = combineReducers({
	videoFeatureReducer
});

export function videoFeatureReducer(state = {
	mainVideo: {
		content: {
			title: '',
			body: '',
			url: ''
		}
	},
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

		case SET_MAIN_VIDEO:
			return Object.assign({}, state, {
				mainVideo: action.video
			});

		default: 
			return state;
	}
}