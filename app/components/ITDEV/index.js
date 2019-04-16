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
              <h1>IT DEVELOPMENT</h1>
            </div>
          </div>
        </div>
        <div className="ui middle aligned center aligned grid ItDev">
          <div className="row">
            <div className="column">
              <p>Software development</p>
              <p>Mobile application development</p>
              <p>Data processing and database creation (Database management)</p>
              <p>Web development</p>
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
