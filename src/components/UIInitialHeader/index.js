import * as React from 'react';
class UIInitialHeader extends React.Component {
    render() {
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "artist__header" },
                React.createElement("div", { className: "artist__info" },
                    React.createElement("div", { className: "profile__img" },
                        React.createElement("img", { src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/g_eazy_propic.jpg", alt: "G-Eazy" })),
                    React.createElement("div", { className: "artist__info__meta" },
                        React.createElement("div", { className: "artist__info__type" }, "Artist"),
                        React.createElement("div", { className: "artist__info__name" }, "G-Eazy"),
                        React.createElement("div", { className: "artist__info__actions" },
                            React.createElement("button", { className: "button-dark" },
                                React.createElement("i", { className: "ion-ios-play" }),
                                "Play"),
                            React.createElement("button", { className: "button-light" }, "Follow"),
                            React.createElement("button", { className: "button-light more" },
                                React.createElement("i", { className: "ion-ios-more" }))))),
                React.createElement("div", { className: "artist__listeners" },
                    React.createElement("div", { className: "artist__listeners__count" }, "15,662,810"),
                    React.createElement("div", { className: "artist__listeners__label" }, "Monthly Listeners")),
                React.createElement("div", { className: "artist__navigation" },
                    React.createElement("ul", { className: "nav nav-tabs", role: "tablist" },
                        React.createElement("li", { role: "presentation", className: "active" },
                            React.createElement("a", { href: "#artist-overview", "aria-controls": "artist-overview", role: "tab", "data-toggle": "tab" }, "Overview")),
                        React.createElement("li", { role: "presentation" },
                            React.createElement("a", { href: "#related-artists", "aria-controls": "related-artists", role: "tab", "data-toggle": "tab" }, "Related Artists"))),
                    React.createElement("div", { className: "artist__navigation__friends" },
                        React.createElement("a", { href: "#" },
                            React.createElement("img", { src: "http://zblogged.com/wp-content/uploads/2015/11/17.jpg", alt: "" })),
                        React.createElement("a", { href: "#" },
                            React.createElement("img", { src: "http://zblogged.com/wp-content/uploads/2015/11/5.png", alt: "" })),
                        React.createElement("a", { href: "#" },
                            React.createElement("img", { src: "http://cdn.devilsworkshop.org/files/2013/01/enlarged-facebook-profile-picture.jpg", alt: "" })))))));
    }
}
export default UIInitialHeader;
