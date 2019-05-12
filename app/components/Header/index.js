import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import menuButton from '../../images/menuButton.png';
import SideBar from '../sideBar/SideBar';
import Backdrop from '../backdrop/Backdrop';
import HeaderLinkContainer, { HeaderSubLink } from './HeaderLinkContainer';

class Header extends React.Component {
  state = {
    sideBarIsShowing: false,
  };

  toggleSideBar = () => {
    this.setState({ sideBarIsShowing: !this.state.sideBarIsShowing });
  };

  render() {
    const { sideBarIsShowing } = this.state;
    return (
      <>
        <header className="header">
          <Link className="headerNameDiv" to="/">
            <div>
              <p>JEHU</p>
            </div>
          </Link>

          <div className="navigationLinksContainer">
            <HeaderLinkContainer name="About">
              <HeaderSubLink linkTo="/about/who" name="Who are we?" />
            </HeaderLinkContainer>

            <HeaderLinkContainer name="Our Services">
              <HeaderSubLink linkTo="/process" name="JEHU Process" />
              <HeaderSubLink linkTo="/startups" name="Start-Ups" />
              <HeaderSubLink
                linkTo="/businessConsulting"
                name="Business Consulting"
              />
              <HeaderSubLink linkTo="/translation" name="Translation" />
              <HeaderSubLink linkTo="/itDev" name="IT Development" />
              <HeaderSubLink linkTo="/itCons" name="IT Consulting" />
              <HeaderSubLink linkTo="/engineering" name="Engineering" />
            </HeaderLinkContainer>

            <HeaderLinkContainer name="Contact">
              <HeaderSubLink linkTo="/contact" name="Contact Us" />
            </HeaderLinkContainer>
          </div>

          <div onClick={() => this.toggleSideBar()} className="menuButton">
            <img alt="menuIcon" src={menuButton} className="menuIcon" />
          </div>
        </header>

        <SideBar
          closeMenu={() => this.toggleSideBar()}
          sideBarIsShowing={sideBarIsShowing}
        />

        {sideBarIsShowing && (
          <Backdrop handleBackdropPress={() => this.toggleSideBar()} />
        )}
      </>
    );
  }
}

export default Header;
