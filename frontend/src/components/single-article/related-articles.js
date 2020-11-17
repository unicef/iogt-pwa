import { h } from 'preact'
import { Link } from 'preact-router/match'
// import { Layout, Section } from "preact-layout";
import style from './style.css'
import { articleInfo } from './articleInfo'


const RelatedArticles = (props) => {
  let relatedArticles = props.relatedArticles;
  return (
    <div class={style['related-articles-section']}>
       <h1>Related Articles</h1>

       {relatedArticles.map(relatedArticle =>
          <div>
            <img class={style['related-article-img']} src={articleInfo[relatedArticle].img_src} />
            <h2>{articleInfo[relatedArticle].title}</h2>
          </div>
       )}

    </div>
  )
}

export default RelatedArticles
