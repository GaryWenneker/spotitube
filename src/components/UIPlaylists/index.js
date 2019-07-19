import * as React from 'react';
import { connect } from 'react-redux';
import { getsearchSingleArtist } from '../../redux/actions/artist-actions';
class UIPlaylists extends React.Component {
    constructor() {
        super(...arguments);
        this.searchArtist = (query) => {
            this.props.getsearchSingleArtist(query);
        };
    }
    render() {
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "collapse in", id: "playlists" },
                React.createElement("a", { href: "#", className: "navigation__list__item", onClick: () => this.searchArtist('Beastie Boys') },
                    React.createElement("i", { className: "ion-ios-musical-notes" }),
                    React.createElement("span", null, "Beastie Boys")),
                React.createElement("a", { href: "#", className: "navigation__list__item", onClick: () => this.searchArtist('Giorgio Moroder') },
                    React.createElement("i", { className: "ion-ios-musical-notes" }),
                    React.createElement("span", null, "Giorgio Moroder")),
                React.createElement("a", { href: "#", className: "navigation__list__item", onClick: () => this.searchArtist('The Clash') },
                    React.createElement("i", { className: "ion-ios-musical-notes" }),
                    React.createElement("span", null, "The Clash")),
                React.createElement("a", { href: "#", className: "navigation__list__item", onClick: () => this.searchArtist('Frankie Goes To Hollywood') },
                    React.createElement("i", { className: "ion-ios-musical-notes" }),
                    React.createElement("span", null, "Frankie Goes To Hollywood")),
                React.createElement("a", { href: "#", className: "navigation__list__item", onClick: () => this.searchArtist('Joy Division') },
                    React.createElement("i", { className: "ion-ios-musical-notes" }),
                    React.createElement("span", null, "Joy Division")),
                React.createElement("a", { href: "#", className: "navigation__list__item", onClick: () => this.searchArtist('Kaiser Chiefs') },
                    React.createElement("i", { className: "ion-ios-musical-notes" }),
                    React.createElement("span", null, "Kaiser Chiefs")),
                React.createElement("a", { href: "#", className: "navigation__list__item", onClick: () => this.searchArtist('Herman Brood') },
                    React.createElement("i", { className: "ion-ios-musical-notes" }),
                    React.createElement("span", null, "Herman Brood")),
                React.createElement("a", { href: "#", className: "navigation__list__item", onClick: () => this.searchArtist('Heaven 17') },
                    React.createElement("i", { className: "ion-ios-musical-notes" }),
                    React.createElement("span", null, "Heaven 17")),
                React.createElement("a", { href: "#", className: "navigation__list__item", onClick: () => this.searchArtist('The English Beat') },
                    React.createElement("i", { className: "ion-ios-musical-notes" }),
                    React.createElement("span", null, "The English Beat")),
                React.createElement("a", { href: "#", className: "navigation__list__item", onClick: () => this.searchArtist('The Specials') },
                    React.createElement("i", { className: "ion-ios-musical-notes" }),
                    React.createElement("span", null, "The Specials")),
                React.createElement("a", { href: "#", className: "navigation__list__item", onClick: () => this.searchArtist('Sex Pistols') },
                    React.createElement("i", { className: "ion-ios-musical-notes" }),
                    React.createElement("span", null, "Sex Pistols")),
                React.createElement("a", { href: "#", className: "navigation__list__item", onClick: () => this.searchArtist('Yazoo') },
                    React.createElement("i", { className: "ion-ios-musical-notes" }),
                    React.createElement("span", null, "Yazoo")))));
    }
}
const mapStateToProps = (state) => {
    return {};
};
const mapDispatchToProps = (dispatch) => {
    return {
        getsearchSingleArtist: (query) => dispatch(getsearchSingleArtist(query))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(UIPlaylists);
