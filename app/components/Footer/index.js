import React from 'react';
// import { FormattedMessage } from 'react-intl';
//
// import LocaleToggle from 'containers/LocaleToggle';
// import Wrapper from './Wrapper';
// import messages from './messages';

function Footer() {
  return (
    <div className="ui divided two equal width vertically padded grid footer">
      <div className="row">
        <div className="column center aligned">
          {/*<a*/}
            {/*href="https://www.facebook.com/Debrecenmun/?ref=br_rs"*/}
            {/*target="_blank"*/}
          {/*>*/}
            <button type="button" className="ui circular facebook icon button">
              <i className="facebook f big icon"> </i>
            </button>
          {/*</a>*/}
          {/*<a href="https://www.instagram.com/deb.mun/" target="_blank">*/}
            <button
              type="button"
              className="ui circular instagram red icon button"
            >
              <i className="instagram big icon"> </i>
            </button>
          {/*</a>*/}
        </div>
        <div className="column middle aligned center aligned padded">
          <p style={{ textAlign: 'center' }}>JEHU 2019</p>
        </div>
        <div
          className="column center aligned middle aligned"
          style={{ overflow: 'hidden' }}
        >
          {/*<p style={{ textAlign: 'center' }}>*/}
            {/*Email: <a href="mailto:info@debmun.com">info@debmun.com</a>*/}
          {/*</p>*/}
          <p style={{ textAlign: 'center' }}>
            Design by{' '}
            <a href="https://www.facebook.com/stanjhae" target="_blank">
              Stanjhae
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
