import * as React from 'react';
import { connect } from 'react-redux'
import searchYouTube from 'youtube-api-search';
import { setCurrentTrack } from '../../redux/actions/track-actions';
import UIMusicPlayer from '../UIMusicPlayer';

const API_KEY = 'AIzaSyB7Y0UfGlDYQPZfOod95aL2MwUT2aFYzc0';

class UITrackList extends React.Component<any, any> {

  convertToString(ms, delim = " : ") {
    const showWith0 = value => (value < 10 ? `0${value}` : value);
    const hours = showWith0(Math.floor((ms / (1000 * 60 * 60)) % 60));
    const minutes = showWith0(Math.floor((ms / (1000 * 60)) % 60));
    const seconds = showWith0(Math.floor((ms / 1000) % 60));
    return `${parseInt(hours) ? `${hours}${delim}` : ""}${minutes}${delim}${seconds}`;
  }


  searchYoutube = (query) => {
    searchYouTube({key: API_KEY, term: query.replace('|', ''), maxResults: 6}, (videos) => {
            console.log(videos);
            if(videos && videos.length > 0) {
              let data = query.split('|');
              this.props.setTrack({...videos[0], });
            }
        });
  }

  render() {
    const { tracks } = this.props;
    return (
      <React.Fragment>
        <div className="related-artists">
          {
            tracks && tracks[0] ? tracks.map((track, i) => (
              <React.Fragment key={i}>
              
                <div className="track">
                  <div className="track__number">{ i + 1 }</div>
                  <div className="track__added">
                    <i className="ion-checkmark-round added"></i>
                  </div>
                  <div className="track__title"><a href="#" onClick={ () => this.searchYoutube(`${this.props.artist.name}|${track.name}`) }>{ track.name }</a></div>
                  <div className="track__explicit">
                    {
                      track.isExplicit?
                      <span className="label">Explicit</span>
                        :
                        null
                    }
                  </div>
                  <div className="track__length">{ this.convertToString(track.durationMs) }</div>
                  <div className="track__popularity">
                    <i className="ion-arrow-graph-up-right"></i>
                  </div>
                </div>
              </React.Fragment>
            ))
              : null
          }
        </div>
        <UIMusicPlayer/>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    artist: state.artist,
    tracks: state.tracks.tracks
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    setTrack: (track: any) => dispatch(setCurrentTrack(track))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UITrackList);
