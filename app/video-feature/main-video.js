import React from 'react';
import ReactPlayer from 'react-player';

export class MainVideo extends React.Component {
	render() {
		return (
			<div>
				<ReactPlayer
					url={this.props.video.content.videoUrl}
					playing={false}
				/>
				<p><strong>{this.props.video.content.title}</strong></p>
				<p>{this.props.video.content.body}</p>
			</div>
		);
	}
}
