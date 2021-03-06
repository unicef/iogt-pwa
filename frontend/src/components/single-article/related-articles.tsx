import { FunctionalComponent, h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';



type RelatedArticlesProps = {
  relatedArticles?: number[]| null
  articleInfo: any []
}

interface Topic {
    topicTitle: string
    topicList: string[]
}

const RelatedArticles: FunctionalComponent<RelatedArticlesProps> = ({ relatedArticles, articleInfo}: RelatedArticlesProps) => {

    return (
      <div class={style['related-articles-section']}>
      <h1>Related Articles</h1>

      <div>
      {relatedArticles &&relatedArticles.map(relatedArticle =>
         <div>
           <Link href={`/section/${articleInfo[relatedArticle].tag.split(/\W/).join('-').toLowerCase()}/${articleInfo[relatedArticle].tag_meta.split(' ').join('-').toLowerCase()}/${articleInfo[relatedArticle].title.split(/\W/).join('-')}/${articleInfo[relatedArticle].id}`}>
           <img class={style['related-article-img']} src={articleInfo[relatedArticle].img_src} />
           <span>
             <Link class={style['related-articles-feature-tag']} style= {{color:  articleInfo[relatedArticle].tag.includes('CORONA') ? '#BF0012' : articleInfo[relatedArticle].tag.includes('YOUTH')? '#00A4CB': articleInfo[relatedArticle].tag.includes('PARENTS') ? '#48AB5D': 'black'}}>{articleInfo[relatedArticle].tag}</Link>
             <h2>{articleInfo[relatedArticle].title}</h2>
           </span>
           </Link>
         </div>
      )}
   </div>

   </div>
    );
};

export default RelatedArticles;
