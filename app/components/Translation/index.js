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
class Translation extends React.PureComponent {
  render() {
    return (
      <div className="App">
        <Helmet>
          <title>Translation</title>
          <meta name="description" content="Translation" />
        </Helmet>
        <div className="ui center aligned grid translation translation1">
          <div className="row">
            <div className="left floated column">
              <Header />
            </div>
          </div>
          <div className="row">
            <div className="column translationText">
              <h1>TRANSLATION</h1>
            </div>
          </div>
        </div>

        <div className="ui middle aligned two column centered grid">
          <div className="row zeroPadding">
            <div className="center aligned column translation">
              <h1>Business and finance</h1>
              <p>Website localization</p>
              <p>Marketing collateral</p>
              <p>Application strings</p>
              <p>Surveys</p>
            </div>
            <div className="center aligned column translation translation2" />
          </div>
          <div className="row zeroPadding">
            <div className="center aligned column translation translation3" />
            <div className="center aligned column translation">
              <h1>Technology and software</h1>
              <p>Documentation</p>
              <p>Customer support</p>
              <p>Websites & Mobile apps</p>
            </div>
          </div>
          <div className="row zeroPadding">
            <div className="center aligned column translation">
              <h1>Ecommerce</h1>
              <p>Product descriptions</p>
              <p>User reviews</p>
              <p>Questions and answers</p>
              <p>Static website copy</p>
              <p>Branding materials</p>
            </div>
            <div className="center aligned column translation translation4" />
          </div>
          <div className="row zeroPadding">
            <div className="center aligned column translation translation5" />
            <div className="center aligned column translation">
              <h1>Marketing and advertising</h1>
              <p>Newsletters</p>
              <p>Social media content</p>
              <p>Ads</p>
              <p>Presentations</p>
              <p>Press releases</p>
              <p>Printed marketing materials</p>
            </div>
          </div>
        </div>
        <div className="ui middle aligned center aligned grid translation translationHeader translation1">
          <div className="row">
            <div className="column translationText">
              <h1>JEHU</h1>
              <p>FIRST JUNIOR ENTERPRISE IN HUNGARY</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Translation.propTypes = {};

export default Translation;
