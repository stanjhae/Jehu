/**
 *
 * Sponsors
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
import Golden from './golden.png';
import background from '../Committee/background.jpg';

/* eslint-disable react/prefer-stateless-function */
class Sponsors extends React.PureComponent {
  render() {
    return (
      <div
        className="sponsor overlay"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: 'cover',
        }}
      >
        <div>
          <h1 style={{ textAlign: 'center' }} className="white">
            SPONSORS
          </h1>
        </div>
        <div className="ui vertically padded center aligned grid container white">
          <div className="four column row">
            <div className="column middle aligned">
              <img className="ui image" alt="agenda" src={Golden} />
            </div>
          </div>
        </div>
        <div>
          <h1 style={{ textAlign: 'center' }} className="white">
            Become A Sponsor
          </h1>
          <p style={{ textAlign: 'center' }} className="white">
            Send an email to{' '}
            <a href="mailto:info@debmun.com">info@debmun.com</a> to become a
            sponsor
          </p>
        </div>
      </div>
    );
  }
}

Sponsors.propTypes = {};

export default Sponsors;
