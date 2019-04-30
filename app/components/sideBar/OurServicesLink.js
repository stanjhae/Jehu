import React from 'react';
import PropTypes from 'prop-types';
import './SideBar.css';
import SideBarLink from './SideBarLink';
import SideBarSubLink from './SideBarSubLink';

class OurServicesLink extends React.Component {
  state = {
    showSubs: false,
  };

  toggleSubs = () => {
    this.setState({ showSubs: !this.state.showSubs });
  };

  render() {
    const { onClickSubLink } = this.props;
    const { showSubs } = this.state;
    return (
      <>
        <SideBarLink onClick={() => this.toggleSubs()} name="Our Services" />

        {showSubs && (
          <div onClick={onClickSubLink} className="navigationSubLinks">
            <SideBarSubLink linkTo="/process" text="JEHU Process" />
            <SideBarSubLink linkTo="/startups" text="Start-Ups" />
            <SideBarSubLink
              linkTo="/businessConsulting"
              text="Business Counselling"
            />
            <SideBarSubLink linkTo="/translation" text="Translation" />
            <SideBarSubLink linkTo="/itDev" text="IT Development" />
            <SideBarSubLink linkTo="/itCons" text="Consulting" />
            <SideBarSubLink linkTo="/engineering" text="Engineering" />
          </div>
        )}
      </>
    );
  }
}

OurServicesLink.propTypes = {
  onClickSubLink: PropTypes.func.isRequired,
};

export default OurServicesLink;
