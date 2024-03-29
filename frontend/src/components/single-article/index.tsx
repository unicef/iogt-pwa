import { FunctionalComponent, h } from 'preact';
import { useEffect, useState } from 'preact/hooks'
import { route } from 'preact-router'
import { Link } from 'preact-router/match';


import style from './style.css'

import { articlesInfo } from '../articleInfoData'
import { Article, Comment } from '../../types'
import ShareSaveButtons from './share-save-buttons'
import CommentsSection from './comments-section'
import RelatedArticles from './related-articles'
import Survey from './survey'
//'/section/:section/:topic/:articleTitle/:articleId


type SingleArticleProps = {
  // from URL
  section: string
  topic: string
  articleTitle: string
  articleId: string

  // from props passed down by Parent
  //articleInfo: Article[] // Will need to update type for this when we find out official format of data
  signedInStatus: boolean
}



const SingleArticle: FunctionalComponent<SingleArticleProps> = ({ section, topic, articleTitle, articleId, signedInStatus }: SingleArticleProps) => {

  let articleInfo: Article[] = articlesInfo;
  const [myTag, setMyTag] = useState('')
  let currentArticle = articleInfo[Number(articleId)]

  useEffect(() => {
    if (currentArticle.tag.includes('CORONA')) {
      setMyTag('emergency')
    } else if (currentArticle.tag.includes('YOUTH')) {
      setMyTag('youth')
    } else if (currentArticle.tag.includes('PARENTS')) {
      setMyTag('parents')
    } else {
      setMyTag('default')
    }
  })

  let colorTheme = myTag === 'emergency' ? '#BF0012'
    : myTag === 'youth' ? '#00A4CB'
      : myTag === 'parents' ? '#48AB5D'
        : 'black';


  return (
    <div class={style['single-article']}>

      {/* Breadcrumb from Feature Phone */}
      <div class={style.breadcrumb}>
        <Link href='/'>HOME</Link> {' > '}
        <Link href={`/section/${section}`}>
          {section.split('-').join(' ').toUpperCase()}
        </Link>
        {' > '}
        <Link href={`/section/${section}/${topic}`}>
          {topic.split('-').join(' ').toUpperCase()}
        </Link>
        {' > '}
        <Link href={`section/${section}/${topic}/${articleTitle}`}>
          {' '}
          {currentArticle.title.toUpperCase()}
        </Link>
      </div>

      {/* Banner for Mobile Phones */}
      <div class={style['mobile-banner']}>
        <span>
          <Link href='/'>{' < '}</Link>
          <Link href={`/section/${section}`}>
            {section.split('-').join(' ').toUpperCase()}
          </Link>
          {': '}
          {/* <Link href={`/section/${section}/${topic}`}>{topic.split('-').join(' ').toUpperCase()}</Link>{' > '} */}
          <Link href={`section/${section}/${topic}/${articleTitle}`}>
            {' '}
            {currentArticle.title.toUpperCase()}
          </Link>
        </span>
      </div>

      {/* The Main Article Content */}
      <section class={style['article-content']}>
        <img class={style['main-image-phone']} src={currentArticle.img_src} />

        <div class={style['tag-section']}>
          <Link
            class={style.tag}
            style={{ color: colorTheme, borderBottom: `1px solid ${colorTheme}` }}
            href={`/section/${currentArticle.tag}`}
          >
            {currentArticle.tag}
          </Link>
          <Link
            class={style.tag_meta}
            style={{ color: colorTheme, borderBottom: `1px solid ${colorTheme}` }}
            href={`/section/${currentArticle.tag}/${currentArticle.tag_meta}`}
          >
            &nbsp;{`|`}&nbsp;
            {currentArticle.tag_meta}
          </Link>

          <img
            class={style['forward-button']}
            src='../../assets/icons/nav-icons/forward-green.png'
          />
        </div>

        <h1>{currentArticle.title}</h1>


        <img class={style['main-image-tablet-desktop']} src={currentArticle.img_src} />

        <hr class={style['horizontal-line-desktop']} style={{ border: `1px solid ${colorTheme}` }} />


        {/* Desktop content is sectioned out into a grid of 3 columns (1 servers as gap). Adjusted in style sheet. */}
        <div class={style['content-grid']}>
          <div class={style['content-grid-left']}>
            <div
              class={style['main-text']}
              dangerouslySetInnerHTML={{ __html: currentArticle.text }}
            />
            <ShareSaveButtons />
            <Survey />
            <CommentsSection comments={currentArticle.comments} signedInStatus={signedInStatus} />
          </div>

          <div class={style['content-grid-right']}>
            <div class={style['article-info-desktop-card']}>
              
              <p> <span class={style.pheader}>Category:</span> {`${currentArticle.tag} ${currentArticle.tag_meta}`}</p>

            </div>
            <ShareSaveButtons />
            <RelatedArticles relatedArticles={currentArticle.relatedArticles} articleInfo={articleInfo} />
          </div>

        </div>

      </section>

    </div>
  );
};

export default SingleArticle;
