import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';
import Article from './article';
import { articleInfo } from './articleInfo';
import PrimaryButton from '../buttons/primaryButton';

const ArticlesView = () => {
  const articlesList = articleInfo.map((article) => (
    <Article
      key={article.id}
      img_src={article.img_src}
      tag={article.tag}
      date={article.date}
      author={article.author}
      title={article.title}
      desc={article.desc}
    />
  ));

  return (
    <div class={style.articlesContainer}>
      <div class={style.grid}>{articlesList}</div>
      <PrimaryButton text='Load more' />
    </div>
  );
};

export default ArticlesView;
