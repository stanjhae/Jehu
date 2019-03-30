/**
 *
 * Transport
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

import { Carousel } from 'react-responsive-carousel';
import { Label, List, Table } from 'semantic-ui-react';
import dkvBus from './dkvbus.jpg';
import dkvBus2 from './dkvbuss.jpg';
import dkvTram from './dkvtram.jpg';
import dkvTrolley from './dkvtrolley.jpg';

/* eslint-disable react/prefer-stateless-function */
class Transport extends React.PureComponent {
  render() {
    return (
      <div className="ui vertically padded middle aligned stackable grid">
        <div className="row zeroPadding">
          <div className="column center aligned zeroPadding">
            {/* <Bounce top duration={2000}> */}
            <Carousel
              className="carouselTrans"
              interval={5000}
              infiniteLoop
              showThumbs={false}
              autoPlay
              emulateTouch
              stopOnHover={false}
              showStatus={false}
            >
              <div>
                <img alt="slide" src={dkvBus} />
                <div className="debmunAnnounce">
                  <h1>DKV BUS</h1>
                </div>
              </div>
              <div>
                <img alt="slide" src={dkvBus2} />
                <div className="debmunAnnounce">
                  <h1>DKV BUS</h1>
                </div>
              </div>
              <div>
                <img alt="slide" src={dkvTram} />
                <div className="debmunAnnounce">
                  <h1>DKV TROLLEY BUS</h1>
                </div>
              </div>
              <div>
                <img alt="slide" src={dkvTrolley} />
                <div className="debmunAnnounce">
                  <h1>DKV TRAM</h1>
                </div>
              </div>
            </Carousel>
            {/* </Bounce> */}
          </div>
        </div>
        <div className="row centered zeroPadding">
          {/* <Bounce bottom duration={3000}> */}
          <div className="ui column center aligned middle aligned fiftyHeight text container aboutMunText">
            <h1 className="ui horizontal divider header">
              <i className="bus icon"> </i>
              TRANSPORTATION IN DEBRECEN
            </h1>
            <Table celled color="red" padded striped verticalAlign="middle">
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Tickets</Table.HeaderCell>
                  <Table.HeaderCell>Price</Table.HeaderCell>
                  <Table.HeaderCell>Notes</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                <Table.Row>
                  <Table.Cell>
                    <Label ribbon color="red">
                      Advance single ticket
                    </Label>
                  </Table.Cell>
                  <Table.Cell>330 HUF</Table.Cell>
                  <Table.Cell width={8}>
                    <List bulleted>
                      <List.Item>One-way ticket</List.Item>
                      <List.Item>
                        Needs to be validated in the ticket machines once in the
                        tram/bus
                      </List.Item>
                      <List.Item>
                        Keep it with you until the trip ends
                      </List.Item>
                    </List>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Label ribbon color="red">
                      Single ticket from the driver
                    </Label>
                  </Table.Cell>
                  <Table.Cell>400 HUF</Table.Cell>
                  <Table.Cell>
                    <List bulleted>
                      <List.Item>
                        Same as the one-way ticket, but more expensive if you
                        buy it from the driver
                      </List.Item>
                    </List>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Label ribbon color="red">
                      Day Ticket
                    </Label>
                  </Table.Cell>
                  <Table.Cell>1200 HUF</Table.Cell>
                  <Table.Cell>
                    <List bulleted>
                      <List.Item>Unlimited trips during the day</List.Item>
                      <List.Item>Needs to write your ID number on it</List.Item>
                      <List.Item>
                        Before the start of the first journey, the serial number
                        of the valid facial document must be indicated in ink,
                        legibly and without correction, in the appropriate box
                        of the ticket.
                      </List.Item>
                    </List>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Label ribbon color="red">
                      3 Day ticket
                    </Label>
                  </Table.Cell>
                  <Table.Cell>2500 HUF</Table.Cell>
                  <Table.Cell>
                    <List bulleted>
                      <List.Item>
                        Same as the one-day ticket, but for three days instead
                        of one
                      </List.Item>
                    </List>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Label ribbon color="red">
                      7 Day ticket
                    </Label>
                  </Table.Cell>
                  <Table.Cell>3200 HUF</Table.Cell>
                  <Table.Cell>
                    <List bulleted>
                      <List.Item>
                        Same as the one-day ticket, but for three days instead
                        of one
                      </List.Item>
                    </List>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Label ribbon color="red">
                      Small group ticket
                    </Label>
                  </Table.Cell>
                  <Table.Cell>2000 HUF</Table.Cell>
                  <Table.Cell>
                    <List bulleted>
                      <List.Item>
                        Small group tickets can be used by small groups of
                        passengers on the day indicated on them, from service
                        start to service end for an unlimited number of trips.
                      </List.Item>
                      <List.Item>
                        Small group tickets can be used by maximum 5 passengers
                        as a group on the same vehicle within the validity
                        period indicated on them.
                      </List.Item>
                    </List>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Label ribbon color="red">
                      Student monthly ticket
                    </Label>
                  </Table.Cell>
                  <Table.Cell>3800 HUF</Table.Cell>
                  <Table.Cell />
                </Table.Row>
              </Table.Body>
            </Table>
          </div>
          {/* </Bounce> */}
        </div>
      </div>
    );
  }
}

Transport.propTypes = {};

export default Transport;
