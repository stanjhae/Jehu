/**
 *
 * Home
 *
 */

import React from 'react';
import { Fade, Bounce } from 'react-reveal';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './index.css';
import { Helmet } from 'react-helmet';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
export class Home extends React.PureComponent {
  render() {
    return (
      <div className="App home">
        <Helmet>
          <title>Home</title>
          <meta name="description" content="Home" />
        </Helmet>
        <div className="ui center aligned middle aligned grid homeHeader homePic pic1">
          <div className="row">
            <div className="column headerColumn">
              <Fade top duration={2000}>
                <h1>JEHU</h1>
              </Fade>
              <Fade bottom duration={2000}>
                <h2>FIRST JUNIOR ENTERPRISE IN HUNGARY</h2>
              </Fade>
            </div>
          </div>
        </div>
        <div className="ui middle aligned center aligned grid plainBackground text container">
          <div className="row">
            <div className="column">
              <Fade top duration={2000}>
                <h2>WHO ARE WE?</h2>
              </Fade>
              <Fade bottom duration={2000}>
                <p>
                  We are embarking on a bold & ambitious journey to help
                  organization boost their work , incubate students to launch
                  their startup and to build a community to conquer the world of
                  business !
                </p>
              </Fade>
            </div>
          </div>
        </div>
        <div className="ui five columns doubling stackable middle aligned center aligned grid offer pic2">
          <div className="row">
            <Bounce top duration={2000}>
              <p>WHAT WE OFFER</p>
            </Bounce>
          </div>
          <div className="row">
            <Bounce bottom cascade duration={2000}>
              <div className="column">
                <i className="briefcase big icon"> </i>
                <p>Services</p>
              </div>
              <div className="column">
                <i className="calendar alternate big icon"> </i>
                <p>Networking and events</p>
              </div>
              <div className="column">
                <i className="wrench big icon"> </i>
                <p>Workshops</p>
              </div>
              <div className="column">
                <i className="eye big icon"> </i>
                <p>Visibility</p>
              </div>
            </Bounce>
          </div>
        </div>

        <div className="ui middle aligned center aligned grid plainBackground text container">
          <div className="row">
            <Fade className="column" left duration={2000}>
              <div>
                <p>
                  " Europe’s future is in the hands of its young people. It is
                  your energy and creativity that will produce the new ideas and
                  start-ups of tomorrow. Europe’s Junior Enterprises are leading
                  the way. "
                </p>
              </div>
              <img
                className="ui avatar medium circular image"
                alt="jean"
                src="https://scontent-vie1-1.xx.fbcdn.net/v/t1.15752-0/p280x280/58382971_872732723078255_8307964336840638464_n.jpg?_nc_cat=102&_nc_ht=scontent-vie1-1.xx&oh=2e0733323873117a61e11567c78e6349&oe=5D38EB85"
              />
              <p>Jean-Claude Juncker - President of the European Commission</p>
            </Fade>
          </div>
        </div>
        <div className="ui five columns doubling stackable middle aligned center aligned grid offer pic3">
          <div className="ui center aligned row text container">
            <Bounce top duration={2000}>
              <p>
                900 Junior Enterprise around the world entirely executed by
                students since 1967
              </p>
            </Bounce>
          </div>
        </div>
        <div className="ui grid map">
          <div className="row">
            <Map
              google={this.props.google}
              zoom={16}
              initialCenter={{
                lat: 47.5540033,
                lng: 21.6216299,
              }}
            >
              <Marker onClick={this.onMarkerClick} name="Current location" />
            </Map>
          </div>
        </div>
      </div>
    );
  }
}

Home.propTypes = {};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyC-_PsfsmmG-nCOArLM74EeGWAIJbSBX40',
})(Home);
