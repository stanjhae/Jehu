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
          <title>IT Development</title>
          <meta name="description" content="IT Development" />
        </Helmet>
        <div className="ui center aligned grid ItDev ItDev1">
          <div className="row">
            <div className="left floated column">
              <Header />
            </div>
          </div>
          <div className="row">
            <div className="column ItDevText">
              <h1>IT DEVELOPMENT</h1>
            </div>
          </div>
        </div>
        <div className="ui middle aligned center aligned grid ItDev">
          <div className="row">
            <div className="column">
              <p>Software development</p>
              <p>Mobile application development</p>
              <p>Data ItDeving and database creation (Database management)</p>
              <p>Web development</p>
            </div>
          </div>
        </div>
        <div className="ui middle aligned center aligned grid ItDev ItDev1">
          <div className="row">
            <div className="column ItDevText">
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
