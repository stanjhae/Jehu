import React from 'react';
import PropTypes from 'prop-types';
import './SideBar.css';
import AboutLink from './AboutLink';
import SideBarWrapper from './SideBarWrapper';
import OurServicesLink from './OurServicesLink';
import ContactLink from './ContactLink';

const SideBar = props => {
  const { sideBarIsShowing, closeMenu } = props;

  return (
    <SideBarWrapper closeMenu={closeMenu} sideBarIsShowing={sideBarIsShowing}>
      <AboutLink onClickSubLink={closeMenu} />
      <OurServicesLink onClickSubLink={closeMenu} />
      <ContactLink onClickSubLink={closeMenu} />
    </SideBarWrapper>
  );
};

SideBar.propTypes = {
  closeMenu: PropTypes.func.isRequired,
  sideBarIsShowing: PropTypes.bool.isRequired,
};

export default SideBar;
