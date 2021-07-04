import React, { useEffect, useState } from 'react';
import {Helmet} from "react-helmet";
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Info from './components/Info';
import Photos from './components/Photos';
import RSVP from './components/RSVP';
import Home from './components/Home';
import GuestList from './components/GuestList';
import ThankYou from './components/ThankYou';
import Sorry from './components/Sorry';
import Error from './components/AlreadySubmitted';
import Welcome from './components/Welcome';
import { BodyContainer, MainContainer } from './styles';

function App() {
  const [currentPage, setcurrentPage] = useState(window.location.hash);
  const [open, setOpen] = useState(false);
  const closeOnClick = () => {
    if (open) {
      setOpen(false)
    }
  }
  const isHomePage = (currentPage === '#/') || (currentPage === '/');;

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
          <MainContainer id="main-container" homePage={isHomePage} onClick={closeOnClick}>
            <Switch>
              <Route
                path="/guests"
                render={(props) => <GuestList {...props} open={open} setOpen={setOpen} /> }
              />
              <Route
                path="/info"
                render={(props) => <Info {...props} open={open} setOpen={setOpen} /> }
                key={window.location.pathname}
              />
              <Route
                path="/rsvp"
                render={(props) => <RSVP {...props} open={open} setOpen={setOpen} /> }
              />
              <Route
                path="/photos"
                render={(props) => <Photos {...props} open={open} setOpen={setOpen} /> }
              />
              <Route
                path="/invite-not-found"
                render={(props) => <Sorry {...props} open={open} setOpen={setOpen} /> }
              />
              <Route
                path="/thank-you"
                render={(props) => <ThankYou {...props} open={open} setOpen={setOpen} /> }
              />
              <Route
                path="/error"
                render={(props) => <Error {...props} open={open} setOpen={setOpen} /> }
              />
              <Route
                path="/home"
                exact
                render={(props) => <Welcome {...props} open={open} setOpen={setOpen} /> }
                key={window.location.pathname}
              />
              <Route
                path="/"
                exact
                render={(props) => <Home {...props} open={open} setOpen={setOpen} /> }
                key={window.location.pathname}
              />
            </Switch>
            <div id="photocredit">photos by <a href="https://www.kaoverii.com/" rel="noopener noreferrer" target="_blank">Kaoverii Silva</a></div>
          </MainContainer>
        </BodyContainer>
      </Router>
    </>

  );
}

export default App;
