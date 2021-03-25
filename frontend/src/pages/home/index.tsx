import React from 'react'
import { FunctionalComponent, render, h } from 'preact';
// import { render, h, cloneElement, Component } from '../../react-compat'

import ArticlesView from '../../components/articles/articlesView';
import * as style from './style.css';

const Home = () => {
  return (
    <div>
      <ArticlesView />
    </div>
  );
};

export default Home;
