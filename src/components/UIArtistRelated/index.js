import * as React from 'react';
import { connect } from 'react-redux';
import { getArtistData } from '../../redux/actions/artist-actions';
import { track } from '../../redux/actions/tracking-actions';
class UIArtistRelated extends React.Component {
    getArtist(id) {
        this.props.getArtist(id);
        this.props.track('{371F5C31-C436-4383-AAAA-E29BDA2D1EE1}');
        this.props.track('{061797F0-1B73-49C9-87BB-E710B7E46DCB}');
        //this.props.track('Related Artist Click');
        // this.props.track('Player Clicked'); 
        // this.props.track('{61B51C8A-3C44-4462-A9A6-139E588FD650}');
        // this.props.track('{2444A0A2-F3F2-4971-AFF1-15A9C4CBECBB}');
        // this.props.track('{1811AD83-161A-457F-B690-9B7CA25EAF1B}');
    }
    render() {
        const { relatedArtists } = this.props.artist;
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "related-artists" }, relatedArtists ? relatedArtists.map((artist, i) => (React.createElement(React.Fragment, { key: i },
                React.createElement("a", { href: "#", className: "related-artist", onClick: () => this.getArtist(artist.id) },
                    React.createElement("span", { className: "related-artist__img" },
                        React.createElement("img", { src: (artist.images && artist.images[0]) ? artist.images[0].url : null, alt: artist.name })),
                    React.createElement("span", { className: "related-artist__name" }, artist.name)))))
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
        getArtist: (id) => dispatch(getArtistData(id)),
        track: (event) => dispatch(track(event)),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(UIArtistRelated);
