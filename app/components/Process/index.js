import React from 'react';
import { Fade } from 'react-reveal';
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
        <div className="ui center aligned middle aligned grid process process1">
          <div className="row centeredd">
            <Fade top duration={2000} className="column">
              <h1>JEHU</h1>
              <h1>PROCESS</h1>
            </Fade>
          </div>
        </div>

        <div className="ui doubling stackable three column centered grid plainBackground processPlain">
          <Fade top duration={2000} className="row zeroPadding">
            <div className="center aligned column processSteps">
              <h2>1. FINDING JEHU</h2>
              <p>
                We are happy you find us, and we hope our provided services will
                meet with your requirements.
              </p>
            </div>
            <div className="center aligned column processSteps second">
              <h2>2. CONTACT JEHU</h2>
              <p>After you contact JEHU, we set up a meeting.</p>
            </div>
            <div className="center aligned center aligned column processSteps">
              <h2>3. INITIAL CONSULTATION</h2>
              <p>
                On the meeting you can share with us your ideas where you gave
                us directions to the budget and the exact details of the project
                itself. .
              </p>
            </div>
          </Fade>
          <Fade bottom duration={2000} className="row zeroPadding">
            <div className="center aligned column processSteps second">
              <h2>4. OBJECTIVE OF THE MISSION</h2>
              <p>
                We sit together and plan the project based on your needs and
                expectations, this includes an estimate that sets out clearly
                the objective of the mission, the context and the methodology
                implemented, there is also the calendar and the estimation of
                the budget.
              </p>
              <br />
            </div>
            <div className="center aligned column processSteps">
              <h2>5. IMPLEMENTATION</h2>
              <p>
                We implement the project based on the agreed upon approach, this
                stage includes data collection and planning preformed by most
                skilled Debrecen University students, progress reports will be
                sent to the clients through the way.
              </p>
            </div>
            <div className="center aligned column processSteps second">
              <h2>6. FINALIZATION</h2>
              <p>
                The results will be shared in the suitable form most likely in a
                form of presentation, the process finish with filling feedback
                reports in order to keep improving.
              </p>
            </div>
          </Fade>
        </div>
      </div>
    );
  }
}

Process.propTypes = {};

export default Process;
