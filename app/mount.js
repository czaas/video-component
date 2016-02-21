import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';

import './css/main.scss';

import { store } from './redux/store';
import VideoFeature from './video-feature/index';

ReactDom.render(
	<Provider store={store()}>
		<VideoFeature />
	</Provider>, 
	document.getElementById('app')
);