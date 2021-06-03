import { FunctionalComponent, h, createContext } from 'preact';
import "preact/debug";
import Router, { Route } from 'preact-router';

import Home from '../routes/home';
import SignIn from '../routes/signin';
import Profile from '../routes/profile';
import Section from '../routes/sections';
import NotFoundPage from '../routes/notfound';

import Header from './header';
import Footer from './footer';
import SingleArticle from './single-article';


import { articlesInfo } from './articleInfoData'

let categories = [
  {
    topicTitle: 'Coronavirus (Covid-19)',
    color: '#E24256',
    subtopics: [
      { topicTitle: 'About Coronavirus', subtopics: [],  color: '#E24256' },
      { topicTitle: 'Student Toolkit', subtopics: [],  color: '#E24256' },
      { topicTitle: 'COVID-19 Parenting', subtopics: [],  color: '#E24256' },
      { topicTitle: 'Health Worker Resources', subtopics: [],  color: '#E24256' }
    ],
  },
  {
    topicTitle: 'Youth',
    color: '#1CABE2',
    subtopics: [
      { topicTitle: 'Internet Safety', subtopics: [], color: '#1CABE2' },
      { topicTitle: 'Career Advice', subtopics: [], color: '#1CABE2' },
      { topicTitle: "Girl's Zone", subtopics: [], color: '#1CABE2' },
      { topicTitle: 'Freedom for Girls', subtopics: [], color: '#1CABE2' },
      { topicTitle: 'HIV / AIDS and Safe Sex', subtopics: [], color: '#1CABE2' },
      { topicTitle: 'The Future is Yours!', subtopics: [], color: '#1CABE2' },
      { topicTitle: 'Act for Climate', subtopics: [], color: '#1CABE2' },
      { topicTitle: 'End Violent', subtopics: [], color: '#1CABE2' },
      { topicTitle: 'U-Report', subtopics: [], color: '#1CABE2' },
      { topicTitle: 'Sustainable Goals - Practical Guide', subtopics: [], color: '#1CABE2' },
      { topicTitle: 'Your Rights', subtopics: [], color: '#1CABE2' }
    ],
  },
  {
    topicTitle: 'Parents & Caregivers',
    color: '#6EC17F',
    subtopics: [
      { topicTitle: 'Vaccines', subtopics: [], color: '#6EC17F' },
      { topicTitle: 'Pre-School Years', subtopics: [], color: '#6EC17F' },
      { topicTitle: 'Nutrition and Breastfeeding', subtopics: [], color: '#6EC17F' },
      { topicTitle: 'Early Life Tips!', subtopics: [], color: '#6EC17F' },
      { topicTitle: 'Facts for Life', subtopics: [], color: '#6EC17F' },
    ],
  },
];

// Create Context so common variables are accessible in different components without having to prop drill and in cases where user accesses an component via a route

export const CurrentLanugage = createContext('English');

export const Categories = createContext(categories)

export const ArticleInfo = createContext(articlesInfo)


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

  return (
    <Categories.Provider value={categories}>
      <ArticleInfo.Provider value={articlesInfo}>
        <div id='app'>
          <link
            href='https://fonts.googleapis.com/icon?family=Material+Icons'
            rel='stylesheet'
          />
          <div id='content-wrap'>
            <Header currentLanguage={currentLanguage} languageList={languageList} categories={categories} signedInStatus={signedInStatus} />
            <Router>
              <Route path='/' component={Home} />
              <Route path='/account/:option' component={SignIn} />
              <Route path='/profile/' component={Profile} user='me' />
              <Route path='/profile/:user' component={Profile} />
              <Route path='/section/' component={Section} />
              <Route path='/section/:section' component={Section} />
              <Route path='/section/:section/:topic' component={Section} />
              <Route path='/section/:section/:topic/:articleTitle/:articleId' component={SingleArticle} />
              <NotFoundPage default />
            </Router>
            <Footer categories={categories} />
          </div>
        </div>
      </ArticleInfo.Provider>
    </Categories.Provider>
  );
};

export default App;
