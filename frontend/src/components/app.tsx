import "preact/debug";
import { FunctionalComponent, h } from 'preact';
import Router, { Route } from 'preact-router';

import Home from '../routes/home';
import SignIn from '../routes/signin';
import Profile from '../routes/profile';
import Section from '../routes/sections';
import NotFoundPage from '../routes/notfound';

import Header from './header';
import Footer from './footer';
import SingleArticle from './single-article';

const App: FunctionalComponent = () => {
  let signedInStatus = false;
  // Placeholder values used for now
  // TODO: To be replaced by values pulled from backend

  let currentLanguage = 'English';

  let languageList = [
    'English',
    'العربيّة',
    'FRANÇAIS',
    'ESPAÑOL',
    'PORTUGUÊS',
    'РУССКИЙ',
  ];

  let categories = [
    {
      topicTitle: 'Coronavirus (Covid-19)',
      topicList: [
        'About Coronavirus',
        'Student Toolkit',
        'COVID-19 Parenting',
        'Health Worker Resources',
      ],
    },
    {
      topicTitle: 'Youth',
      topicList: [
        'Internet Safety',
        'Career Advice',
        "Girl's Zone",
        'Freedom for Girls',
        'HIV / AIDS and Safe Sex',
        'The Future is Yours!',
        'Act for Climate',
        'End Violent',
        'U-Report',
        'Sustainable Goals - Practical Guide',
        'Your Rights',
      ],
    },
    {
      topicTitle: 'Parents & Caregivers',
      topicList: [
        'Vaccines',
        'Pre-School Years',
        'Nutrition and Breastfeeding',
        'Early Life Tips!',
        'Facts for Life',
      ],
    },
  ];

  return (
    <div id='app'>
      <link
        href='https://fonts.googleapis.com/icon?family=Material+Icons'
        rel='stylesheet'
      />
      <div id='content-wrap'>
        <Header
          currentLanguage={currentLanguage}
          languageList={languageList}
          categories={categories}
          signedInStatus={signedInStatus}
        />
        <Router>
          <Route path='/' component={Home} />

          <Route path='/account/:option' component={SignIn} />
          <Route path='/profile/' component={Profile} user='me' />
          <Route path='/profile/:user' component={Profile} />
          <Route path='/section/' component={Section} />
          <Route path='/section/:section' component={Section} />
          <Route path='/section/:section/:topic' component={Section} />
          <Route
            path='/section/:section/:topic/:articleTitle/:articleId'
            component={SingleArticle}
          />

          <NotFoundPage default />
        </Router>
        <Footer />
      </div>
    </div>
  );
};

export default App;
