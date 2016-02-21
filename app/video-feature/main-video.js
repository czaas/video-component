import React from 'react';
import ReactPlayer from 'react-player';

export class MainVideo extends React.Component {
	render() {
		return (
			<div>
				<div className='video-wrapper'>
					<ReactPlayer
						url={this.props.video.content.videoUrl}
						playing={false}
						width={'100%'}
						height={'100%'}
					/>
				</div>
				<p><strong>{this.props.video.content.title}</strong></p>
				<p>{this.props.video.content.body}</p>
			</div>
		);
	}
}
