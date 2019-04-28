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
          <div className="row">
            <div className="left floated column">
              <Header />
            </div>
          </div>
          <div className="row">
            <div className="column">
              <h1>START UPS</h1>
            </div>
          </div>
        </div>

        <div className="ui doubling stackable middle aligned two column centered grid plainBackground startUpPlain container">
          <div className="row zeroPadding">
            <div className="center aligned column">
              <p>
                Offer personalized services to transform ideas into concrete
                successful projects.
              </p>
            </div>
            <div className="center aligned column startup2" />
          </div>
          <div className="row computer reversed zeroPadding">
            <div className="center aligned column">
              <p>
                To launch your business you need first a market study in order
                to start it on the right way.
              </p>
            </div>
            <div className="center aligned column startup3" />
          </div>
          <div className="row zeroPadding">
            <div className="center aligned column">
              <p>
                Business Model and Business plan in order to evaluate the
                financial viability and stability and analyze the feasibility
                and profitability of your project.
              </p>
            </div>
            <div className="center aligned column startup startup4" />
          </div>
        </div>
      </div>
    );
  }
}

Partners.propTypes = {};

export default Partners;
