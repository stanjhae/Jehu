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
          <title>IT Consulting</title>
          <meta name="description" content="IT Consulting" />
        </Helmet>
        <div className="ui center aligned grid itCons1">
          <div className="row centeredd">
            <Fade top duration={2000} className="column">
              <h1>IT</h1>
              <h1>CONSULTING</h1>
            </Fade>
          </div>
        </div>

        <div className="ui middle aligned center aligned grid plainBackground text container">
          <div className="row">
            <div className="column">
              <Fade bottom duration={2000}>
                <p>
                  Focuses on advising organizations on how best to
                  use information technology (IT) in achieving their business
                  objectives.
                </p>
                <p>
                  If you’re wondering what the right technology platform is for
                  your business, we can help assess your needs, create the right
                  technology strategy, develop the business case for change and
                  provide a roadmap for the journey.
                </p>
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
