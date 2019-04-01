/**
 *
 * Delegates
 *
 */

import React from 'react';
import background from '../Committee/background.jpg';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
class Delegates extends React.PureComponent {
  render() {
    return (
      <div
        className="ui grid delegateApply overlay"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="row centered center aligned">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSd3_3PVb1cofdr8U-hJcnaxGTfSdHHQTU_s5XMfgtiTCbkc7w/viewform?embedded=true"
            width="640"
            height="3131"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="contact"
          >
            Loading...
          </iframe>
        </div>
      </div>
    );
  }
}

Delegates.propTypes = {};

export default Delegates;
