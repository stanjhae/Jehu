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
          <title>Engineering</title>
          <meta name="description" content="Engineering" />
        </Helmet>
        <div className="ui center aligned grid engineering1">
          <div className="row">
            <div className="left floated column">
              <Header />
            </div>
          </div>
          <div className="row">
            <Fade top duration={2000} className="column">
              <h1>ENGINEERING</h1>
            </Fade>
          </div>
        </div>

        <div className="ui doubling stackable middle aligned three column centered grid plainBackground engineeringPlain">
          <div className="row zeroPadding">
            <div className="center aligned column engineering2">
              <Fade left duration={2000}>
                <h2>Testing Methods</h2>
              </Fade>
            </div>
            <div className="center aligned column engineering3">
              <Fade top duration={2000}>
                <h2>PCB: Designing and programming</h2>
              </Fade>
            </div>
            <div className="center aligned column engineering4">
              <Fade right duration={2000}>
                <h2>Medical robots assistance</h2>
              </Fade>
            </div>
            <div className="center aligned column engineering5">
              <Fade left duration={2000}>
                <h2>Sensor programming</h2>
              </Fade>
            </div>
            <div className="center aligned column engineering6">
              <Fade bottom duration={2000}>
                <h2>Strength of materials</h2>
              </Fade>
            </div>
            <div className="center aligned column engineering7">
              <Fade right duration={2000}>
                <h2>
                  Feasibility study, cost implication and performance benefits
                  of new equipments
                </h2>
              </Fade>
            </div>
            <div className="center aligned column engineering8">
              <Fade left duration={2000}>
                <h2>
                  Conception (What features a model should have based on
                  analysis of customers needs and preferences)
                </h2>
              </Fade>
            </div>
            <div className="center aligned column engineering9">
              <Fade bottom duration={2000}>
                <h2>
                  Modelling, simulation and analysis of engineering systems
                </h2>
              </Fade>
            </div>
            <div className="center aligned column engineering10">
              <Fade right duration={2000}>
                <h2>Matlab programming</h2>
              </Fade>
            </div>
            <div className="center aligned column engineering11">
              <Fade left duration={2000}>
                <h2>LAbVIEW Programming</h2>
              </Fade>
            </div>
            <div className="center aligned column engineering12">
              <Fade right duration={2000}>
                <h2>Control Systems</h2>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Partners.propTypes = {};

export default Partners;
