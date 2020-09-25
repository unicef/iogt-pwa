import { h } from 'preact';
import { Router } from 'preact-router';
import Header from './header';
import Footer from './footer';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Profile from '../routes/profile';

const App = () => (
  <div id='app'>
    <div id='content-wrap'>
      <Header />
      <Router>
        <Home path='/' />
        <Profile path='/profile/' user='me' />
        <Profile path='/profile/:user' />
      </Router>

      <Footer />
    </div>
  </div>
);

export default App;
