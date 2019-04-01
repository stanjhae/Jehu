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
import AboutMUNPage from 'components/AboutMun/Loadable';
import AboutDebmunPage from 'components/AboutDebmun/Loadable';
import TeamPage from 'components/Team/Loadable';
import Committee from 'components/Committee/Loadable';
import Sponsors from 'components/Sponsors/Loadable';
import Partners from 'components/Partners/Loadable';
import Transport from 'components/Transport/Loadable';
import Accommodation from 'components/Accommodation/Loadable';
import Chairs from 'components/Chairs/Loadable';
import Delegate from 'components/Delegates/Loadable';
import FAQ from 'components/Faq/Loadable';
import Contact from 'components/Contact/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';

import 'semantic-ui-css/semantic.min.css';
import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div``;

export default function App() {
  return (
    <AppWrapper>
      <Helmet titleTemplate="%s - DebMUN" defaultTitle="DebMUN">
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about/mun" component={AboutMUNPage} />
        <Route exact path="/about/debmun" component={AboutDebmunPage} />
        <Route exact path="/about/team" component={TeamPage} />
        <Route exact path="/committee" component={Committee} />
        <Route exact path="/partners" component={Partners} />
        <Route exact path="/sponsors" component={Sponsors} />
        <Route exact path="/transport" component={Transport} />
        <Route exact path="/accommodation" component={Accommodation} />
        <Route exact path="/chairs" component={Chairs} />
        <Route exact path="/delegates" component={Delegate} />
        <Route exact path="/faq" component={FAQ} />
        <Route exact path="/contact" component={Contact} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      <Footer />
      <GlobalStyle />
    </AppWrapper>
  );
}
