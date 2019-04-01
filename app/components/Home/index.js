/**
 *
 * Home
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { Carousel } from 'react-responsive-carousel';
import Countdown from 'react-countdown-now';
import Fade from 'react-reveal/Fade';

import Slide1 from './conference.jpg';
import Slide2 from './citycentre.jpg';
import Slide3 from './slider1.jpg';
import SG from './sg.jpg';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
class Home extends React.PureComponent {
  render() {
    return (
      <div className="App">
        <Carousel
          className="carouselHome"
          interval={5000}
          infiniteLoop
          showThumbs={false}
          autoPlay
          emulateTouch
          stopOnHover={false}
          showStatus={false}
        >
          <div>
            <div top duration={1000}>
              {/* <img src={"/assets/images/conference.small.jpg"} srcSet={`/assets/images/conference.jpg 300w, /assets/images/conference.jpg 768w, /assets/images/conference.jpg 1280w`} /> */}
              <img alt="slide" src={Slide3} />
            </div>
          </div>
          <div>
            <img alt="slide" src={Slide1} />
            <div className="debmunAnnounce">
              <div right duration={1000}>
                <h1>DEBRECEN MODEL UNITED NATIONS 2019</h1>
                <br />
              </div>
              <div left duration={2000} delay={500}>
                <h1>26 - 28 April 2019</h1>
                <br />
              </div>
              <div left duration={2000} delay={500}>
                <h1>GRAND HOTEL ARANYBIKA</h1>
                <br />
              </div>
              <div right duration={2000} delay={1000}>
                <br />
              </div>
              <div bottom delay={3000}>
                <button type="button" className="ui big blue button">
                  <a
                    href="https://www.facebook.com/events/272327660140239/"
                    style={{ color: '#fff' }}
                    target="_blank"
                  >
                    Discover DebMUN 2019
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div>
            <img alt="slide" src={Slide2} />
            <div className="debmunAnnounce">
              <div right duration={1000}>
                <h1>DEBRECEN MODEL UNITED NATIONS 2019</h1>
                <br />
              </div>
              <div left duration={2000} delay={500}>
                <h1>26 - 28 April 2019</h1>
                <br />
              </div>
              <div left duration={2000} delay={500}>
                <h1>GRAND HOTEL ARANYBIKA</h1>
                <br />
              </div>
              <div right duration={2000} delay={1000}>
                <br />
              </div>
              <div bottom delay={3000}>
                <button type="button" className="ui big blue button">
                  <a
                    href="https://www.facebook.com/events/272327660140239/"
                    style={{ color: '#fff' }}
                    target="_blank"
                  >
                    Discover DebMUN 2019
                  </a>
                </button>
              </div>
            </div>
          </div>
        </Carousel>
        <div className="ui equal width middle aligned vertically padded grid timer">
          <div className="column">
            <Fade left delay={1000}>
              <p>DebMUN 2019 starts in </p>
            </Fade>
          </div>
          <div className="column">
            <Fade right delay={1000}>
              <p>
                <Countdown date={new Date('2019/4/26')} />
              </p>
            </Fade>
          </div>
        </div>
        <div className="ui vertically padded stackable grid container secLetter">
          <div className="row">
            <div className="five wide column center aligned">
              <div bottom delay={1000}>
                <img
                  className="ui centered image"
                  src={SG}
                  alt="Secretary General"
                />
              </div>
            </div>
            <div className="ui eleven wide column center aligned letter">
              <div top delay={1000}>
                <h1
                  className="ui horizontal divider header"
                  style={{ fontSize: 20 }}
                >
                  SECRETARY GENERAL LETTER
                </h1>
                <br />
              </div>
              <div right delay={1000}>
                <p>
                  Dear prospective delegates, honorable guests, it is my
                  pleasure and privilege to be the first one to introduce the
                  MUN experience to the University of Debrecen. My name is
                  Dawood Khaled, the main Founder & secretary General of
                  Debrecen’s first Model United Nations. On behalf of the
                  Secretariat, we are absolutely delighted to invite you to
                  participate in our event, DEBMUN’1, as the first and the
                  biggest event of its kind in the area, which is to be held at
                  The University of Debrecen in Mar/2019. Our team is working
                  hard to make sure that DEBMUN’1 will be an enriching and
                  rewarding MUN experience.
                </p>
                <br />
              </div>

              <div right delay={1000}>
                <p>
                  Starting from the opening ceremony, we will pass through the
                  sessions, resolutions and closing ceremony ending with an
                  after party to make it memorable to each one of you. In 1949,
                  at St.Lawrence university in New York, the first MUN was
                  initiated by Dr. Harry Reiff. Since that moment, MUN has
                  always been one of the most innovative and life changing
                  platforms for youths to express their opinions about the
                  political affairs that they are passionate about.
                </p>
                <br />
              </div>

              <div right delay={1000}>
                <p>
                  The MUN aims to prepare, promote and portray the protocols of
                  the UN main bodies and subsidiary organs in a world class
                  simulation. These include the Human Rights Council,
                  International Court of Justice, World Health Organization
                  etc., and for the first time ever we are introducing the
                  Hungarian National assembly (Hungarian parliament :
                  Országgyűlé). Our criteria in choosing the committees was to
                  pick those which fit all delegates levels (beginner,
                  intermediate and advanced) and while choosing the topics we
                  tried our best to select them in a way that makes it possible
                  to cover all the hot spots around the world without focusing
                  on one region.
                </p>
                <br />
              </div>

              <div right delay={1000}>
                <p>
                  In this event, we seek to depict and legislate processes of
                  the UN whilst dealing with the pressing issues of our time and
                  one of our main objectives is the encouragement of the
                  international dialogue that could facilitate delegates’
                  communication development procedure by offering them the venue
                  to unleash their debating skills. Each year we will work hard
                  to enlarge our participation in the MUN community by
                  increasing the number of delegates and number of the
                  committees to make this platform one of greatest if its kind
                  by young people for young people. We look forward to welcoming
                  you and providing a stellar MUN experience. Thank you.
                </p>
                <br />
              </div>

              <div right delay={1000}>
                <p>Dawood Khaled</p>
                <br />

                <p>Main founder & Secretary general</p>
                <br />

                <p>Debrecen Model United Nation 2019</p>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Home.propTypes = {};

export default Home;
