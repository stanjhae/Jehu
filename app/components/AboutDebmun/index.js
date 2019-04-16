/**
 *
 * AboutDebmun
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { List } from 'semantic-ui-react';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
class AboutDebmun extends React.PureComponent {
  render() {
    return (
      <div className="ui vertically padded middle aligned stackable grid container secLetter">
        <div className="row">
          {/* <Fade right delay={1000}> */}
          <div className="eight wide column center aligned aboutMun"> </div>
          {/* </Fade> */}
          {/* <Fade left delay={1000}> */}
          <div className="ui eight wide column seventyHeight aboutMunText">
            {/* <Fade top delay={1500}> */}
            <h1 className="ui horizontal divider header">ABOUT DEBMUN</h1>
            {/* </Fade> */}
            {/* <Fade bottom delay={1500}> */}
            <p>
              Is a three-day extra-curricular event in which students role-play
              delegates of the United Nations countries and stimulate various UN
              committees to promote and portray the protocols of the UN main
              bodies and subsidiary organs in a world class simulation. The
              delegations of the involved countries will be represented by
              delegates . Each delegate has a number of requirements to be
              accomplished before the due date, the first requirement is to
              research about his/her respectable country in addition to the
              topic that will be discussed in the assigned session. This will
              enable the delegate to write a speech and a resolution for his
              session’s topic.
            </p>
            {/* </Fade> */}
          </div>
          {/* </Fade> */}
        </div>
        <div className="row">
          {/* <Fade right delay={1000}> */}
          <div
            className="ui eight wide column seventyHeight aboutMunText"
            style={{ paddingBottom: 20 }}
          >
            {/* <Fade top delay={1500}> */}
            <h1 className="ui horizontal divider header">Objectives</h1>
            {/* </Fade> */}
            {/* <Fade bottom delay={1500}> */}
            <List bulleted animated relaxed="very" size="large">
              <List.Item>
                To improve participant’s preparation, writing , critical
                thinking , listening , negotiation and public speaking skills.
              </List.Item>
              <List.Item>
                To enhance proper use of English rather than colloquial terms.
              </List.Item>
              <List.Item>
                To contribute in the development of future leaders that are
                capable of addressing global challenges
              </List.Item>
              <List.Item>
                To help delegates establish their primary political terminology.
              </List.Item>
              <List.Item>
                To provide a thorough and transparent insight of current
                pressing global issues in an attempt to direct the students
                political awareness.
              </List.Item>
              <List.Item>
                Gain insight into the workings of the United Nations and the
                dynamics of international relations.
              </List.Item>
              <List.Item>
                To achieve a deeper understanding of foreign cultures.
              </List.Item>
              <List.Item>
                We seek to depict and legislative process of the UN whilst
                dealing with pressing issues of our time.
              </List.Item>
              <List.Item>
                The encouragement of the international dialogue that could
                facilitate multilateral cooperation offering young people a
                venue where they can insight the bureaucracy of the UN.
              </List.Item>
            </List>
            {/* </Fade> */}
          </div>
          {/* </Fade> */}
          {/* <Fade left delay={1000}> */}
          <div className="eight wide column center aligned aboutMun2"> </div>
          {/* </Fade> */}
        </div>
      </div>
    );
  }
}

AboutDebmun.propTypes = {};

export default AboutDebmun;
