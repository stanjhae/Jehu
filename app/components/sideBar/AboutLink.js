import React from 'react';
import PropTypes from 'prop-types';
import './SideBar.css';
import SideBarLink from './SideBarLink';
import SideBarSubLink from './SideBarSubLink';

class AboutLink extends React.Component {
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
        <SideBarLink onClick={() => this.toggleSubs()} name="About" />

        {showSubs && (
          <div onClick={onClickSubLink} className="navigationSubLinks">
           <SideBarSubLink linkTo={'/about/who'} text={'Who are we?'}/>
          </div>
        )}
      </>
    );
  }
}

AboutLink.propTypes = {
  onClickSubLink: PropTypes.func.isRequired,
};

export default AboutLink;
