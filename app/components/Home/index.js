/**
 *
 * Home
 *
 */

import React from 'react';
import { Fade, Bounce } from 'react-reveal';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './index.css';
import Header from 'components/Header';
import { Helmet } from 'react-helmet';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class Home extends React.PureComponent {
  render() {
    return (
      <div className="App home">
        <Helmet>
          <title>Home</title>
          <meta name="description" content="Home" />
        </Helmet>
        <div className="ui center aligned grid homeHeader homePic pic1">
          <div className="row headerRow">
            <div className="left floated column">
              <Header />
            </div>
          </div>
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
                <h2>WHAT IS A JUNIOR ENTERPRISE?</h2>
              </Fade>
              <Fade bottom duration={2000}>
                <p>
                  A Junior Enterprise is a non-profit organization, formed and
                  managed exclusively by university students, which provides
                  services for companies, institutions, and individuals.
                </p>
              </Fade>
            </div>
          </div>
        </div>
        <div className="ui five columns doubling stackable middle aligned center aligned grid offer pic2">
          <div className="row">
            <Bounce top duration={2000}>
              <h2>WHAT WE OFFER</h2>
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
            <Fade className="column" left cascade duration={2000}>
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
        {/* <div className="ui five columns doubling stackable middle aligned center aligned grid stats pic3"> */}
        {/* <div className="row"> */}
        {/* <div className="column"> */}
        {/* <CountUp */}
        {/* start={0} */}
        {/* end={900} */}
        {/* delay={0} */}
        {/* duration={3} */}
        {/* redraw */}
        {/* useEasing={false} */}
        {/* > */}
        {/* {({ countUpRef }) => ( */}
        {/* <div> */}
        {/* <span ref={countUpRef} /> */}
        {/* </div> */}
        {/* )} */}
        {/* </CountUp> */}
        {/* <p>JUNIOR ENTERPRISE</p> */}
        {/* </div> */}
        {/* <div className="column"> */}
        {/* <CountUp */}
        {/* start={0} */}
        {/* end={35000} */}
        {/* delay={0} */}
        {/* duration={3} */}
        {/* redraw */}
        {/* useEasing={false} */}
        {/* > */}
        {/* {({ countUpRef }) => ( */}
        {/* <div> */}
        {/* <span ref={countUpRef} /> */}
        {/* </div> */}
        {/* )} */}
        {/* </CountUp> */}
        {/* <p>UNIVERSITY STUDENTS</p> */}
        {/* </div> */}
        {/* <div className="column"> */}
        {/* <CountUp */}
        {/* start={0} */}
        {/* end={30} */}
        {/* delay={0} */}
        {/* duration={3} */}
        {/* redraw */}
        {/* useEasing={false} */}
        {/* > */}
        {/* {({ countUpRef }) => ( */}
        {/* <div> */}
        {/* <span ref={countUpRef} /> */}
        {/* </div> */}
        {/* )} */}
        {/* </CountUp> */}
        {/* <p>COUNTRIES</p> */}
        {/* </div> */}
        {/* <div className="column"> */}
        {/* <CountUp */}
        {/* start={0} */}
        {/* end={8500} */}
        {/* delay={0} */}
        {/* duration={3} */}
        {/* redraw */}
        {/* useEasing={false} */}
        {/* > */}
        {/* {({ countUpRef }) => ( */}
        {/* <div> */}
        {/* <span ref={countUpRef} /> */}
        {/* </div> */}
        {/* )} */}
        {/* </CountUp> */}
        {/* <p>PROJECTS FOR CLIENTS/YEAR</p> */}
        {/* </div> */}
        {/* <div className="column"> */}
        {/* <CountUp */}
        {/* start={0} */}
        {/* end={16} */}
        {/* delay={0} */}
        {/* duration={3} */}
        {/* redraw */}
        {/* useEasing={false} */}
        {/* > */}
        {/* {({ countUpRef }) => ( */}
        {/* <div> */}
        {/* <span ref={countUpRef} /> */}
        {/* </div> */}
        {/* )} */}
        {/* </CountUp> */}
        {/* <p>MILLION TURNOVER/YEAR (EUROS)</p> */}
        {/* </div> */}
        {/* </div> */}
        {/* </div> */}
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
