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
class Translation extends React.PureComponent {
  render() {
    return (
      <div className="App">
        <Helmet>
          <title>Translation</title>
          <meta name="description" content="Translation" />
        </Helmet>
        <div className="ui center aligned grid translation1">
          <div className="row centeredd">
            <Fade top duration={2000} className="column">
              <h1>TRANSLATION</h1>
            </Fade>
          </div>
        </div>

        <div className="ui middle aligned two column centered grid plainBackground translationPlain container">
          <div className="row zeroPadding">
            <div className="center aligned column">
              <Fade left duration={2000}>
                <h2>Business and finance</h2>
                <p>Website localization</p>
                <p>Marketing collateral</p>
                <p>Application strings</p>
                <p>Surveys</p>
              </Fade>
            </div>
            <Fade right duration={2000}>
              <div className="center aligned column translation2" />
            </Fade>
          </div>
          <div className="row zeroPadding">
            <Fade left duration={2000}>
              <div className="center aligned column translation3" />
            </Fade>
            <div className="center aligned column">
              <Fade right duration={2000}>
                <h2>Technology and software</h2>
                <p>Documentation</p>
                <p>Customer support</p>
                <p>Websites & Mobile apps</p>
              </Fade>
            </div>
          </div>
          <div className="row zeroPadding">
            <div className="center aligned column">
              <Fade left duration={2000}>
                <h2>Ecommerce</h2>
                <p>Product descriptions</p>
                <p>User reviews</p>
                <p>Questions and answers</p>
                <p>Static website copy</p>
                <p>Branding materials</p>
              </Fade>
            </div>
            <Fade right duration={2000}>
              <div className="center aligned column translation4" />
            </Fade>
          </div>
          <div className="row zeroPadding">
            <Fade left duration={2000}>
              <div className="center aligned column translation5" />
            </Fade>
            <div className="center aligned column">
              <Fade right duration={2000}>
                <h2>Marketing and advertising</h2>
                <p>Newsletters</p>
                <p>Social media content / Ads</p>
                <p>Presentations</p>
                <p>Press releases</p>
                <p>Printed marketing materials</p>
                <br />
              </Fade>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Translation.propTypes = {};

export default Translation;
