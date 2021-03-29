import React, { useEffect, useState } from 'react';
import {Helmet} from "react-helmet";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BridalParty from './components/BridalParty';
import Info from './components/Info';
import Photos from './components/Photos';
import RSVP from './components/RSVP';
import Home from './components/Home';
import GuestList from './components/GuestList';
import ThankYou from './components/ThankYou';
import Sorry from './components/Sorry';
import Error from './components/AlreadySubmitted';
import { BodyContainer, MainContainer } from './styles';

function App() {
  const [currentPage, setcurrentPage] = useState(window.location.pathname);
  const isHomePage = (currentPage === '/my-app/') || (currentPage === '/my-app');;
  useEffect(() => {
    setcurrentPage(window.location.pathname)
  }, [currentPage]);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Matthew & Elissa's Wedding</title>
      </Helmet>
      <Router>
        <BodyContainer id="body-container">
          <MainContainer id="main-container" homePage={isHomePage}>
            <Switch>
              {/* <Route path="/bridal-party" component={BridalParty} />
              <Route path="/guests" component={GuestList} /> */}
              <Route path="/my-app/info" component={Info} key={window.location.pathname} />
              <Route path="/my-app/rsvp" component={RSVP} />
              <Route path="/my-app/photos" component={Photos} />
              <Route path="/my-app/invite-not-found" component={Sorry} />
              <Route path="/my-app/thank-you" component={ThankYou} />
              <Route path="/my-app/error" component={Error} />
              <Route path="/" exact component={Home} key={window.location.pathname} />
            </Switch>
          </MainContainer>
        </BodyContainer>
      </Router>
    </>

  );
}

export default App;
