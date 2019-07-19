import * as React from 'react';
import { connect } from 'react-redux'
import { Text } from '@sitecore-jss/sitecore-jss-react';
import { getArtistData, getsearchSingleArtist } from '../../redux/actions/artist-actions';

class UIHeader extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
  }

  componentDidMount() {
    // this.props.getArtist("3RGLhK1IP9jnYFH4BRFJBS"); the clash
    //this.props.getArtist("03r4iKL2g2442PT9n2UKsx"); // beastie boys
    this.props.getArtist("0cc6vw3VN8YlIcvr1v7tBL"); // Mötley Crüe
  }

  searchArtist = (event) => {
    if (event.key === 'Enter') {
      this.props.getsearchSingleArtist(event.target.value);
      event.target.value = '';
    }
  }

  render() {
    return (
      <section className="header">


        <div className="page-flows">

          <span className="flow">
            <i className="ion-chevron-left"></i>
          </span>

          <span className="flow">
            <i className="ion-chevron-right disabled"></i>
          </span>

        </div>

        <div className="search">

          <input type="text" placeholder="Search" onKeyUp={this.searchArtist} />

        </div>

        <div className="user">

          <div className="user__notifications">

            <i className="ion-android-notifications"></i>

          </div>

          <div className="user__inbox">

            <i className="ion-archive"></i>

          </div>

          <div className="user__info">

            <span className="user__info__img">

              <img src="data:image/jpeg;base64,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" alt="Profile Picture" className="img-responsive" />

            </span>

            <span className="user__info__name">

              <span className="first">Gary</span>

              <span className="last">Wenneker</span>

            </span>

          </div>

          <div className="user__actions">

            <div className="dropdown">
              <button className="dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                <i className="ion-chevron-down"></i>
              </button>
              <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenu1">
                <li><a href="#">Private Session</a></li>
                <li><a href="#">Account</a></li>
                <li><a href="#">Settings</a></li>
                <li><a href="#">Log Out</a></li>
              </ul>
            </div>

          </div>

        </div>

      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    artist: {}
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getArtist: (id: string) => dispatch(getArtistData(id)),
    getsearchSingleArtist: (query: string) => dispatch(getsearchSingleArtist(query))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UIHeader);
