/**
 *
 * Chairs
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
class Chairs extends React.PureComponent {
  render() {
    return (
      <div className="ui grid delegateApply overlay">
        <div className="row centered center aligned">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSfF7nWQC8ZvhGOw2eqe83ggrRrU1qwj7uFIjy5m906fJyVKTg/viewform?embedded=true"
            width="1000"
            height="3385"
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

Chairs.propTypes = {};

export default Chairs;
