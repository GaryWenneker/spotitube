import * as React from 'react';
import { connect } from 'react-redux'


import UITrackList from '../UITrackList';
import UIPlaylists from '../UIPlaylists';
import { withPlaceholder, withSitecoreContext } from '@sitecore-jss/sitecore-jss-react';


class UIContent extends React.Component<any, any> {
  render() {
    return (
        <React.Fragment>
<section className="content">

<div className="content__left">

  <section className="navigation">


      <div  className="navigation__list">

        <div className="navigation__list__header" 
             role="button" 
             data-toggle="collapse" 
            //  href="#main" 
             aria-expanded="true" 
             aria-controls="main">
          Main
        </div>
        
        <div className="collapse in" id="main">
        
          <a href="#" className="navigation__list__item">
            <i className="ion-ios-browsers"></i>
            <span>Browse</span>
          </a>

          <a href="#" className="navigation__list__item">
            <i className="ion-person-stalker"></i>
            <span>Activity</span>
          </a>

          <a href="#" className="navigation__list__item">
            <i className="ion-radio-waves"></i>
            <span>Radio</span>
          </a>
          
        </div>

      </div>

      <div className="navigation__list">

        <div className="navigation__list__header" 
             role="button" 
             data-toggle="collapse" 
            //  href="#yourMusic" 
             aria-expanded="true" 
             aria-controls="yourMusic">
          Your Music
        </div>
        
        <div className="collapse in" id="yourMusic">
        
          <a href="#" className="navigation__list__item">
            <i className="ion-headphone"></i>
            <span>Songs</span>
          </a>

          <a href="#" className="navigation__list__item">
            <i className="ion-ios-musical-notes"></i>
            <span>Albums</span>
          </a>

          <a href="#" className="navigation__list__item">
            <i className="ion-person"></i>
            <span>Artists</span>
          </a>

          <a href="#" className="navigation__list__item">
            <i className="ion-document"></i>
            <span>Local Files</span>
          </a>
          
        </div>

      </div>

      <div className="navigation__list">

        <div className="navigation__list__header" 
             role="button" 
             data-toggle="collapse" 
            //  href="#playlists" 
             aria-expanded="true" 
             aria-controls="playlists">
          Playlists
        </div>
        
        {/* <UIPlaylists /> */}
        {
          this.props.playlist
        }

      </div>

    </section>
    
  <section className="playlist">

    <a href="#">

      <i className="ion-ios-plus-outline"></i>

      New Playlist

    </a>

  </section>

  <section className="playing">


  {
    this.props.currentTrack ? 
    <React.Fragment>
    <div className="playing__art">

      <img src={(this.props.album.images && this.props.album.images[0])? this.props.album.images[0].url : null} alt={this.props.album.name} />

      </div>

      <div className="playing__song">

      <a className="playing__song__name">
        {
          this.props.currentTrack && 
          this.props.currentTrack.snippet &&
          this.props.currentTrack.snippet.title? this.props.currentTrack.snippet.title.split('-')[1] : null
        }
      </a>

      <a className="playing__song__artist">{this.props.artist.name}</a>

      </div>

      <div className="playing__add">

      <i className="ion-checkmark"></i>

    </div>
    </React.Fragment>
    : null
  }
  
  </section>
  
</div>

<div className="content__middle">

  <div className="artist is-verified">
  

   { this.props.hero }
    
    <div className="artist__content">
    
      <div className="tab-content">
    
        <div role="tabpanel" className="tab-pane active" id="artist-overview">
          
          <div className="overview">
          
            <div className="overview__artist">
          
              {/* <div className="section-title">Latest Release</div>

              <div className="latest-release">

                <div className="latest-release__art">

                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/whenDarkOut.jpg" alt="When It's Dark Out" />

                </div>

                <div className="latest-release__song">

                  <div className="latest-release__song__title">Drifting (Track Commentary)</div>

                  <div className="latest-release__song__date">

                    <span className="day">4</span>

                    <span className="month">December</span>

                    <span className="year">2015</span>

                  </div>

                </div>

              </div> */}

              {
                this.props.albums
              }

              <button className="show-more button-light">Show 5 More</button>
            
            </div>
          
            <div className="overview__related">

              <div className="section-title">Related Artists</div>
              
              {/* <UIArtistRelated/> */}
              {
                this.props.relatedArtists
              }

            </div>

            <div className="overview__albums">
            
              
              
              {
                this.props.album && this.props.album.images ?

                <React.Fragment>

              <div className="overview__albums__head">
              
              <span className="section-title">Albumm</span>
              
              <span className="view-type">
              
                <i className="fa fa-list list active"></i>
                
                <i className="fa fa-th-large card"></i>
                
              </span>
            
            </div>
              <div className="album">
            
              <div className="album__info">
              
                <div className="album__info__art">
                
                <img src={(this.props.album.images && this.props.album.images[1])? this.props.album.images[1].url : null} alt={this.props.artist.name} />
                  
                </div>
                
                <div className="album__info__meta">
                
                  <div className="album__year">2015</div>
                  
                  <div className="album__name">{this.props.album.name}</div>
                  
                  <div className="album__actions">
                  
                    <button className="button-light save">Save</button>
                    
                    <button className="button-light more">
                      <i className="ion-ios-more"></i>
                    </button>
                    
                  </div>
                  
                </div>
                
              </div>
              
              <div className="album__tracks">
              
                <div className="tracks">
                  
                  <div className="tracks__heading">
                  
                    <div className="tracks__heading__number">#</div>
                    
                    <div className="tracks__heading__title">Song</div>
                    
                    <div className="tracks__heading__length">
                    
                      <i className="ion-ios-stopwatch-outline"></i>
                      
                    </div>
                    
                    <div className="tracks__heading__popularity">
                    
                      <i className="ion-thumbsup"></i>
                      
                    </div>
                    
                  </div>

                {
                  this.props.tracklist
                }
               
                </div>
                
              </div>
              
            </div>

                </React.Fragment>
                : null
              }
              
            </div>
            
          </div>
        
        </div>

        <div role="tabpanel" className="tab-pane" id="related-artists">
        
          <div className="media-cards">
          
            <div className="media-card">
            
              <div className="media-card__image" style={{backgroundImage: "url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/hoodie.jpg)"}}>
              
                <i className="ion-ios-play"></i>
                
              </div>
              
              <a className="media-card__footer">Hoodie Allen</a>
              
            </div>
            
            <div className="media-card">
            
              <div className="media-card__image" style={{backgroundImage: "url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/mikestud_large.jpg)"}}>
              
                <i className="ion-ios-play"></i>
                
              </div>
              
              <a className="media-card__footer">Mike Stud</a>
              
            </div>
            
            <div className="media-card">
            
              <div className="media-card__image" style={{backgroundImage: "url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/drake_large.jpg)"}}>
              
                <i className="ion-ios-play"></i>
                
              </div>
              
              <a className="media-card__footer">Drake</a>
              
            </div>
            
            <div className="media-card">
            
              <div className="media-card__image" style={{backgroundImage: "url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/jcole_large.jpg)"}}>
              
                <i className="ion-ios-play"></i>
                
              </div>
              
              <a className="media-card__footer">J. Cole</a>
              
            </div>
            
            <div className="media-card">
            
              <div className="media-card__image" style={{backgroundImage: "url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/bigSean_large.jpg)"}}>
              
                <i className="ion-ios-play"></i>
                
              </div>
              
              <a className="media-card__footer">Big Sean</a>
              
            </div>
            
            <div className="media-card">
            
              <div className="media-card__image" style={{backgroundImage: "url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/wiz.jpeg)"}}>
              
                <i className="ion-ios-play"></i>
                
              </div>
              
              <a className="media-card__footer">Wiz Khalifa</a>
              
            </div>
            
            <div className="media-card">
            
              <div className="media-card__image" style={{backgroundImage: "url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/yonas.jpg)"}}>
              
                <i className="ion-ios-play"></i>
                
              </div>
              
              <a className="media-card__footer">Yonas</a>
              
            </div>
            
            <div className="media-card">
            
              <div className="media-card__image" style={{backgroundImage: "url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/childish.jpg)"}}>
              
                <i className="ion-ios-play"></i>
                
              </div>
              
              <a className="media-card__footer">Childish Gambino</a>
              
            </div>
            
          </div>
        
        </div>

          <div role="tabpanel" className="tab-pane" id="artist-about">About</div>


      </div>
      
    </div>
    
  </div>
  
</div>

<div className="content__right">

  <div className="social">
  
    <div className="friends">
    
      <a href="#" className="friend">
      
        <i className="ion-android-person"></i>
        
        Sam Smith
        
      </a>
      
      <a href="#" className="friend">
      
        <i className="ion-android-person"></i>
        
        Tarah Forsyth
        
      </a>
      
      <a href="#" className="friend">
      
        <i className="ion-android-person"></i>
        
        Ricahrd Tomkins
        
      </a>
      
      <a href="#" className="friend">
      
        <i className="ion-android-person"></i>
        
        Tony Russo
        
      </a>
      
      <a href="#" className="friend">
      
        <i className="ion-android-person"></i>
        
        Alyssa Marist
        
      </a>
      
      <a href="#" className="friend">
      
        <i className="ion-android-person"></i>
        
        Ron Samson
        
      </a>
      
    </div>
    
    <button className="button-light">Find Friends</button>
    
  </div>
  
</div>

</section>
        </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    artist: state.artist,
    tracks: state.tracks,
    album: state.album,
    currentTrack: state.tracks.currentTrack,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {

  }
}

const withPlaceholderInjected = withPlaceholder([
  {
    placeholder: 'jss-hero',
    prop: 'hero',
  },
  {
    placeholder: 'jss-albums',
    prop: 'albums',
  },
  {
    placeholder: 'jss-related-artists',
    prop: 'relatedArtists',
  },
  {
    placeholder: 'jss-tracklist',
    prop: 'tracklist',
  },
  {
    placeholder: 'jss-playlist',
    prop: 'playlist',
  }
])(UIContent);

const withPlaceholderAndSitecoreContext = withSitecoreContext()(
  withPlaceholderInjected
);

export default connect(mapStateToProps, mapDispatchToProps)(withPlaceholderAndSitecoreContext);
