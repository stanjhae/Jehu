import React from 'react';
import PropTypes from 'prop-types';
import './SideBar.css';
import HeaderLink from '../Header/HeaderLink';

const SideBarSubLink = props => {
  const { linkTo, text } = props;
  return (
    <HeaderLink className="navigationSubLink" to={linkTo}>
      <p>{text}</p>
    </HeaderLink>
  );
};

SideBarSubLink.propTypes = {
  linkTo: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default SideBarSubLink;
