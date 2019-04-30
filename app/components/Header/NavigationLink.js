import React from 'react';
import PropTypes from 'prop-types';
import dropDownIcon from '../../images/icons8-sort-down-filled-50.png';

const NavigationLink = props => {
  const { name, backgroundColor, contact } = props;
  return (
    <div style={{ backgroundColor }} className="navigationLink">
      <div className="navigationLinkName">
        <h5>{name}</h5>
      </div>
      {!contact && (
        <div className="navigationLinkIcon">
          <img alt="dropDownIcon" className="dropDownIcon" src={dropDownIcon} />
        </div>
      )}
    </div>
  );
};

NavigationLink.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  contact: PropTypes.bool,
  name: PropTypes.string.isRequired,
};

export default NavigationLink;
