/**
 *
 * Team
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
import alice from './alice.jpg';
import aram from './aram.jpg';
import dawoud from './dawoud.jpg';
import didi from './didi.jpg';
import faris from './faris.jpg';
import laith from './laith.jpg';
import laura from './laura.jpg';
import ninjin from './ninjin.jpg';
import nour from './nour.jpg';
import qais from './qais.jpg';
import hussam from './hussam.jpg';

/* eslint-disable react/prefer-stateless-function */
class Team extends React.PureComponent {
  render() {
    return (
      <div className="team overlay">
        <h1 className="white" style={{ textAlign: 'center' }}>
          MEET THE TEAM
        </h1>
        <div className="ui doubling stackable vertically padded very relaxed centered grid">
          <div className="ui medium images">
            <img alt="Secretary General" src={dawoud} />
            <img alt="Charge Affairs" src={laith} />
            <img alt="Deputy Secretary General" src={nour} />
            <img alt="Director General" src={faris} />
            <img alt="International Press" src={alice} />
            <img alt="Logistics" src={aram} />
            <img alt="Event Coordinator" src={didi} />
            <img alt="Marketting and content creator" src={hussam} />
            <img alt="Delegates Affairs" src={ninjin} />
            <img alt="Marketing" src={qais} />
            <img alt="Conference Services" src={laura} />
          </div>
        </div>
      </div>
    );
  }
}

Team.propTypes = {};

export default Team;
