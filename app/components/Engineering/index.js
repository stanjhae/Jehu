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
        <div className="ui center aligned grid process process1">
          <div className="row">
            <div className="left floated column">
              <Header />
            </div>
          </div>
          <div className="row">
            <div className="column processText">
              <h1>Engineering</h1>
            </div>
          </div>
        </div>

        <div className="ui middle aligned two column centered grid">
          <div className="row zeroPadding">
            <div className="center aligned column engineering">
              <p>Testing Methods
              </p>
            </div>
            <div className="center aligned column engineering startup1">
              <p>PCB: Designing and programming</p>
            </div>
          </div>
          <div className="row zeroPadding">
            <div className="center aligned column engineering startup2">
              <p>Medical robots assistance</p>
            </div>
            <div className="center aligned column engineering">
              <p>Sensor programming</p>
            </div>
          </div>
          <div className="row zeroPadding">
            <div className="center aligned column engineering">
              <p>Sensor programming</p>
            </div>
            <div className="center aligned column engineering startup3">
              <p>Feasibility study, cost implication and performance benefits of new equipments</p>
            </div>
          </div>
          <div className="row zeroPadding">
            <div className="center aligned column engineering">
              <p>Conception (What features a model should have based on analysis of customers needs and preferences)
              </p>
            </div>
            <div className="center aligned column engineering startup1">
              <p>Modelling, simulation and analysis of engineering systems</p>
            </div>
          </div>
          <div className="row zeroPadding">
            <div className="center aligned column engineering startup2">
              <p>Strength of materials</p>
            </div>
            <div className="center aligned column engineering">
              <p>Matlab programming</p>
            </div>
          </div>
          <div className="row zeroPadding">
            <div className="center aligned column engineering">
              <p>LAbVIEW Proramming</p>
            </div>
            <div className="center aligned column engineering startup3">
              <p>Control Systems</p>
            </div>
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
