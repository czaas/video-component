import axios from 'axios';
import {
	REQUEST_VIDEOS,
	RECEIVE_VIDEOS,
	GET_VIDEOS,
	SET_MAIN_VIDEO,
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

export function setMainVideo(video) {
	return {
		type: SET_MAIN_VIDEO,
		video
	}
}

export function getVideos() {
	return (dispatch) => {
		dispatch(requestVideos())

		axios.get('http://dev100.etnainteractive.com/api/v1/content/?type=video')
			.then((response) => {
				dispatch(recieveVideos(response.data));
				dispatch(setMainVideo(response.data[0]));
			})
			.catch(err => console.error(err))
	}
}