import React from 'react';
import './BackDrop.css';
import PropTypes from 'prop-types';

const Backdrop = props => {
  const { handleBackdropPress } = props;
  return <div onClick={handleBackdropPress} className="backdrop" />;
};

Backdrop.propTypes = {
  handleBackdropPress: PropTypes.func.isRequired,
};

export default Backdrop;
