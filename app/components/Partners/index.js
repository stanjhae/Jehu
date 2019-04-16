/**
 *
 * Partners
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
import Plakatra from './plakatra.jpg';
import Jordan from './jordan.jpg';
import Ted from './TEDx.png';
import background from '../Committee/background.jpg';
/* eslint-disable react/prefer-stateless-function */
class Partners extends React.PureComponent {
  render() {
    return (
      <div
        className="partner overlay"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: 'cover',
        }}
      >
        <div>
          <h1 style={{ textAlign: 'center' }} className="white">
            PARTNERS
          </h1>
        </div>
        <div className="ui vertically padded center aligned stackable grid container white">
          <div className="four column row">
            <div className="column middle aligned">
              <img className="ui image" alt="plakatra" src={Plakatra} />
            </div>
            <div className="column middle aligned">
              <img className="ui image" alt="Jordan" src={Jordan} />
            </div>
            <div className="column middle aligned">
              <img className="ui image" alt="Ted" src={Ted} />
            </div>
          </div>
        </div>
        <div>
          <h1 style={{ textAlign: 'center' }} className="white">
            Become A Partner
          </h1>
          <p style={{ textAlign: 'center' }} className="white">
            Send an email to{' '}
            <a href="mailto:info@debmun.com">info@debmun.com</a> to become a
            partner
          </p>
        </div>
      </div>
    );
  }
}

Partners.propTypes = {};

export default Partners;
