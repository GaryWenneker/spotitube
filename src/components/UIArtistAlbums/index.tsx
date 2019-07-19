import * as React from 'react';
import { connect } from 'react-redux'
import { Text } from '@sitecore-jss/sitecore-jss-react';
import { getTracksData } from '../../redux/actions/track-actions';

class UIArtistAlbums extends React.Component<any, any> {

  getTracks(album: any) {
    this.props.getTracks(album);
  }

  render() {
    const { albums } = this.props.artist;
    return (
      <React.Fragment>
        <div className="section-title">Popular</div>

        <div className="tracks">

          {
            albums ? albums.map((album, i) => (

              <React.Fragment key={i}>
                <a href="#" className="related-artist" onClick={() => this.getTracks(album)}>
                  <div className="track">
                    <div className="track__art">
                      <img src={(album.images && album.images[0]) ? album.images[0].url : null} alt={album.name} />
                    </div>
                    <div className="track__number">{i + 1}</div>
                    <div className="track__added">
                      <i className="ion-checkmark-round added"></i>
                    </div>
                    <div className="track__title">{album.name}</div>
                    <div className="track__explicit">
                      <span className="label">Explicit</span>
                    </div>
                    <div className="track__plays">147,544,165</div>
                  </div>
                </a>
              </React.Fragment>
            ))
              : null
          }

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
    getTracks: (album: any) => dispatch(getTracksData(album)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UIArtistAlbums);