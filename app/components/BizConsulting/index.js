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
import { Helmet } from 'react-helmet';
/* eslint-disable react/prefer-stateless-function */
class Partners extends React.PureComponent {
  render() {
    return (
      <div className="App">
        <Helmet>
          <title>Business Consulting</title>
          <meta name="description" content="Business Consulting" />
        </Helmet>
        <div className="ui center aligned grid process process1">
          <div className="row">
            <div className="left floated column">
              <Header />
            </div>
          </div>
          <div className="row">
            <div className="column processText">
              <h1>BUSINESS CONSULTING</h1>
            </div>
          </div>
        </div>

        <div className="ui middle aligned two column centered grid">
          <div className="row zeroPadding">
            <div className="center aligned column bizConsulting">
              <h1>Finance</h1>
              <p>Preparing a business plan</p>
              <p>Analysis of cost structures</p>
              <p>Offering innovative solutions to improve nationalisation of process
              </p>
            </div>
            <div className="center aligned column startups startup1" />
          </div>
          <div className="row zeroPadding">
            <div className="center aligned column startups startup2" />
            <div className="center aligned column bizConsulting">
              <h1>Marketing</h1>
              <p>Promote them with communication plans</p>
              <p>Social Media Promotion</p>
              <p>Digitalization</p>
              <p>Analysis of customers satisfaction.</p>
            </div>
          </div>
          <div className="row zeroPadding">
            <div className="center aligned column bizConsulting">
              <h1>Strategy</h1>
              <p>Launching a new product or service on the market can be costly and requires an in-depth study to perfectly identify your target and the right price.</p>
              <p>Conduct projects about launching of new products</p>
              <p>Study of the field</p>
              <p>Definition of strategical positioning.</p>
            </div>
            <div className="center aligned column startups startup3" />
          </div>
        </div>
        <div className="ui middle aligned center aligned grid process process3">
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
