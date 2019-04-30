import React from 'react';
import PropTypes from 'prop-types';
import './SideBar.css';
import closeIcon from '../../images/closeButton.png';

const SideBarWrapper = props => {
  const { sideBarIsShowing, closeMenu, children } = props;

  let drawerClasses = 'sideBar';

  if (sideBarIsShowing) {
    drawerClasses = 'sideBar showing';
  }

  return (
    <div className={drawerClasses}>
      <div onClick={closeMenu} className="closeButtonDiv">
        <img alt="closeIcon" className="closeIcon" src={closeIcon} />
      </div>
      {children}
    </div>
  );
};

SideBarWrapper.propTypes = {
  closeMenu: PropTypes.func.isRequired,
  sideBarIsShowing: PropTypes.bool.isRequired,
};

export default SideBarWrapper;
