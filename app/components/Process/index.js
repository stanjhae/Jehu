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
class Process extends React.PureComponent {
  render() {
    return (
      <div className="App">
        <Helmet>
          <title>Process</title>
          <meta name="description" content="Process" />
        </Helmet>
        <div className="ui center aligned grid process process1">
          <div className="row">
            <div className="left floated column">
              <Header />
            </div>
          </div>
          <div className="row">
            <div className="column processText">
              <h1>JEHU PROCESS</h1>
            </div>
          </div>
        </div>

        <div className="ui middle aligned two column centered grid">
          <div className="row zeroPadding">
            <div className="center aligned column processSteps">
              <h1>1. FINDING JEDEB</h1>
              <p>
                We are happy you find us, and we hope our provided services will
                meet with your requirements.
              </p>
            </div>
            <div className="center aligned column processSteps second">
              <h1>2. CONTACT JEDEB</h1>
              <p>After you contact JEDEB, we set up a meeting.</p>
            </div>
          </div>
          <div className="row zeroPadding">
            <div className="center aligned column processSteps second">
              <h1>3. INITIAL CONSULTATION</h1>
              <p>
                On the meeting you can share with us your ideas where you gave
                us directions to the budget and the exact details of the project
                itself. .
              </p>
            </div>
            <div className="center aligned column processSteps">
              <h1>4. OBJECTIVE OF THE MISSION</h1>
              <p>
                We sit together and plan the project based on your needs and
                expectations, this includes an estimate that sets out clearly
                the objective of the mission, the context and the methodology
                implemented, there is also the calendar and the estimation of
                the budget.
              </p>
            </div>
          </div>
          <div className="row zeroPadding">
            <div className="center aligned column processSteps">
              <h1>5. IMPLEMENTATION</h1>
              <p>
                We implement the project based on the agreed upon approach, this
                stage includes data collection and planning preformed by most
                skilled Debrecen University students, progress reports will be
                sent to the clients through the way.
              </p>
            </div>
            <div className="center aligned column processSteps second">
              <h1>6. FINALIZATION</h1>
              <p>
                The results will be shared in the suitable form most likely in a
                form of presentation, the process finish with filling feedback
                reports in order to keep improving.
              </p>
            </div>
          </div>
        </div>
        <div className="ui middle aligned center aligned grid process process1">
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

Process.propTypes = {};

export default Process;
