import * as React from 'react';
import { connect } from 'react-redux'
import ReactPlayer from 'react-player'
import { Text } from '@sitecore-jss/sitecore-jss-react';
import { setPlayer } from '../../redux/actions/player-actions';
import { PlayerState, ProgressState } from '../../redux/types/player-types';

interface props {
  currentTrack: any,
  player: PlayerState,
  setPlayer: (state: PlayerState) => void
}

class UIMusicPlayer extends React.Component<props, any> {

  constructor(props: any) {
    super(props)
    this.state = {
      playing: true
    }
  }

  onDuration = (duration) => {
    this.props.setPlayer(
      {...this.props.player, duration: duration}
    )
  }

  onSeek = (seek) => {
    console.log('onSeek', seek)
    //  this.props.setPlayer(
    //   {...this.props.player, played: seek}
    // )
  }

  onProgress = (state: ProgressState) => {
    this.props.setPlayer(
      { ...this.props.player, progress: state }
    )
  }



  player: any;

  ref = player => {
    this.player = player
  }

  render() {

    return (
      <React.Fragment>
        {
          this.props && this.props.currentTrack ?
            <div className='player-wrapper'>
              <div className="logo-overlay"></div>
              <ReactPlayer
                ref={this.ref}
                url={`https://www.youtube.com/watch?modestbranding=1&v=${this.props.currentTrack.id.videoId}`}
                youtubeConfig={{ playerVars: { showinfo: 1, controls: 0 } }}
                playing={this.props.player.playing}
                width='100%'
                height='100%'
                className='react-player'
                onDuration={this.onDuration}
                onSeek={this.onSeek}
                onProgress={this.onProgress}
              />
            </div>
            :
            <div>not found</div>
        }
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentTrack: state.tracks.currentTrack,
    player: state.player
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    setPlayer: (state: PlayerState) => dispatch(setPlayer(state))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(UIMusicPlayer);