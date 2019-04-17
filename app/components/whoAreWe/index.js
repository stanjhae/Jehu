/**
 *
 * whoAreWe
 *
 */

import React from 'react';
import Header from 'components/Header';
import './index.css';
import CountUp from 'react-countup';
import { Helmet } from 'react-helmet';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
class WhoAreWe extends React.PureComponent {
  render() {
    return (
      <div className="App">
        <Helmet>
          <title>Who are we?</title>
          <meta name="description" content="Who are we" />
        </Helmet>
        <div className="ui center aligned grid who who1">
          <div className="row">
            <div className="left floated column">
              <Header />
            </div>
          </div>
          <div className="row">
            <div className="column whoText">
              <h1>WHO ARE WE</h1>
            </div>
          </div>
        </div>
        <div className="ui middle aligned center aligned grid whoColumnText">
          <div className="row">
            <div className="column">
              <h1>WHAT IS A JUNIOR ENTERPRISE?</h1>
              <p>
                A Junior Enterprise is a non-profit organization, formed and
                managed exclusively by university students, which provides
                services for companies, institutions, and individuals.
              </p>
              <p>
                Junior Enterprises are similar to real companies, with the main
                goal of enhancing the learning of their members through
                practical experiences.
              </p>
            </div>
          </div>
        </div>
        <div className="ui five columns doubling stackable middle aligned center aligned grid who who2">
          <div className="row">
            <div className="column statNum">
              <CountUp
                start={0}
                end={900}
                delay={0}
                duration={3}
                redraw
                useEasing={false}
              >
                {({ countUpRef }) => (
                  <div>
                    <span ref={countUpRef} />
                  </div>
                )}
              </CountUp>
              <p className="statistics">JUNIOR ENTERPRISE</p>
            </div>
            <div className="column statNum">
              <CountUp
                start={0}
                end={35000}
                delay={0}
                duration={3}
                redraw
                useEasing={false}
              >
                {({ countUpRef }) => (
                  <div>
                    <span ref={countUpRef} />
                  </div>
                )}
              </CountUp>
              <p className="statistics">UNIVERSITY STUDENTS</p>
            </div>
            <div className="column statNum">
              <CountUp
                start={0}
                end={30}
                delay={0}
                duration={3}
                redraw
                useEasing={false}
              >
                {({ countUpRef }) => (
                  <div>
                    <span ref={countUpRef} />
                  </div>
                )}
              </CountUp>
              <p className="statistics">COUNTRIES</p>
            </div>
            <div className="column statNum">
              <CountUp
                start={0}
                end={8500}
                delay={0}
                duration={3}
                redraw
                useEasing={false}
              >
                {({ countUpRef }) => (
                  <div>
                    <span ref={countUpRef} />
                  </div>
                )}
              </CountUp>
              <p className="statistics">PROJECTS FOR CLIENTS/YEAR</p>
            </div>
            <div className="column statNum">
              <CountUp
                start={0}
                end={16}
                delay={0}
                duration={3}
                redraw
                useEasing={false}
              >
                {({ countUpRef }) => (
                  <div>
                    <span ref={countUpRef} />
                  </div>
                )}
              </CountUp>
              <p className="statistics">MILLION TURNOVER/YEAR (EUROS)</p>
            </div>
          </div>
        </div>
        <div className="ui middle aligned center aligned grid container whoColumnText">
          <div className="row">
            <div className="column">
              <h1>50 YEARS OF HISTORY</h1>
              <p>
                The first Junior Enterprise was founded in ESSEC Business School
                in Paris, France in 1967. During the next 20 years the concept
                reached many other countries in Europe, then in 1988, it arrived
                in Brazil and further to other American countries. Since 2006,
                we have had a constant growth in the African and Asian
                continents as well.
              </p>
            </div>
          </div>
        </div>
        <div className="ui middle aligned center aligned grid who who1">
          <div className="row">
            <div className="column whoText">
              <h1>JEHU</h1>
              <p>FIRST JUNIOR ENTERPRISE IN HUNGARY</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

WhoAreWe.propTypes = {};

export default WhoAreWe;
