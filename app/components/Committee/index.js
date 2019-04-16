/**
 *
 * Committee
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Accordion, Icon } from 'semantic-ui-react';
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
import general from './general.jpg';
import security from './security.png';
import UNHRC from './UNHRC.png';
import WHO from './WHO.png';
import whoAgenda from './who.pdf';
import SCAgenda from './sc.pdf';
import background from './background.jpg';

/* eslint-disable react/prefer-stateless-function */
class Committee extends React.PureComponent {
  state = { activeIndex: -1 };

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  render() {
    const { activeIndex } = this.state;
    return (
      <div
        className="accordionContain overlay"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: 'cover',
        }}
      >
        <div className="ui container">
          <h1 style={{ textAlign: 'center' }} className="white">
            COMMITTEES
          </h1>
          {/* <Flip top duration={2000}> */}
          <Accordion fluid styled>
            <Accordion.Title
              className="white"
              active={activeIndex === 0}
              index={0}
              onClick={this.handleClick}
              style={{ backgroundColor: 'lightsteelblue' }}
            >
              <Icon name="dropdown" />
              Beginner
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 0}>
              <div className="ui vertically padded middle aligned stackable grid secLetter">
                <div className="row zeroPadding">
                  {/* <Slide left> */}
                  <div className="eight wide column seventyHeight aboutMunText">
                    <h1 className="ui horizontal divider header">UNHRC</h1>
                    <div className="ui large bulleted animated list">
                      <div className="item" style={{ textAlign: 'justify' }}>
                        <strong>About: </strong> is a United Nations body whose
                        mission is to promote and protect human rights around
                        the world. The UNHRC has 47 members elected for
                        staggered three-year terms on a regional group basis.
                        The 38th session of the UNHRC began June 18, 2018. It
                        ended on July 7, 2018. The headquarters of UNHRC is in
                        Geneva, Switzerland.
                      </div>
                      <div className="item">
                        <div>
                          <strong>Agendas</strong>
                        </div>
                        <div className="list">
                          <div className="item">
                            Hate crimes against the LGBTQ+ community
                          </div>
                          <div className="item">Persecution of journalists</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* </Slide> */}
                  {/* <Slide right> */}
                  <div className="eight wide column center aligned ">
                    <img
                      className="ui centered image"
                      alt="UNHRC"
                      src={UNHRC}
                    />
                  </div>
                  {/* </Slide> */}
                </div>
              </div>
            </Accordion.Content>

            <Accordion.Title
              className="white"
              active={activeIndex === 1}
              index={1}
              onClick={this.handleClick}
              style={{ backgroundColor: 'cornflowerblue' }}
            >
              <Icon name="dropdown" />
              Intermediate
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 1}>
              <div className="ui vertically padded middle aligned stackable grid secLetter">
                <div className="row zeroPadding">
                  {/* <Slide left> */}
                  <div className="eight wide column seventyHeight aboutMunText">
                    <h1 className="ui horizontal divider header">
                      GENERAL ASSEMBLY
                    </h1>
                    <div className="ui large bulleted animated list">
                      <div className="item" style={{ textAlign: 'justify' }}>
                        <strong>About: </strong>
                        is one of the six principal organs of the United Nations
                        (UN), the only one in which all member nations have
                        equal representation, and the main deliberative,
                        policy-making and representative organ of the UN. Its
                        powers are to oversee the budget of the UN, appoint the
                        non-permanent members to the Security Council, appoint
                        the Secretary-General of the United Nations, receive
                        reports from other parts of the UN and make
                        recommendations in the form of General Assembly
                        Resolutions It has also established numerous subsidiary
                        organs
                      </div>
                      <div className="item">
                        <div>
                          <strong>Agendas</strong>
                        </div>
                        <div className="list">
                          <div className="item">
                            Preventing the militarization of the Baltic sea.
                          </div>
                          <div className="item">
                            Model Legislation on money laundering and financing
                            of terrorism.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* </Slide> */}
                  {/* <Slide right> */}
                  <div className="eight wide column center aligned ">
                    <img
                      className="ui centered image"
                      alt="agenda"
                      src={general}
                    />
                  </div>
                  {/* </Slide> */}
                </div>
              </div>
              <div className="ui vertically padded middle aligned stackable grid secLetter">
                <div className="row zeroPadding">
                  {/* <Slide left> */}
                  <div className="eight wide column center aligned ">
                    <img className="ui centered image" alt="WHO" src={WHO} />
                    <a href={whoAgenda} target="_blank">
                      Download Agenda
                    </a>
                  </div>
                  {/* </Slide> */}
                  {/* <Slide right> */}
                  <div className="eight wide column seventyHeight aboutMunText">
                    <h1 className="ui horizontal divider header">
                      World Health Organization ( WHO )
                    </h1>
                    <div className="ui large bulleted animated list">
                      <div className="item" style={{ textAlign: 'justify' }}>
                        <strong>About: </strong> is a specialized agency of the
                        United Nations that is concerned with international
                        public health. It was established on 7 April 1948, and
                        is headquartered in Geneva, Switzerland. The WHO is a
                        member of the United Nations Development Group. Its
                        predecessor, the Health Organization, was an agency of
                        the League of Nations.
                      </div>
                      <div className="item">
                        <div>
                          <strong>Agendas</strong>
                        </div>
                        <div className="list">
                          <div className="item">
                            Global Challenges to Drug and Antibiotic Resistance
                          </div>
                          <div className="item">
                            Controlling the 2014 west African Ebola Virus
                            outbreak
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* </Slide> */}
                </div>
              </div>
            </Accordion.Content>
            <Accordion.Title
              className="white"
              active={activeIndex === 2}
              index={2}
              onClick={this.handleClick}
              style={{ backgroundColor: '#004286' }}
            >
              <Icon name="dropdown" />
              Advanced
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 2}>
              <div className="ui vertically padded middle aligned stackable grid secLetter">
                <div className="row zeroPadding">
                  {/* <Slide left> */}
                  <div className="eight wide column seventyHeight aboutMunText">
                    <h1 className="ui horizontal divider header">
                      Security Council
                    </h1>
                    <div className="ui large bulleted animated list">
                      <div className="item" style={{ textAlign: 'justify' }}>
                        <strong>About: </strong>
                        is one of the six principal organs of the United Nations
                        (UN) charged with the maintenance of international peace
                        and security as well as accepting new members to the
                        United Nations and approving any changes to its United
                        Nations Charter Its powers include the establishment of
                        peacekeeping operations, the establishment of
                        international sanctions, and the authorization of
                        military action through Security Council resolutions; it
                        is the only UN body with the authority to issue binding
                        resolutions to member states.
                      </div>
                      <div className="item">
                        <div>
                          <strong>Agendas</strong>
                        </div>
                        <div className="list">
                          <div className="item">
                            Palestinian - Israeli conflict
                          </div>
                          <div className="item">
                            The situation in the south china sea
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* </Slide> */}
                  {/* <Slide right> */}
                  <div className="eight wide column center aligned ">
                    <img
                      className="ui centered image"
                      alt="SC"
                      src={security}
                    />
                    <a href={SCAgenda} target="_blank">
                      Download Agenda
                    </a>
                  </div>
                  {/* </Slide> */}
                </div>
              </div>
            </Accordion.Content>
          </Accordion>
          {/* </Flip> */}
        </div>
      </div>
    );
  }
}

Committee.propTypes = {};

export default Committee;
