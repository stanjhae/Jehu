/**
 *
 * Process
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
import Header from 'components/Header';
import './index.css';
/* eslint-disable react/prefer-stateless-function */
class Partners extends React.PureComponent {
  render() {
    return (
      <div className="App">
        <div className="ui center aligned grid headerImg">
          <div className="row">
            <div className="left floated column">
              <Header />
            </div>
          </div>
          <div className="row">
            <div className="column processText">
              <h1>START UPS</h1>
            </div>
          </div>
        </div>

        <div className="ui middle aligned two column centered grid">
          <div className="row zeroPadding">
            <div className="center aligned column startups">
              <p>
                Offer personalized services to transform ideas into concrete successful projects.
              </p>
            </div>
            <div className="center aligned column startups startup1">
            </div>
          </div>
          <div className="row zeroPadding">
            <div className="center aligned column startups startup2">
            </div>
            <div className="center aligned column startups">
              <p>To launch your business you need first a market study in order to start it on the right way.</p>
            </div>
          </div>
          <div className="row zeroPadding">
            <div className="center aligned column startups">
              <p>
                Business Model and Business plan in order to evaluate the financial viability and stability and analyze the feasibility and profitability of your project.
              </p>
            </div>
            <div className="center aligned column startups startup3">
            </div>
          </div>
        </div>
        <div className="ui middle aligned center aligned grid headerImg">
          <div className="row">
            <div className="column statistics">
              <h1>JEHU</h1>
              <p>FIRST JUNIOR ENTERPRISE IN HUNGARY</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Partners.propTypes = {};

export default Partners;
