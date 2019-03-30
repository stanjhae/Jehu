/**
 *
 * AboutMun
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
class AboutMun extends React.PureComponent {
  render() {
    return (
      <div className="ui vertically padded middle aligned stackable grid container secLetter">
        <div className="row">
          {/* <Fade left delay={1000}> */}
          <div className="eight wide column center aligned aboutMun"> </div>
          {/* </Fade> */}
          {/* <Fade right delay={1000}> */}
          <div className="ui eight wide column seventyHeight aboutMunText">
            {/* <Fade top delay={1500}> */}
            <h1 className="ui horizontal divider header">ABOUT MUN</h1>
            {/* </Fade> */}
            {/* <Fade bottom delay={1500}> */}
            <p>
              MUN or Model United Nations is an educational activity in which
              the summit of United Nations and other international organizations
              are simulated by the participants. In such role-play, the
              participants or delegates represent a country whose policy and
              interest they aim to present during negotiations concerning an
              actual international issue, which are targeted by UN’s agenda. The
              topics of negotiations will be given beforehand. Debated topics
              mostly cover present-day issues, such as Refugee Crisis, Human
              Rights, Climate Change and so on.
            </p>
            {/* </Fade> */}
          </div>
          {/* </Fade> */}
        </div>
      </div>
    );
  }
}

AboutMun.propTypes = {};

export default AboutMun;
