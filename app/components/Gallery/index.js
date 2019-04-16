/**
 *
 * Gallery
 *
 */

import React from 'react';
import MagicGrid from 'magic-grid-react';
import Header from 'components/Header';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
import './index.css';
import dkvBus from './dkvbus.jpg';
import dkvBus2 from './dkvbuss.jpg';
import dkvTram from './dkvtram.jpg';
import dkvTrolley from './dkvtrolley.jpg';

/* eslint-disable react/prefer-stateless-function */
class Gallery extends React.PureComponent {
  images = [
    {
      id: 1,
      image: dkvBus,
    },
    {
      id: 2,
      image: dkvBus2,
    },
    {
      id: 3,
      image: dkvTram,
    },
    {
      id: 4,
      image: dkvTrolley,
    },
  ];

  render() {
    return (
      <div className="App">
        <div className="ui center aligned grid process process1">
          <div className="row">
            <div className="left floated column">
              <Header />
            </div>
          </div>
          <div className="row">
            <div className="column galleryText">
              <h1>GALLERY</h1>
            </div>
          </div>
        </div>
        {/*<div className="ui middle aligned two column centered grid">*/}
          {/*<div className="row">*/}
            {/*<MagicGrid static animate gutter={5} items={30}>*/}
              {/*{this.images.map(image => (*/}
                {/*<div className="column">*/}
                  {/*<div className="image-hover img-shadow-1">*/}
                    {/*<img*/}
                      {/*key={image.id}*/}
                      {/*src={image.image}*/}
                      {/*alt="animal"*/}
                      {/*width={300}*/}
                    {/*/>*/}
                  {/*</div>*/}
                {/*</div>*/}
              {/*))}*/}
            {/*</MagicGrid>*/}
          {/*</div>*/}
        {/*</div>*/}
      </div>
    );
  }
}

Gallery.propTypes = {};

export default Gallery;
