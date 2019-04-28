import React from 'react';
// import { FormattedMessage } from 'react-intl';

import { Dropdown, Menu, Button } from 'semantic-ui-react';
import Flip from 'react-reveal/Flip';
import HeaderLink from './HeaderLink';
// import messages from './messages';
import './index.css';
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
    if (this.state.width < 770) this.setState({ visible: false });
  };

  render() {
    const { visible, width } = this.state;
    return (
      <div>
        <Menu className="header" stackable>
          <Menu.Menu position="left">
            <Menu.Item icon header className="headerImage logoLink">
              {/* <HeaderLink to="/" onClick={this.closeMenu}> */}
              {/* <img alt="logo" src={Logo} /> */}
              {/* </HeaderLink> */}
              <HeaderLink to="/" onClick={this.closeMenu}>
                <h3>JEHU</h3>
              </HeaderLink>
              {width < 770 && (
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
              <Menu.Item className="aboutLink">
                <Dropdown text="About" pointing className="link item">
                  <Dropdown.Menu>
                    <Dropdown.Item
                      as={HeaderLink}
                      to="/about/who"
                      onClick={this.closeMenu}
                    >
                      Who are we?
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Menu.Item>
              <Menu.Item className="serviceLink">
                <Dropdown text="Our Services" pointing className="link item">
                  <Dropdown.Menu>
                    <Dropdown.Item
                      as={HeaderLink}
                      to="/process"
                      onClick={this.closeMenu}
                    >
                      JEHU process
                    </Dropdown.Item>
                    <Dropdown.Item
                      as={HeaderLink}
                      to="/startups"
                      onClick={this.closeMenu}
                    >
                      Start Ups
                    </Dropdown.Item>
                    <Dropdown.Item
                      as={HeaderLink}
                      to="/businessConsulting"
                      onClick={this.closeMenu}
                      disabled
                    >
                      Business Consulting (Coming soon)
                    </Dropdown.Item>
                    <Dropdown.Item
                      as={HeaderLink}
                      to="/translation"
                      onClick={this.closeMenu}
                      disabled
                    >
                      Translation (Coming soon)
                    </Dropdown.Item>
                    <Dropdown.Item
                      as={HeaderLink}
                      to="/itDev"
                      onClick={this.closeMenu}
                      disabled
                    >
                      IT Development (Coming soon)
                    </Dropdown.Item>
                    <Dropdown.Item
                      as={HeaderLink}
                      to="/itCons"
                      onClick={this.closeMenu}
                      disabled
                    >
                      IT Consulting (Coming soon)
                    </Dropdown.Item>
                    <Dropdown.Item
                      as={HeaderLink}
                      to="/engineering"
                      onClick={this.closeMenu}
                      disabled
                    >
                      Engineering (Coming soon)
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Menu.Item>
              <Menu.Item
                as={HeaderLink}
                to="/contact"
                onClick={this.closeMenu}
                className="galleryLink"
              >
                Contact
              </Menu.Item>
              {/* <Menu.Item */}
              {/* as={HeaderLink} */}
              {/* to="/contact" */}
              {/* onClick={this.closeMenu} */}
              {/* className="contactLink" */}
              {/* > */}
              {/* Contact */}
              {/* </Menu.Item> */}
            </Menu.Menu>
          )}
        </Menu>
      </div>
    );
  }
}

export default Header;
