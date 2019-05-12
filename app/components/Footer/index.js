import React from 'react';

function Footer() {
  return (
    <div
      style={{ bottom: 0, width: window.innerWidth }}
      className="ui divided two equal width vertically padded grid footer"
    >
      <div className="row">
        <div className="column center aligned">
          {/* <a */}
          {/* href="https://www.facebook.com/Debrecenmun/?ref=br_rs" */}
          {/* target="_blank" */}
          {/* > */}
          <button type="button" className="ui circular facebook icon button">
            <i className="facebook f icon"> </i>
          </button>
          {/* </a> */}
          {/* <a href="https://www.instagram.com/deb.mun/" target="_blank"> */}
          <button
            type="button"
            className="ui circular instagram red icon button"
          >
            <i className="instagram  icon"> </i>
          </button>
          {/* </a> */}
        </div>
        <div className="column middle aligned center aligned padded">
          <p style={{ textAlign: 'center' }}>JEHU 2019</p>
        </div>
        <div
          className="column center aligned middle aligned"
          style={{ overflow: 'hidden' }}
        >
          {/* <p style={{ textAlign: 'center' }}> */}
          {/* Email: <a href="mailto:info@debmun.com">info@debmun.com</a> */}
          {/* </p> */}
          <p style={{ textAlign: 'center' }}>
            Design by{' '}
            <a href="https://stanjhae.firebaseapp.com" target="_blank">
              Stanjhae
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
