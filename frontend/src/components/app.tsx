import { FunctionalComponent, h, createContext } from 'preact';
import Router, { Route } from 'preact-router';

import Home from '../routes/home';
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
        subtopics: [
            {topicTitle: 'About Coronavirus', subtopics: []},
            {topicTitle: 'Student Toolkit', subtopics: []},
            {topicTitle: 'COVID-19 Parenting', subtopics: []},
            {topicTitle: 'Health Worker Resources', subtopics: []}
        ],
    },
    {
        topicTitle: 'Youth',
        subtopics: [
            {topicTitle: 'Internet Safety', subtopics: []},
            {topicTitle: 'Career Advice', subtopics: []},
            {topicTitle: "Girl's Zone", subtopics: []},
            {topicTitle: 'Freedom for Girls', subtopics: []},
            {topicTitle: 'HIV / AIDS and Safe Sex', subtopics: []},
            {topicTitle: 'The Future is Yours!', subtopics: []},
            {topicTitle: 'Act for Climate', subtopics: []},
            {topicTitle: 'End Violent', subtopics: []},
            {topicTitle: 'U-Report', subtopics: []},
            {topicTitle: 'Sustainable Goals - Practical Guide', subtopics: []},
            {topicTitle: 'Your Rights', subtopics: []}
        ],
    },
    {
        topicTitle: 'Parents & Caregivers',
        subtopics: [
            {topicTitle: 'Vaccines', subtopics: []},
            {topicTitle: 'Pre-School Years', subtopics: []},
            {topicTitle: 'Nutrition and Breastfeeding', subtopics: []},
            {topicTitle: 'Early Life Tips!', subtopics: []},
            {topicTitle: 'Facts for Life', subtopics: []},
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
