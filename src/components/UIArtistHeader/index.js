import React from 'react';
import { connect } from 'react-redux';
import CopyToClipboard from 'react-copy-to-clipboard';
class UIArtistHeader extends React.Component {
    render() {
        const { images } = this.props.artist;
        return (React.createElement(React.Fragment, null,
            (images && images[0] && images[0].url) ?
                React.createElement("style", { dangerouslySetInnerHTML: {
                        __html: [
                            '.artist__backdrop:before {',
                            '  background-image: url(' + images[0].url + ');',
                            '  background-position-y: 30%;',
                            '}'
                        ].join('\n')
                    } })
                : null,
            React.createElement("div", { className: "artist__header artist__backdrop" },
                React.createElement("div", { className: "artist__info" },
                    React.createElement("div", { className: "profile__img" },
                        React.createElement("img", { src: (images && images[1]) ? images[1].url : null, alt: this.props.artist.name })),
                    React.createElement("div", { className: "artist__info__meta" },
                        React.createElement("div", { className: "artist__info__type" }, "Artist"),
                        React.createElement("div", { className: "artist__info__name" }, this.props.artist.name),
                        React.createElement("div", { className: "artist__info__actions" },
                            React.createElement("button", { className: "button-dark" },
                                React.createElement("i", { className: "ion-ios-play" }),
                                "Play"),
                            React.createElement("button", { className: "button-light" }, "Follow"),
                            React.createElement(CopyToClipboard, { text: this.props.artist.id },
                                React.createElement("button", { className: "button-light more" },
                                    React.createElement("i", { className: "ion-ios-more" })))))),
                React.createElement("div", { className: "artist__listeners" },
                    React.createElement("div", { className: "artist__listeners__count" }, (this.props.artist && this.props.artist.followers) ? this.props.artist.followers.total : null),
                    React.createElement("div", { className: "artist__listeners__label" }, "Monthly Listeners")),
                React.createElement("div", { className: "artist__navigation" },
                    React.createElement("ul", { className: "nav nav-tabs", role: "tablist" },
                        React.createElement("li", { role: "presentation", className: "active" },
                            React.createElement("a", { href: "#artist-overview", "aria-controls": "artist-overview", role: "tab", "data-toggle": "tab" }, "Overview")),
                        React.createElement("li", { role: "presentation" },
                            React.createElement("a", { href: "#related-artists", "aria-controls": "related-artists", role: "tab", "data-toggle": "tab" }, "Related Artists")),
                        React.createElement("li", { role: "presentation" },
                            React.createElement("a", { href: "#artist-about", "aria-controls": "artist-about", role: "tab", "data-toggle": "tab" }, "About"))),
                    React.createElement("div", { className: "artist__navigation__friends" },
                        React.createElement("a", { href: "#" },
                            React.createElement("img", { src: "http://zblogged.com/wp-content/uploads/2015/11/17.jpg", alt: "" })),
                        React.createElement("a", { href: "#" },
                            React.createElement("img", { src: "http://zblogged.com/wp-content/uploads/2015/11/5.png", alt: "" })),
                        React.createElement("a", { href: "#" },
                            React.createElement("img", { src: "http://cdn.devilsworkshop.org/files/2013/01/enlarged-facebook-profile-picture.jpg", alt: "" })))))));
    }
}
const mapStateToProps = (state) => {
    return {
        artist: state.artist
    };
};
const mapDispatchToProps = (dispatch) => {
    return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(UIArtistHeader);
