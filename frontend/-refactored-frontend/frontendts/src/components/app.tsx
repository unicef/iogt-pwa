import { FunctionalComponent, h } from 'preact';
import { Route, Router } from 'preact-router';

import Home from '../routes/home';
import Profile from '../routes/profile';
import NotFoundPage from '../routes/notfound';
import Header from './header';

import Section from '../routes/sections';

const App: FunctionalComponent = () => {
  return (
    <div id='app'>
      <link
        href='https://fonts.googleapis.com/icon?family=Material+Icons'
        rel='stylesheet'
      />
      <div id='content-wrap'>
        <Header />
        <Router>
          <Home path='/' />
          <Profile path='/profile/' user='me' />
          <Profile path='/profile/:user' />
          <Section path='/section/' />
          <Section path='/section/:section' />
          <Section path='/section/:section/:topic' />
          <NotFoundPage default />
        </Router>
      </div>
    </div>
  );
};

export default App;
