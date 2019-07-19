
import React from 'react';
import { connect } from 'react-redux'
import CopyToClipboard from 'react-copy-to-clipboard'

class UIArtistHeader extends React.Component<any, any> {
  render() {
    const { images } = this.props.artist;
    return (
      <React.Fragment>

      {
        (images && images[0] && images[0].url) ? 
        <style dangerouslySetInnerHTML={{
          __html: [
            '.artist__backdrop:before {',
            '  background-image: url(' + images[0].url + ');',
            '  background-position-y: 30%;',
            '}'
            ].join('\n')
          }}>
        </style>
        : null
      }

        <div className="artist__header artist__backdrop">

          <div className="artist__info">

            <div className="profile__img">

              <img src={(images && images[1])? images[1].url : null} alt={this.props.artist.name} />

            </div>

            <div className="artist__info__meta">

              <div className="artist__info__type">Artist</div>

              <div className="artist__info__name">{this.props.artist.name}</div>

              <div className="artist__info__actions">

                <button className="button-dark">
                  <i className="ion-ios-play"></i>
                  Play
                </button>

                <button className="button-light">Follow</button>
                <CopyToClipboard text={this.props.artist.id}>
                <button className="button-light more">
                  <i className="ion-ios-more"></i>
                </button>
                </CopyToClipboard>
              </div>

            </div>


          </div>

          <div className="artist__listeners">

            <div className="artist__listeners__count">{ (this.props.artist && this.props.artist.followers)? this.props.artist.followers.total : null }</div>

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

              <li role="presentation">
                <a href="#artist-about" aria-controls="artist-about" role="tab" data-toggle="tab">About</a>
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

const mapStateToProps = (state) => {
  return {
      artist: state.artist
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
     
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UIArtistHeader);
