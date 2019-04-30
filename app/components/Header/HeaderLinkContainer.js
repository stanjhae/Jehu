import React from 'react';
import './Header.css';
import HeaderLink from './HeaderLink';

const HeaderLinkContainer = props => {
  const { children, name } = props;
  return (
    <div className="ui compact menu navigationLink">
      <div className="ui simple dropdown item ">
        {name}
        <i className="dropdown icon" />
        <div className="menu">
          {children}
        </div>
      </div>
    </div>
  );
};

export const HeaderSubLink = props => {
  const { linkTo, name } = props;
  return (
    <HeaderLink to={linkTo}>
      <div className="item">{name}</div>
    </HeaderLink>
  );
};

export default HeaderLinkContainer;
