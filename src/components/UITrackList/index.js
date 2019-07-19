import * as React from 'react';
import { connect } from 'react-redux';
import searchYouTube from 'youtube-api-search';
import { setCurrentTrack } from '../../redux/actions/track-actions';
import UIMusicPlayer from '../UIMusicPlayer';
const API_KEY = 'AIzaSyB7Y0UfGlDYQPZfOod95aL2MwUT2aFYzc0';
class UITrackList extends React.Component {
    constructor() {
        super(...arguments);
        this.searchYoutube = (query) => {
            searchYouTube({ key: API_KEY, term: query.replace('|', ''), maxResults: 6 }, (videos) => {
                console.log(videos);
                if (videos && videos.length > 0) {
                    let data = query.split('|');
                    this.props.setTrack(Object.assign({}, videos[0]));
                }
            });
        };
    }
    convertToString(ms, delim = " : ") {
        const showWith0 = value => (value < 10 ? `0${value}` : value);
        const hours = showWith0(Math.floor((ms / (1000 * 60 * 60)) % 60));
        const minutes = showWith0(Math.floor((ms / (1000 * 60)) % 60));
        const seconds = showWith0(Math.floor((ms / 1000) % 60));
        return `${parseInt(hours) ? `${hours}${delim}` : ""}${minutes}${delim}${seconds}`;
    }
    render() {
        const { tracks } = this.props;
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "related-artists" }, tracks && tracks[0] ? tracks.map((track, i) => (React.createElement(React.Fragment, { key: i },
                React.createElement("div", { className: "track" },
                    React.createElement("div", { className: "track__number" }, i + 1),
                    React.createElement("div", { className: "track__added" },
                        React.createElement("i", { className: "ion-checkmark-round added" })),
                    React.createElement("div", { className: "track__title" },
                        React.createElement("a", { href: "#", onClick: () => this.searchYoutube(`${this.props.artist.name}|${track.name}`) }, track.name)),
                    React.createElement("div", { className: "track__explicit" }, track.isExplicit ?
                        React.createElement("span", { className: "label" }, "Explicit")
                        :
                            null),
                    React.createElement("div", { className: "track__length" }, this.convertToString(track.durationMs)),
                    React.createElement("div", { className: "track__popularity" },
                        React.createElement("i", { className: "ion-arrow-graph-up-right" }))))))
                : null),
            React.createElement(UIMusicPlayer, null)));
    }
}
const mapStateToProps = (state) => {
    return {
        artist: state.artist,
        tracks: state.tracks.tracks
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        setTrack: (track) => dispatch(setCurrentTrack(track))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(UITrackList);
