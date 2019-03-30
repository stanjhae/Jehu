import React from 'react';
// import { FormattedMessage } from 'react-intl';

import { Dropdown, Menu, Icon, Button } from 'semantic-ui-react';
import Flip from 'react-reveal/Flip';
import HeaderLink from './HeaderLink';
import Logo from './logo.png';
// import messages from './messages';
import delegate from './Delegates-kit.pdf';

/* eslint-disable react/prefer-stateless-function */
class Header extends React.Component {
  state = { width: window.innerWidth, visible: false };

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({ width: window.innerWidth });
    if (this.state.width > 768) {
      this.setState({ visible: true });
    } else {
      this.setState({ visible: false });
    }
  };

  toggleMenu = () => {
    this.setState({ visible: !this.state.visible });
  };

  closeMenu = () => {
    if (this.state.width < 768) this.setState({ visible: false });
  };

  render() {
    const { visible, width } = this.state;
    return (
      <div>
        <Menu inverted stackable>
          <Menu.Menu position="left">
            <Menu.Item icon header className="headerImage">
              <HeaderLink to="/" onClick={this.closeMenu}>
                <Flip top duration={1000} delay={2000}>
                  <img alt="logo" src={Logo} />
                </Flip>
              </HeaderLink>
              <HeaderLink to="/" onClick={this.closeMenu}>
                <Flip top duration={1000} delay={2000}>
                  <p>DebMUN</p>
                </Flip>
              </HeaderLink>
              {width < 768 && (
                <div style={{ position: 'absolute', right: 0 }}>
                  <Flip top duration={1000} delay={2000}>
                    {!visible && (
                      <Button icon="bars" onClick={this.toggleMenu} />
                    )}
                    {/* {!visible && <Button content='Close' icon='close' labelPosition='left' onClick={this.toggleMenu}/>} */}
                  </Flip>
                </div>
              )}
            </Menu.Item>
          </Menu.Menu>
          {visible && (
            <Menu.Menu position="right">
              <Menu.Item>
                <Flip top duration={1000} delay={500}>
                  <Icon name="book" color="orange" size="large" />
                </Flip>
                <Dropdown text="About" pointing className="link item">
                  <Dropdown.Menu>
                    <Dropdown.Item
                      as={HeaderLink}
                      to="/about/mun"
                      onClick={this.closeMenu}
                    >
                      <Icon name="book" color="orange" size="large" />
                      What is MUN?
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item
                      as={HeaderLink}
                      to="/about/debmun"
                      onClick={this.closeMenu}
                    >
                      <Icon name="book" color="yellow" size="large" />
                      What is DEBMUN?
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item
                      as={HeaderLink}
                      to="/about/team"
                      onClick={this.closeMenu}
                    >
                      <Icon name="users" color="olive" size="large" />
                      Meet the Team
                    </Dropdown.Item>
                    {/* <Dropdown.Divider /> */}
                    {/* <Dropdown.Item as={HeaderLink} to={'/about/unideb'} onClick={this.closeMenu}> */}
                    {/* <Icon name='university' color={'green'} size={'large'}/> */}
                    {/* The University of Debrecen */}
                    {/* </Dropdown.Item> */}
                    {/* <Dropdown.Divider /> */}
                    {/* <Dropdown.Item as={HeaderLink} to={'/about/debrecen'} onClick={this.closeMenu}> */}
                    {/* <Icon name='map' color={'teal'} size={'large'}/> */}
                    {/* Debrecen */}
                    {/* </Dropdown.Item> */}
                  </Dropdown.Menu>
                </Dropdown>
              </Menu.Item>
              <Menu.Item
                as={HeaderLink}
                to="/committee"
                onClick={this.closeMenu}
              >
                <Flip top duration={1000} delay={1000}>
                  <Icon name="file" color="yellow" size="large" />
                  Committees
                </Flip>
              </Menu.Item>
              <Menu.Item>
                <Flip top duration={1000} delay={1500}>
                  <Icon name="users" color="green" size="large" />
                </Flip>
                <Dropdown
                  text="Partners & Sponsors"
                  pointing
                  className="link item"
                >
                  <Dropdown.Menu>
                    <Dropdown.Item
                      as={HeaderLink}
                      to="/partners"
                      onClick={this.closeMenu}
                    >
                      <Icon name="handshake" color="red" size="large" />
                      Partners
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item
                      as={HeaderLink}
                      to="/sponsors"
                      onClick={this.closeMenu}
                    >
                      <Icon
                        name="money bill alternate"
                        color="green"
                        size="large"
                      />
                      Sponsors
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Menu.Item>
              <Menu.Item>
                <Flip top duration={1000} delay={2000}>
                  <Icon name="map signs" color="teal" size="large" />
                </Flip>
                <Dropdown text="Guides" className="link item">
                  <Dropdown.Menu>
                    <Dropdown.Item
                      as={HeaderLink}
                      to="/transport"
                      onClick={this.closeMenu}
                    >
                      <Icon name="car" color="blue" size="large" />
                      Getting Around in Debrecen
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item
                      as={HeaderLink}
                      to="/accommodation"
                      onClick={this.closeMenu}
                    >
                      <Icon name="home" color="red" size="large" />
                      Accommodation
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item onClick={this.closeMenu}>
                      <a
                        href={delegate}
                        target="_blank"
                        style={{ color: '#000' }}
                      >
                        <Icon name="briefcase" color="red" size="large" />
                        Delegate Kit
                      </a>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Menu.Item>
              <Menu.Item>
                <Flip top duration={1000} delay={2500}>
                  <Icon name="paper plane" color="blue" size="large" />
                </Flip>
                <Dropdown text="Apply Now" pointing className="link item">
                  <Dropdown.Menu>
                    <Dropdown.Item
                      as={HeaderLink}
                      to="/chairs"
                      onClick={this.closeMenu}
                    >
                      <Icon name="wordpress forms" color="red" size="large" />
                      Chairs Application
                    </Dropdown.Item>
                    <Dropdown.Item
                      as={HeaderLink}
                      to="/delegates"
                      onClick={this.closeMenu}
                    >
                      <Icon name="wpforms" color="red" size="large" />
                      Delegate Application
                    </Dropdown.Item>
                    <Dropdown.Item
                      as={HeaderLink}
                      to="/faq"
                      onClick={this.closeMenu}
                    >
                      <Icon name="book" color="red" size="large" />
                      FAQs
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Menu.Item>
              <Menu.Item as={HeaderLink} to="/contact" onClick={this.closeMenu}>
                <Flip top duration={1000} delay={3000}>
                  <Icon name="phone" color="purple" size="large" />
                  Contact
                </Flip>
              </Menu.Item>
            </Menu.Menu>
          )}
        </Menu>

        {/* <NavBar> */}
        {/* <HeaderHeaderLink to="/"> */}
        {/* <FormattedMessage {...messages.home} /> */}
        {/* </HeaderHeaderLink> */}
        {/* <HeaderHeaderLink to="/features"> */}
        {/* <FormattedMessage {...messages.features} /> */}
        {/* </HeaderHeaderLink> */}
        {/* </NavBar> */}
      </div>
    );
  }
}

export default Header;
