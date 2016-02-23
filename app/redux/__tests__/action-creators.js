import expect from 'expect';

import * as actions from '../actions.js';
import * as types from '../_action-types.js';

describe('action creators', () => {
	describe('request videos', () => {
		it('should return object with the action type', () => {
			const expectedAction = {
				type: types.REQUEST_VIDEOS
			};

			expect(actions.requestVideos()).toEqual(expectedAction);
		})
	});

	describe('recieve videos', () => {
		it('should return an object with the type of action and all data returned to it', () => {
			const data = [{ videoUrl: 'test.com/test', length: 54 }, { videoUrl: 'test.com/test-2', length: 32 }];
			const expectedAction = {
				type: types.RECEIVE_VIDEOS,
				data: data
			};

			expect(actions.receiveVideos(data)).toEqual(expectedAction);
		});
	});

	describe('set main video video', () => {
		it('should return an object with type of set main video and the video object', () => {
			const singleObject = { videoUrl: 'test.com/test', length: 54 };
			const expectedAction = {
				type: types.SET_MAIN_VIDEO,
				video: singleObject
			};

			expect(actions.setMainVideo(singleObject)).toEqual(expectedAction);
		});
	});
});