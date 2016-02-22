import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from '../redux/actions';
import { MainVideo } from './main-video'
import { OtherVideos } from './other-videos';

export class VideoFeature extends React.Component {

	constructor(props) {
		super(props);

		this.componentDidMount = this.componentDidMount.bind(this);
		this.handleLoadVideo = this.handleLoadVideo.bind(this);
	}

	componentDidMount() {
		this.props.feature.getVideos();
	}

	handleLoadVideo(video) {

		video.autoplay = true;
		
		this.props.feature.setMainVideo(video)
	}

	render() {
		return (
			<div className='container'>
				<h1>VideoFeature</h1>

				<div>
					<h2>Main Video</h2>
					<MainVideo video={this.props.mainVideo} />
				</div>

				<div>
					<h2>Related Videos</h2>
					<OtherVideos 
						allVideos={this.props.allVideos} 
						currentVideo={this.props.mainVideo} 
						handleLoadVideo={this.handleLoadVideo}
					/>
				</div>
			</div>
		);
	}
}


function mapStateToProps (state) {
	return {
		mainVideo: state.videoFeatureReducer.mainVideo,
		allVideos: state.videoFeatureReducer.allVideos,
		isLoading: state.videoFeatureReducer.isLoading,
	}
}

function mapDispatchToProps (dispatch) {
	return {
		feature: bindActionCreators(actions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoFeature);