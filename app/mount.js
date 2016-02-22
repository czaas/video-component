import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';

import './css/main.scss';

import { store } from './redux/store';
import VideoFeature from './video-feature/index';

export default class VideoFeatureApp extends React.Component {
	render() {
		return (
			<Provider store={store()}>
				<VideoFeature />
			</Provider>
		);
	}
}


ReactDom.render(
	<VideoFeatureApp />, 
	document.getElementById('app')
);