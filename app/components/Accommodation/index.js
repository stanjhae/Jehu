/**
 *
 * Accommodation
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
import { Carousel } from 'react-responsive-carousel';

/* eslint-disable react/prefer-stateless-function */
class Accommodation extends React.PureComponent {
  render() {
    return (
      <div>
        <div className="ui vertically padded middle aligned stackable grid">
          <div className="row zeroPadding">
            <div className="column center aligned zeroPadding">
              {/* <Bounce top duration={2000}> */}
              <Carousel
                className="carouselAccom"
                interval={5000}
                infiniteLoop
                showThumbs={false}
                autoPlay
                emulateTouch
                stopOnHover={false}
                showStatus={false}
              >
                <div>
                  <img
                    alt="slide"
                    src="https://images.trvl-media.com/hotels/5000000/4990000/4982500/4982465/4982465_11_z.jpg"
                  />
                  <div className="debmunAnnounce">
                    <h1>HOTEL OBESTER</h1>
                  </div>
                </div>
                <div>
                  <img
                    alt="slide"
                    src="https://s-ec.bstatic.com/images/hotel/max1024x768/125/125410955.jpg"
                  />
                  <div className="debmunAnnounce">
                    <h1>VILLA HOTEL</h1>
                  </div>
                </div>
                <div>
                  <img
                    alt="slide"
                    src="https://s-ec.bstatic.com/images/hotel/max1024x768/833/83337133.jpg"
                  />
                  <div className="debmunAnnounce">
                    <h1>PLATAN HOTEL</h1>
                  </div>
                </div>
                <div>
                  <img
                    alt="slide"
                    src="http://debrecen.varosom.hu/upload_pic/big/14/111986140513102623_img_4575.jpg"
                  />
                  <div className="debmunAnnounce">
                    <h1>AUGUSZTA</h1>
                  </div>
                </div>
              </Carousel>
              {/* </Bounce> */}
            </div>
          </div>

          {/* <div className="row centered zeroPadding"> */}
          {/* <Bounce bottom duration={3000}> */}
          {/* <div className="ui column center aligned middle aligned fiftyHeight text container aboutMunText"> */}
          {/* <h1 className="ui horizontal divider header"> */}
          {/* <i className="home icon"> </i> */}
          {/* ACCOMMODATION IN DEBRECEN */}
          {/* </h1> */}
          {/* <p>Dear prospective delegates, honorable guests, It’s my pleasure and privilege to be the */}
          {/* first one who is introducing MUN experience to the University of Debrecen. My name is Dawood Khaled, the main Founder */}
          {/* & secretary General of Debrecen’s first Model United Nation. On behalf of the Secretariat, we are absolutely delighted */}
          {/* to invite you to participate in our event DEBMUN’1 as the first and the biggest event of its kind in the area, which */}
          {/* is to be held at The University of Debrecen at Mar/2019</p> */}
          {/* </div> */}
          {/* </Bounce> */}
          {/* </div> */}
        </div>
      </div>
    );
  }
}

Accommodation.propTypes = {};

export default Accommodation;
