import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollButton from './scrollToTop/ScrollToTop';

const Root = props => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
      {/*<ScrollButton scrollStepInPx="200" delayInMs="16.66" />*/}
      {/*<Footer />*/}
    </>
  );
};

export default Root;
