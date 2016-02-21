import React from 'react';

export class OtherVideos extends React.Component {
	render() {

		let otherVideos = this.props.allVideos.map((video, videoIndex) => {
			if(video.id !== this.props.currentVideo.id) {
				var youtubeId = video.content.videoUrl.split('?v=')[1];

				return (
					<div key={videoIndex} onClick={this.props.handleLoadVideo.bind(this, video)}>
						<img src={'http://img.youtube.com/vi/' + youtubeId + '/default.jpg'} width='100' />
						<p>{video.content.title}</p>
					</div>
				)
			}
		});

		return (
			<div>
				{otherVideos}
			</div>
		);
	}
}
