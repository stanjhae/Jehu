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
              <h1>IT CONSULTING</h1>
            </div>
          </div>
        </div>

        <div className="ui middle aligned center aligned grid ItCons">
          <div className="row">
            <div className="column">
              <p>
                Focuses on advising organizations on how best to use information
                technology (IT) in achieving their business objectives.
              </p>
              <p>
                If you’re wondering what the right technology platform is for
                your business, we can help assess your needs, create the right
                technology strategy, develop the business case for change and
                provide a roadmap for the journey.
              </p>
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
