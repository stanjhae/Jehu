/**
 *
 * Faq
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
import { Accordion, Icon } from 'semantic-ui-react';

/* eslint-disable react/prefer-stateless-function */
class Faq extends React.PureComponent {
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
      <div className="accordionContain overlay">
        <h1 className="white" style={{ textAlign: 'center' }}>
          FREQUENTLY ASKED QUESTIONS
        </h1>
        <div className="ui container faq">
          <h1 style={{ textAlign: 'center' }} className="white">
            GENERAL
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
              What is MUN?
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 0}>
              {/* <Slide left> */}
              <p>
                Model United Nations, also known as Model UN or MUN, is an
                educational simulation and academic competition in which
                students learn about diplomacy, international relations, and the
                United Nations. MUN involves and teaches research, public
                speaking, debating, and writing skills, in addition to critical
                thinking, teamwork, and leadership abilities
              </p>
              {/* </Slide> */}
            </Accordion.Content>
            <Accordion.Title
              className="white"
              active={activeIndex === 1}
              index={1}
              onClick={this.handleClick}
              style={{ backgroundColor: 'cornflowerblue' }}
            >
              <Icon name="dropdown" />
              What is DEBMUN?
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 1}>
              {/* <Slide left> */}
              <p>
                DEBMUN is a Model United Nations conference which is happening
                for the first time and will be held annually in Debrecen,
                Hungary
              </p>
              {/* </Slide> */}
            </Accordion.Content>
            <Accordion.Title
              className="white"
              active={activeIndex === 2}
              index={2}
              onClick={this.handleClick}
              style={{ backgroundColor: '#004286' }}
            >
              <Icon name="dropdown" />
              Is there a dress code?
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 2}>
              {/* <Slide left> */}
              <p>
                The dress code for DEBMUN 2018 is formal, including the
                workshops and the ceremonies. Business attire would be
                appropriate for female participants. Suits, ties and jackets
                would be appropriate for male participants. It is absolutely not
                allowed to wear casual clothes.
              </p>
              {/* </Slide> */}
            </Accordion.Content>
            <Accordion.Title
              className="white"
              active={activeIndex === 3}
              index={3}
              onClick={this.handleClick}
              style={{ backgroundColor: '#012651' }}
            >
              <Icon name="dropdown" />
              Where and when will be DEBMUN held?
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 3}>
              {/* <Slide left> */}
              <p>
                DEBMUN will be held next semester at the University of Debrecen.
              </p>
              {/* </Slide> */}
            </Accordion.Content>
          </Accordion>
          {/* </Flip> */}
        </div>
        <div className="ui container faq">
          <h1 style={{ textAlign: 'center' }} className="white">
            ACADEMICS
          </h1>
          {/* <Flip top duration={2000}> */}
          <Accordion fluid styled>
            <Accordion.Title
              className="white"
              active={activeIndex === 4}
              index={4}
              onClick={this.handleClick}
              style={{ backgroundColor: '#012651' }}
            >
              <Icon name="dropdown" />
              What is the official language of the conference?
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 4}>
              {/* <Slide left> */}
              <p>The official language of DEBMUN is English.</p>
              {/* </Slide> */}
            </Accordion.Content>
            <Accordion.Title
              className="white"
              active={activeIndex === 5}
              index={5}
              onClick={this.handleClick}
              style={{ backgroundColor: '#004286' }}
            >
              <Icon name="dropdown" />
              Do I need previous experience to participate?
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 5}>
              {/* <Slide left> */}
              <p>
                You do not need previous experience to participate. However,
                experienced participants will be prioritized and will be
                allocated, accordingly. When deciding on your committee
                preferences, please bear in mind that; -only experienced
                delegates will be allocated to the United Nations Security
                Council, International court of justice..etc
              </p>
              {/* </Slide> */}
            </Accordion.Content>
            <Accordion.Title
              className="white"
              active={activeIndex === 6}
              index={6}
              onClick={this.handleClick}
              style={{ backgroundColor: 'cornflowerblue' }}
            >
              <Icon name="dropdown" />
              How many delegates will represent a country in each committee?
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 6}>
              {/* <Slide left> */}
              <p>
                Only a delegate will be representing his/her allocated country
                in a committee.
              </p>
              {/* </Slide> */}
            </Accordion.Content>
            <Accordion.Title
              className="white"
              active={activeIndex === 7}
              index={7}
              onClick={this.handleClick}
              style={{ backgroundColor: 'lightsteelblue' }}
            >
              <Icon name="dropdown" />
              Can I represent my own country?
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 7}>
              {/* <Slide left> */}
              <p>
                individual delegates are not allowed to represent their own
                country and the delegations are not allowed to represent the
                country of their school/institution.
              </p>
              {/* </Slide> */}
            </Accordion.Content>
            <Accordion.Title
              className="white"
              active={activeIndex === 8}
              index={8}
              onClick={this.handleClick}
              style={{ backgroundColor: 'cornflowerblue' }}
            >
              <Icon name="dropdown" />
              How can I get prepared for the conference?
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 8}>
              {/* <Slide left> */}
              <p>
                Delegates may get prepared by examining the study guides written
                by the Director General and the chairs team of DEBMUN 2018
              </p>
              {/* </Slide> */}
            </Accordion.Content>
            <Accordion.Title
              className="white"
              active={activeIndex === 9}
              index={9}
              onClick={this.handleClick}
              style={{ backgroundColor: '#004286' }}
            >
              <Icon name="dropdown" />
              Is it compulsory to attend all the sessions?
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 9}>
              {/* <Slide left> */}
              <p>
                Delegates who miss more than 2 sessions will not be able to have
                their certificates of participation
              </p>
              {/* </Slide> */}
            </Accordion.Content>
            <Accordion.Title
              className="white"
              active={activeIndex === 10}
              index={10}
              onClick={this.handleClick}
              style={{ backgroundColor: '#012651' }}
            >
              <Icon name="dropdown" />
              Are there any workshops for participants?
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 10}>
              {/* <Slide left> */}
              <p>
                Yes, there will be workshops for participants. The content and
                the date of the workshop will be announced soon.
              </p>
              {/* </Slide> */}
            </Accordion.Content>
            <Accordion.Title
              className="white"
              active={activeIndex === 11}
              index={11}
              onClick={this.handleClick}
              style={{ backgroundColor: 'cornflowerblue' }}
            >
              <Icon name="dropdown" />
              When will the allocations begin?
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 11}>
              {/* <Slide left> */}
              <p>
                Allocations will begin after the Normal Registration comes to an
                end.
              </p>
              {/* </Slide> */}
            </Accordion.Content>
          </Accordion>
          {/* </Flip> */}
        </div>
        <div className="ui container faq">
          <h1 style={{ textAlign: 'center' }} className="white">
            ORGANIZATIONAL
          </h1>
          {/* <Flip top duration={2000}> */}
          <Accordion fluid styled>
            <Accordion.Title
              className="white"
              active={activeIndex === 12}
              index={12}
              onClick={this.handleClick}
              style={{ backgroundColor: 'cornflowerblue' }}
            >
              <Icon name="dropdown" />
              Who can apply?
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 12}>
              {/* <Slide left> */}
              <p>Any university student can apply to DEBMUN 2018</p>
              {/* </Slide> */}
            </Accordion.Content>
            <Accordion.Title
              className="white"
              active={activeIndex === 13}
              index={13}
              onClick={this.handleClick}
              style={{ backgroundColor: 'lightsteelblue' }}
            >
              <Icon name="dropdown" />
              Is it possible for a high school to apply ?
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 13}>
              {/* <Slide left> */}
              <p>
                we can make some exceptions for expert high school students with
                a good experience ( limited seats)
              </p>
              {/* </Slide> */}
            </Accordion.Content>
            <Accordion.Title
              className="white"
              active={activeIndex === 14}
              index={14}
              onClick={this.handleClick}
              style={{ backgroundColor: 'cornflowerblue' }}
            >
              <Icon name="dropdown" />
              What is the deadline for registration?
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 14}>
              {/* <Slide left> */}
              <p>The registration time will come to an end on dd/mm/2019</p>
              {/* </Slide> */}
            </Accordion.Content>
            <Accordion.Title
              className="white"
              active={activeIndex === 15}
              index={15}
              onClick={this.handleClick}
              style={{ backgroundColor: '#004286' }}
            >
              <Icon name="dropdown" />
              Does DEBMUN provide a refund?
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 15}>
              {/* <Slide left> */}
              <p>Unfortunately, we do not provide any refunds.</p>
              {/* </Slide> */}
            </Accordion.Content>
            <Accordion.Title
              className="white"
              active={activeIndex === 19}
              index={19}
              onClick={this.handleClick}
              style={{ backgroundColor: '#012651' }}
            >
              <Icon name="dropdown" />
              Are transfer costs included in the payment?
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 19}>
              {/* <Slide left> */}
              <p>
                No, they are not included. You should add the transfer costs
                into the registration fee.
              </p>
              {/* </Slide> */}
            </Accordion.Content>
            <Accordion.Title
              className="white"
              active={activeIndex === 16}
              index={16}
              onClick={this.handleClick}
              style={{ backgroundColor: '#004286' }}
            >
              <Icon name="dropdown" />
              Are the social events included in the payments?
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 16}>
              {/* <Slide left> */}
              <p>No, they are not included</p>
              {/* </Slide> */}
            </Accordion.Content>
            <Accordion.Title
              className="white"
              active={activeIndex === 17}
              index={17}
              onClick={this.handleClick}
              style={{ backgroundColor: 'cornflowerblue' }}
            >
              <Icon name="dropdown" />
              Are the late registrations accepted?
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 17}>
              {/* <Slide left> */}
              <p>Yes, late registrations are accepted.</p>
              {/* </Slide> */}
            </Accordion.Content>
            <Accordion.Title
              className="white"
              active={activeIndex === 18}
              index={18}
              onClick={this.handleClick}
              style={{ backgroundColor: 'lightsteelblue' }}
            >
              <Icon name="dropdown" />
              Are there any limits for delegations?
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 18}>
              {/* <Slide left> */}
              <p>
                There is no limitation for the maximum number of delegates in a
                delegation. However, the under Secretary General reserves the
                right to ask the delegation representative to reduce the total
                number of delegates in their delegation, due to the limited
                number of seats.
              </p>
              {/* </Slide> */}
            </Accordion.Content>
          </Accordion>
          {/* </Flip> */}
        </div>
      </div>
    );
  }
}

Faq.propTypes = {};

export default Faq;
