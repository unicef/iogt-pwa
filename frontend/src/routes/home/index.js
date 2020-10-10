import { h } from 'preact';
import ArticlesView from '../../components/articles/articlesView';
import style from './style.css';

const Home = () => (
  <div class={style.home}>
    <ArticlesView />
  </div>
);

export default Home;
