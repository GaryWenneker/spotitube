import * as React from 'react';
import { connect } from 'react-redux';
import { getTracksData } from '../../redux/actions/track-actions';
class UIArtistAlbums extends React.Component {
    getTracks(album) {
        this.props.getTracks(album);
    }
    render() {
        const { albums } = this.props.artist;
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "section-title" }, "Popular"),
            React.createElement("div", { className: "tracks" }, albums ? albums.map((album, i) => (React.createElement(React.Fragment, { key: i },
                React.createElement("a", { href: "#", className: "related-artist", onClick: () => this.getTracks(album) },
                    React.createElement("div", { className: "track" },
                        React.createElement("div", { className: "track__art" },
                            React.createElement("img", { src: (album.images && album.images[0]) ? album.images[0].url : null, alt: album.name })),
                        React.createElement("div", { className: "track__number" }, i + 1),
                        React.createElement("div", { className: "track__added" },
                            React.createElement("i", { className: "ion-checkmark-round added" })),
                        React.createElement("div", { className: "track__title" }, album.name),
                        React.createElement("div", { className: "track__explicit" },
                            React.createElement("span", { className: "label" }, "Explicit")),
                        React.createElement("div", { className: "track__plays" }, "147,544,165"))))))
                : null)));
    }
}
const mapStateToProps = (state) => {
    return {
        artist: state.artist
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        getTracks: (album) => dispatch(getTracksData(album)),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(UIArtistAlbums);
