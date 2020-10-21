import { h } from 'preact';
import { Router } from 'preact-router';
import Header from './header';
import Footer from './footer';
import SingleArticle from './articles/single-article';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Profile from '../routes/profile';
import Section from '../routes/sections'


const App = () => (
  <div id='app'>
    <div id='content-wrap'>
      <Header />
      <Router>
        <Home path='/' />
        <Profile path='/profile/' user='me' />
        <Profile path='/profile/:user' />
        <Section path='/section/' />
        <Section path='/section/:section' />
        <Section path='/section/:section/:topic' />
        <Section path='/section/:section/:subtopic' />
        <SingleArticle path='/section/:section/:topic/:articleTitle' />
      </Router>
      <Footer />
    </div>
  </div>
);

export default App;
