import { h } from 'preact';
import { Router } from 'preact-router';
import { createHashHistory } from 'history';
import Header from './header';
import Footer from './footer';
import SingleArticle from './single-article';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Profile from '../routes/profile';
import Section from '../routes/sections'

// history.replaceState(0,0,'/');

const App = () => (
  <div id='app'>
    <div id='content-wrap'>
      <Header />
      <Router history={createHashHistory()}>
        <Home path='/' />
        <Profile path='/profile/' user='me' />
        <Profile path='/profile/:user' />
        <Section path='/section/' />
        <Section path='/section/:section' />
        <Section path='/section/:section/:topic' />
        <SingleArticle path='/section/:section/:topic/:articleTitle/:articleId' />
      </Router>
      <Footer />
    </div>
  </div>
);

export default App;
