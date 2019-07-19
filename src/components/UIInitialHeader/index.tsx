import * as React from 'react';

class UIInitialHeader extends React.Component<any, any> {
  render() {
    return (
      <React.Fragment>
        <div className="artist__header">
          <div className="artist__info">
            <div className="profile__img">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/g_eazy_propic.jpg" alt="G-Eazy" />
            </div>
            <div className="artist__info__meta">
              <div className="artist__info__type">Artist</div>
              <div className="artist__info__name">G-Eazy</div>
              <div className="artist__info__actions">
                <button className="button-dark">
                  <i className="ion-ios-play"></i>
                  Play
            </button>
                <button className="button-light">Follow</button>
                <button className="button-light more">
                  <i className="ion-ios-more"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="artist__listeners">
            <div className="artist__listeners__count">15,662,810</div>
            <div className="artist__listeners__label">Monthly Listeners</div>
          </div>
          <div className="artist__navigation">
            <ul className="nav nav-tabs" role="tablist">
              <li role="presentation" className="active">
                <a href="#artist-overview" aria-controls="artist-overview" role="tab" data-toggle="tab">Overview</a>
              </li>
              <li role="presentation">
                <a href="#related-artists" aria-controls="related-artists" role="tab" data-toggle="tab">Related Artists</a>
              </li>
            </ul>
            <div className="artist__navigation__friends">
              <a href="#">
                <img src="http://zblogged.com/wp-content/uploads/2015/11/17.jpg" alt="" />
              </a>
              <a href="#">
                <img src="http://zblogged.com/wp-content/uploads/2015/11/5.png" alt="" />
              </a>
              <a href="#">
                <img src="http://cdn.devilsworkshop.org/files/2013/01/enlarged-facebook-profile-picture.jpg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default UIInitialHeader
