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
          <title>IT Development</title>
          <meta name="description" content="IT Development" />
        </Helmet>
        <div className="ui center aligned grid ItDev1">
          <div className="row centeredd">
            <Fade top duration={2000} className="column">
              <h1>IT</h1>
              <h1>DEVELOPMENT</h1>
            </Fade>
          </div>
        </div>
        <div className="ui middle aligned center aligned grid plainBackground text container">
          <div className="row">
            <div className="column">
              <Fade bottom duration={2000}>
                <p>Software development</p>
                <p>Mobile application development</p>
                <p>Data ItDeving and database creation (Database management)</p>
                <p>Web development</p>
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
