import { FunctionalComponent, h } from 'preact';
import ArticleListing from '../../components/articles/articleListing';
import style from './style.css';

const Home: FunctionalComponent = () => {
  return (
    <div class={style.home}>
      <ArticleListing />
    </div>
  );
};

export default Home;
