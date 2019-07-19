import * as React from 'react';
import { connect } from 'react-redux'
import { Text } from '@sitecore-jss/sitecore-jss-react';
import { getsearchSingleArtist } from '../../redux/actions/artist-actions';

class UIPlaylists extends React.Component<any, any> {

  searchArtist = (query: string) => {
    this.props.getsearchSingleArtist(query);
  }

  render() {
    return (
      <React.Fragment>
        <div className="collapse in" id="playlists">

          <a href="#" className="navigation__list__item" onClick={ () => this.searchArtist('Beastie Boys') } >
            <i className="ion-ios-musical-notes"></i>
            <span>Beastie Boys</span>
          </a>

          <a href="#" className="navigation__list__item" onClick={ () => this.searchArtist('Giorgio Moroder') }>
            <i className="ion-ios-musical-notes"></i>
            <span>Giorgio Moroder</span>
          </a>

          <a href="#" className="navigation__list__item" onClick={ () => this.searchArtist('The Clash') }>
            <i className="ion-ios-musical-notes"></i>
            <span>The Clash</span>
          </a>

          <a href="#" className="navigation__list__item" onClick={ () => this.searchArtist('Frankie Goes To Hollywood') }>
            <i className="ion-ios-musical-notes"></i>
            <span>Frankie Goes To Hollywood</span>
          </a>

          <a href="#" className="navigation__list__item" onClick={ () => this.searchArtist('Joy Division') }>
            <i className="ion-ios-musical-notes"></i>
            <span>Joy Division</span>
          </a>

          <a href="#" className="navigation__list__item" onClick={ () => this.searchArtist('Kaiser Chiefs') }>
            <i className="ion-ios-musical-notes"></i>
            <span>Kaiser Chiefs</span>
          </a>

          <a href="#" className="navigation__list__item" onClick={ () => this.searchArtist('Herman Brood') }>
            <i className="ion-ios-musical-notes"></i>
            <span>Herman Brood</span>
          </a>

          <a href="#" className="navigation__list__item" onClick={ () => this.searchArtist('Heaven 17') }>
            <i className="ion-ios-musical-notes"></i>
            <span>Heaven 17</span>
          </a>

          <a href="#" className="navigation__list__item" onClick={ () => this.searchArtist('The English Beat') }>
            <i className="ion-ios-musical-notes"></i>
            <span>The English Beat</span>
          </a>

          <a href="#" className="navigation__list__item" onClick={ () => this.searchArtist('The Specials') }>
            <i className="ion-ios-musical-notes"></i>
            <span>The Specials</span>
          </a>

          <a href="#" className="navigation__list__item" onClick={ () => this.searchArtist('Sex Pistols') }>
            <i className="ion-ios-musical-notes"></i>
            <span>Sex Pistols</span>
          </a>

          <a href="#" className="navigation__list__item" onClick={ () => this.searchArtist('Yazoo') }>
            <i className="ion-ios-musical-notes"></i>
            <span>Yazoo</span>
          </a>

        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getsearchSingleArtist: (query: string) => dispatch(getsearchSingleArtist(query))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(UIPlaylists);