/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'components/Home/Loadable';
import WhoAreWePage from 'components/whoAreWe/Loadable';
import StartUpPage from 'components/StartUps/Loadable';
import BizConsulting from 'components/BizConsulting/Loadable';
import Translation from 'components/Translation/Loadable';
import ITDEV from 'components/ITDEV/Loadable';
import ITCons from 'components/ITConsulting/Loadable';
import Engineering from 'components/Engineering/Loadable';
import Gallery from 'components/Gallery/Loadable';
import TeamPage from 'components/Team/Loadable';
import Process from 'components/Process/Loadable';
import FAQ from 'components/Faq/Loadable';
import Contact from 'components/Contact/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Footer from 'components/Footer';

import 'semantic-ui-css/semantic.min.css';
import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div``;

export default function App() {
  return (
    <AppWrapper>
      <Helmet titleTemplate="JEHU - %s" defaultTitle="JEHU">
        <meta name="description" content="Junior Enterprise Hungary" />
      </Helmet>
      {/*<Header />*/}
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about/who" component={WhoAreWePage} />
        <Route exact path="/about/team" component={TeamPage} />
        <Route exact path="/process" component={Process} />
        <Route exact path="/startups" component={StartUpPage} />
        <Route exact path="/businessConsulting" component={BizConsulting} />
        <Route exact path="/translation" component={Translation} />
        <Route exact path="/itDev" component={ITDEV} />
        <Route exact path="/itCons" component={ITCons} />
        <Route exact path="/engineering" component={Engineering} />
        <Route exact path="/gallery" component={Gallery} />
        <Route exact path="/faq" component={FAQ} />
        <Route exact path="/contact" component={Contact} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      <Footer />
      <GlobalStyle />
    </AppWrapper>
  );
}
