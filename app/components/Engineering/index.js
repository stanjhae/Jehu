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
          <title>Engineering</title>
          <meta name="description" content="Engineering" />
        </Helmet>
        <div className="ui center aligned grid engineering engineeringHeader engineering1">
          <div className="row">
            <div className="left floated column">
              <Header />
            </div>
          </div>
          <div className="row">
            <div className="column engineeringText">
              <h1>Engineering</h1>
            </div>
          </div>
        </div>

        <div className="ui middle aligned two column centered grid">
          <div className="row zeroPadding">
            <div className="center aligned column engineering engineering2">
              <p>Testing Methods</p>
            </div>
            <div className="center aligned column engineering engineering3">
              <p>PCB: Designing and programming</p>
            </div>
          </div>
          <div className="row zeroPadding">
            <div className="center aligned column engineering engineering4">
              <p>Medical robots assistance</p>
            </div>
            <div className="center aligned column engineering engineering5">
              <p>Sensor programming</p>
            </div>
          </div>
          <div className="row zeroPadding">
            <div className="center aligned column engineering engineering2">
              <p>Sensor programming</p>
            </div>
            <div className="center aligned column engineering engineering3">
              <p>
                Feasibility study, cost implication and performance benefits of
                new equipments
              </p>
            </div>
          </div>
          <div className="row zeroPadding">
            <div className="center aligned column engineering engineering4">
              <p>
                Conception (What features a model should have based on analysis
                of customers needs and preferences)
              </p>
            </div>
            <div className="center aligned column engineering engineering5">
              <p>Modelling, simulation and analysis of engineering systems</p>
            </div>
          </div>
          <div className="row zeroPadding">
            <div className="center aligned column engineering engineering2">
              <p>Strength of materials</p>
            </div>
            <div className="center aligned column engineering engineering3">
              <p>Matlab programming</p>
            </div>
          </div>
          <div className="row zeroPadding">
            <div className="center aligned column engineering engineering4">
              <p>LAbVIEW Proramming</p>
            </div>
            <div className="center aligned column engineering engineering5">
              <p>Control Systems</p>
            </div>
          </div>
        </div>
        <div className="ui middle aligned center aligned grid engineering engineeringHeader engineering1">
          <div className="row">
            <div className="column engineeringText">
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
