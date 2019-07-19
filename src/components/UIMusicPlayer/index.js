import * as React from 'react';
import { connect } from 'react-redux';
import ReactPlayer from 'react-player';
import { setPlayer } from '../../redux/actions/player-actions';
class UIMusicPlayer extends React.Component {
    constructor(props) {
        super(props);
        this.onDuration = (duration) => {
            this.props.setPlayer(Object.assign({}, this.props.player, { duration: duration }));
        };
        this.onSeek = (seek) => {
            console.log('onSeek', seek);
            //  this.props.setPlayer(
            //   {...this.props.player, played: seek}
            // )
        };
        this.onProgress = (state) => {
            this.props.setPlayer(Object.assign({}, this.props.player, { progress: state }));
        };
        this.ref = player => {
            this.player = player;
        };
        this.state = {
            playing: true
        };
    }
    render() {
        return (React.createElement(React.Fragment, null, this.props && this.props.currentTrack ?
            React.createElement("div", { className: 'player-wrapper' },
                React.createElement("div", { className: "logo-overlay" }),
                React.createElement(ReactPlayer, { ref: this.ref, url: `https://www.youtube.com/watch?modestbranding=1&v=${this.props.currentTrack.id.videoId}`, youtubeConfig: { playerVars: { showinfo: 1, controls: 0 } }, playing: this.props.player.playing, width: '100%', height: '100%', className: 'react-player', onDuration: this.onDuration, onSeek: this.onSeek, onProgress: this.onProgress }))
            :
                React.createElement("div", null, "not found")));
    }
}
const mapStateToProps = (state) => {
    return {
        currentTrack: state.tracks.currentTrack,
        player: state.player
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        setPlayer: (state) => dispatch(setPlayer(state))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(UIMusicPlayer);
