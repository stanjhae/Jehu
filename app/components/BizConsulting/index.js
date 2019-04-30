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
          <title>Business Consulting</title>
          <meta name="description" content="Business Consulting" />
        </Helmet>
        <div className="ui center aligned grid bizConsultingHeader bizConsulting1">
          <div className="row">
            <div className="left floated column">
              <Header />
            </div>
          </div>
          <div className="row">
            <Fade top duration={2000} className="column">
              <h1>BUSINESS</h1>
              <h1>CONSULTING</h1>
            </Fade>
          </div>
        </div>

        <div className="ui doubling stackable middle aligned two column centered grid plainBackground bizConsultingPlain container">
          <div className="row zeroPadding">
            <div className="left aligned column">
              <Fade left duration={2000}>
                <h2>Finance</h2>
                <p>Preparing a business plan</p>
                <p>Analysis of cost structures</p>
                <p>
                  Offering innovative solutions to improve nationalisation of
                  bizConsulting
                </p>
              </Fade>
            </div>
            <Fade right duration={2000}>
              <div className="center aligned column bizConsulting2" />
            </Fade>
          </div>
          <div className="row computer reversed zeroPadding">
            <div className="right aligned column">
              <Fade right duration={2000}>
                <h2>Marketing</h2>
                <p>Promote them with communication plans</p>
                <p>Social Media Promotion</p>
                <p>Digitalization</p>
                <p>Analysis of customers satisfaction.</p>
              </Fade>
            </div>
            <Fade left duration={2000}>
              <div className="center aligned column bizConsulting3" />
            </Fade>
          </div>
          <div className="row zeroPadding">
            <div className="left aligned column bizConsulting">
              <Fade left duration={2000}>
                <h2>Strategy</h2>
                <p>
                  Launching a new product or service on the market can be costly
                  and requires an in-depth study to perfectly identify your
                  target and the right price.
                </p>
                <p>Conduct projects about launching of new products</p>
                <p>Study of the field</p>
                <p>Definition of strategical positioning.</p>
              </Fade>
            </div>
            <Fade right duration={2000}>
              <div className="center aligned column bizConsulting4" />
            </Fade>
          </div>
        </div>
      </div>
    );
  }
}

Partners.propTypes = {};

export default Partners;
