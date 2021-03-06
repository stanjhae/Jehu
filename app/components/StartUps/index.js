/**
 *
 * Process
 *
 */

import React from 'react';
import { Fade } from 'react-reveal';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
import Header from 'components/Header';
import './index.css';
import { Helmet } from 'react-helmet';
/* eslint-disable react/prefer-stateless-function */
class Partners extends React.PureComponent {
  render() {
    return (
      <div className="App">
        <Helmet>
          <title>Start Ups</title>
          <meta name="description" content="Start Ups" />
        </Helmet>
        <div className="ui center aligned grid startupHeader startup1">
          <div className="row centeredd">
            <Fade top duration={2000} className="column">
              <h1>START UPS</h1>
            </Fade>
          </div>
        </div>

        <div className="ui doubling stackable middle aligned two column centered grid plainBackground startUpPlain container">
          <div className="row zeroPadding">
            <div className="center aligned column">
              <Fade left duration={2000}>
                <p>
                  Offer personalized services to transform ideas into concrete
                  successful projects.
                </p>
              </Fade>
            </div>
            <Fade right duration={2000}>
              <div className="center aligned column startup2" />
            </Fade>
          </div>
          <div className="row computer reversed zeroPadding">
            <div className="center aligned column">
              <Fade right duration={2000}>
                <p>
                  To launch your business you need first a market study in order
                  to start it on the right way.
                </p>
              </Fade>
            </div>
            <Fade left duration={2000}>
              <div className="center aligned column startup3" />
            </Fade>
          </div>
          <div className="row zeroPadding">
            <div className="center aligned column">
              <Fade left duration={2000}>
                <p>
                  Business Model and Business plan in order to evaluate the
                  financial viability and stability and analyze the feasibility
                  and profitability of your project.
                </p>
              </Fade>
            </div>
            <Fade right duration={2000}>
              <div className="center aligned column startup startup4" />
            </Fade>
          </div>
        </div>
      </div>
    );
  }
}

Partners.propTypes = {};

export default Partners;
