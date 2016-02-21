import axios from 'axios';
import {
	REQUEST_VIDEOS,
	RECEIVE_VIDEOS,
	GET_VIDEOS
} from './_action-types';

export function requestVideos() {
	return {
		type: REQUEST_VIDEOS
	}
}

export function recieveVideos(data) {
	return {
		type: RECEIVE_VIDEOS,
		data
	}
}

export function getVideos() {
	return (dispatch) => {
		dispatch(requestVideos())

		axios.get('http://dev100.etnainteractive.com/api/v1/content/?type=video')
			.then(response => dispatch(recieveVideos(response.data)))
			.catch(err => console.error(err))
	}
}