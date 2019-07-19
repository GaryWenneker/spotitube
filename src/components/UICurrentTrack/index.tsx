import * as React from 'react';
import { connect } from 'react-redux'
import { Text } from '@sitecore-jss/sitecore-jss-react';
import { PlayerState } from '../../redux/types/player-types';
import { setPlayer } from '../../redux/actions/player-actions';
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";

interface props {
  currentTrack: any,
  player: PlayerState,
  setPlayer: (state: PlayerState) => void
}

class UICurrentTrack extends React.Component<props, any> {

  format (val) {
    return ('0' + Math.floor(val)).slice(-2)
  }

  display (seconds) {
    const hours = seconds / 3600
    const minutes = (seconds % 3600) / 60
    seconds %= 60
  
    return [hours, minutes, seconds].map(this.format).join(':')
  }
  
  togglePlaying = (playing: boolean) => {
    this.props.setPlayer(
      { ...this.props.player, playing: playing }
    )
  }

  componentDidMount() {
    // var slider = document.getElementById('song-progress');
    //       noUiSlider.create(slider, {
    //         start: [20],
    //         range: {
    //           'min': [0],
    //           'max': [100]
    //         }
    //       });
  }

  render() {
    return (
      <React.Fragment>
        <section className="current-track">
          <div className="current-track__actions">
            <a className="ion-ios-skipbackward"></a>
            {
              this.props.player && this.props.player.playing ?
                <a onClick={() => this.togglePlaying(false)} className="ion-ios-pause pause"></a> :
                <a onClick={() => this.togglePlaying(true)} className="ion-ios-play play"></a>
            }
            <a className="ion-ios-skipforward"></a>
          </div>
          <div className="current-track__progress">
            <div className="current-track__progress__start">{ this.display(this.props.player.duration) }</div>
            <div className="current-track__progress__bar">
              {
                this.props.player && this.props.player.progress ?
                    <Nouislider 
                        id="song-progress"
                        range={{ min: 0, max:this.props.player.duration }} 
                        start={[parseInt(this.props.player.progress.playedSeconds.toString())]} 
                        connect 
                      />
                : null
              }
              
            </div>
            <div className="current-track__progress__finish">
              { 
                this.props.player && this.props.player.progress ?
                this.display(parseInt(this.props.player.progress.playedSeconds.toString()))
                :
                <span>0:00</span>
               }
            </div>
          </div>
          <div className="current-track__options">
            <a href="#" className="lyrics">Lyrics</a>
            <span className="controls">

              <a href="#" className="control">
                <i className="ion-navicon"></i>
              </a>

              <a href="#" className="control">
                <i className="ion-shuffle"></i>
              </a>

              <a href="#" className="control">
                <i className="fa fa-refresh"></i>
              </a>

              <a href="#" className="control devices">
                <i className="ion-iphone"></i>
                <span>Devices Available</span>
              </a>

              <a href="#" className="control volume">
                <i className="ion-volume-high"></i>
                <div id="song-volume"></div>
              </a>

            </span>
          </div>
        </section>
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
export default connect(mapStateToProps, mapDispatchToProps)(UICurrentTrack);
