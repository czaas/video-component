import React from 'react';

import { OtherVideos } from './other-videos';

export class VideoFeature extends React.Component {
	render() {
		return (
			<div className='container'>
				<h1>VideoFeature</h1>

				<div>
					<h2>Main Video</h2>
					<p>Title</p>
					<p>Description</p>
				</div>

				<div>
					<h2>Related Videos</h2>
					<OtherVideos allVideos='' currentVideo='' />
				</div>
			</div>
		);
	}
}
