/**
 *
 * Contact
 *
 */

import React from 'react';
import Header from 'components/Header';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
import Fade from 'react-reveal/Fade';
import { Helmet } from 'react-helmet';

/* eslint-disable react/prefer-stateless-function */
class Contact extends React.PureComponent {
  render() {
    return (
      <div className="App">
        <Helmet>
          <title>Start Ups</title>
          <meta name="description" content="Start Ups" />
        </Helmet>
        <div className="ui two equal width vertically padded middle aligned stackable grid">
          <div className="row">
            <div className="left floated column">
              <Header />
            </div>
          </div>
          <div className="row">
            <div className="left floated column">
              <h2 style={{ color: '#000' }}>Email: info@jehu.com</h2>
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSeYneRCULQpqEbzue7JkQLMokTw_DN3UnWjVCQDpnLsk_KmYA/viewform?embedded=true"
                width="640"
                height="650"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                title="contact"
              >
                Loading...
              </iframe>
            </div>
          </div>
          {/* <div className="row"> */}
          {/* <div className="ui divided two equal width vertically padded middle aligned stackable grid contact overlay"> */}
          {/* <div className="row"> */}
          {/* <div className="column middle aligned center aligned padded"> */}
          {/* <h2 className="ui horizontal divider header white"> */}
          {/* <i className="paper plane icon"> </i> */}
          {/* FOLLOW US */}
          {/* </h2> */}
          {/* /!* <a *!/ */}
          {/* /!* href="https://www.facebook.com/Debrecenmun/?ref=br_rs" *!/ */}
          {/* /!* target="_blank" *!/ */}
          {/* /!* > *!/ */}
          {/* /!* <button *!/ */}
          {/* /!* type="button" *!/ */}
          {/* /!* className="ui circular facebook icon button" *!/ */}
          {/* /!* > *!/ */}
          {/* /!* <i className="facebook f big icon"> </i> *!/ */}
          {/* /!* </button> *!/ */}
          {/* /!* </a> *!/ */}
          {/* /!* <a *!/ */}
          {/* /!* href="https://www.instagram.com/deb.mun/" *!/ */}
          {/* /!* target="_blank" *!/ */}
          {/* /!* > *!/ */}
          {/* /!* <button *!/ */}
          {/* /!* type="button" *!/ */}
          {/* /!* className="ui circular instagram red icon button" *!/ */}
          {/* /!* > *!/ */}
          {/* /!* <i className="instagram big icon"> </i> *!/ */}
          {/* /!* </button> *!/ */}
          {/* /!* </a> *!/ */}
          {/* <h3> */}
          {/* Email: <a href="mailto:info@debmun.com">info@jehu.com</a> */}
          {/* </h3> */}
          {/* </div> */}
          {/* <div className="column center aligned"> */}
          {/* <div */}
          {/* style={{ */}
          {/* position: 'relative', */}
          {/* overflow: 'hidden', */}
          {/* height: 650, */}
          {/* }} */}
          {/* > */}
          {/* <iframe */}
          {/* src="https://docs.google.com/forms/d/e/1FAIpQLSeYneRCULQpqEbzue7JkQLMokTw_DN3UnWjVCQDpnLsk_KmYA/viewform?embedded=true" */}
          {/* width="640" */}
          {/* height="650" */}
          {/* frameBorder="0" */}
          {/* marginHeight="0" */}
          {/* marginWidth="0" */}
          {/* title="contact" */}
          {/* > */}
          {/* Loading... */}
          {/* </iframe> */}
          {/* </div> */}
          {/* </div> */}
          {/* </div> */}
          {/* </div> */}
          {/* </div> */}
        </div>
      </div>
    );
  }
}

Contact.propTypes = {};

export default Contact;
