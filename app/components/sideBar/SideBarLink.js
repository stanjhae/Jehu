import React from 'react';
import PropTypes from 'prop-types';
import './SideBar.css';
import leftAngleBracket from '../../images/leftAngleBracket.png';

const SideBarLink = props => {
  const { name, onClick } = props;
  return (
    <div onClick={onClick} className="sideBarNavigationNameAndIconDiv">
      <div className="caretIconDiv">
        <img alt="caretIcon" className="caretIcon" src={leftAngleBracket} />
      </div>

      <div className="navigationLinkNameDiv">
        <h3>{name}</h3>
      </div>
    </div>
  );
};

SideBarLink.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SideBarLink;
