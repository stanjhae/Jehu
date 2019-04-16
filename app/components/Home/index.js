/**
 *
 * Home
 *
 */

import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './index.css';
import Header from 'components/Header';
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
class Home extends React.PureComponent {
  render() {
    return (
      <div className="App">
        <div className="ui center aligned grid homePic pic1">
          <div className="row">
            <div className="left floated column">
              <Header />
            </div>
          </div>
          <div className="row">
            <div className="column homeText">
              <h1>JEHU</h1>
              <p>FIRST JUNIOR ENTERPRISE IN HUNGARY</p>
            </div>
          </div>
        </div>
        <div className="ui middle aligned center aligned grid secLetter">
          <div className="row">
            <div className="column">
              <h1>JEHU</h1>
              <p>FIRST JUNIOR ENTERPRISE IN HUNGARY</p>
            </div>
          </div>
        </div>
        <div className="ui middle aligned center aligned grid homePic pic2">
          <div className="row">
            <div className="column homeText">
              <h1>JEHU</h1>
              <p>FIRST JUNIOR ENTERPRISE IN HUNGARY</p>
            </div>
          </div>
        </div>
        <div className="ui middle aligned center aligned grid secLetter">
          <div className="row">
            <div className="column">
              <h1>JEHU</h1>
              <p>FIRST JUNIOR ENTERPRISE IN HUNGARY</p>
            </div>
          </div>
        </div>
        <div className="ui middle aligned center aligned grid homePic pic3">
          <div className="row">
            <div className="column homeText">
              <h1>JEHU</h1>
              <p>FIRST JUNIOR ENTERPRISE IN HUNGARY</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Home.propTypes = {};

export default Home;
