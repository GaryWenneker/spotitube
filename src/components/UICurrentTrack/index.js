import * as React from 'react';
import { connect } from 'react-redux';
import { setPlayer } from '../../redux/actions/player-actions';
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";
class UICurrentTrack extends React.Component {
    constructor() {
        super(...arguments);
        this.togglePlaying = (playing) => {
            this.props.setPlayer(Object.assign({}, this.props.player, { playing: playing }));
        };
    }
    format(val) {
        return ('0' + Math.floor(val)).slice(-2);
    }
    display(seconds) {
        const hours = seconds / 3600;
        const minutes = (seconds % 3600) / 60;
        seconds %= 60;
        return [hours, minutes, seconds].map(this.format).join(':');
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
        return (React.createElement(React.Fragment, null,
            React.createElement("section", { className: "current-track" },
                React.createElement("div", { className: "current-track__actions" },
                    React.createElement("a", { className: "ion-ios-skipbackward" }),
                    this.props.player && this.props.player.playing ?
                        React.createElement("a", { onClick: () => this.togglePlaying(false), className: "ion-ios-pause pause" }) :
                        React.createElement("a", { onClick: () => this.togglePlaying(true), className: "ion-ios-play play" }),
                    React.createElement("a", { className: "ion-ios-skipforward" })),
                React.createElement("div", { className: "current-track__progress" },
                    React.createElement("div", { className: "current-track__progress__start" }, this.display(this.props.player.duration)),
                    React.createElement("div", { className: "current-track__progress__bar" }, this.props.player && this.props.player.progress ?
                        React.createElement(Nouislider, { id: "song-progress", range: { min: 0, max: this.props.player.duration }, start: [parseInt(this.props.player.progress.playedSeconds.toString())], connect: true })
                        : null),
                    React.createElement("div", { className: "current-track__progress__finish" }, this.props.player && this.props.player.progress ?
                        this.display(parseInt(this.props.player.progress.playedSeconds.toString()))
                        :
                            React.createElement("span", null, "0:00"))),
                React.createElement("div", { className: "current-track__options" },
                    React.createElement("a", { href: "#", className: "lyrics" }, "Lyrics"),
                    React.createElement("span", { className: "controls" },
                        React.createElement("a", { href: "#", className: "control" },
                            React.createElement("i", { className: "ion-navicon" })),
                        React.createElement("a", { href: "#", className: "control" },
                            React.createElement("i", { className: "ion-shuffle" })),
                        React.createElement("a", { href: "#", className: "control" },
                            React.createElement("i", { className: "fa fa-refresh" })),
                        React.createElement("a", { href: "#", className: "control devices" },
                            React.createElement("i", { className: "ion-iphone" }),
                            React.createElement("span", null, "Devices Available")),
                        React.createElement("a", { href: "#", className: "control volume" },
                            React.createElement("i", { className: "ion-volume-high" }),
                            React.createElement("div", { id: "song-volume" })))))));
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
export default connect(mapStateToProps, mapDispatchToProps)(UICurrentTrack);
