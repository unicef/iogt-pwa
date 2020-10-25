import { h } from 'preact'
import { useEffect, useState } from 'preact/hooks'
import { Link } from 'preact-router/match'
import { route } from 'preact-router'
import style from './style.css'
import { articleInfo } from './articleInfo'
import ShareSaveButtons from './share-save-buttons'
import CommentsSection from './comments-section'
//'/section/:section/:topic/:articleTitle/:articleId

// Note: `user` comes from the URL, courtesy of our router
const SingleArticle = ({ section, topic, articleTitle, articleId }) => {
  const [myTag, setMyTag] = useState('')
  let currentArticle = articleInfo[articleId]

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
            : myTag === 'youth'? '#00A4CB'
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
            style={ { color: colorTheme, borderBottom: `1px solid ${colorTheme}`}}
            href={`/section/${currentArticle.tag}`}
          >
            {currentArticle.tag}
          </Link>
          <Link
				   	class={style.tag_meta}
             style={ { color: colorTheme, borderBottom: `1px solid ${colorTheme}`}}
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

        <p class={style['date-and-author']}>
          <span class={style.date}>on {currentArticle.date} </span>
          <span class={style.author}>/ by {currentArticle.author}</span>
        </p>

				<img class={style['main-image-tablet-desktop']} src={currentArticle.img_src} />

        <hr class={style['horizontal-line-desktop']}style={{border: `1px solid ${colorTheme}`}}/>


      {/* Desktop content is sectioned out into a grid of 3 columns (1 servers as gap). Adjusted in style sheet. */}
      <div class= {style['content-grid']}>
        <div class = {style['content-grid-left']}>
          <div
            class= {style['main-text']}
            dangerouslySetInnerHTML={{ __html: currentArticle.text }}
          />
          <ShareSaveButtons />
          <CommentsSection comments={currentArticle.comments}/>
        </div>

        <div class= {style['content-grid-right']}>
          <div class= {style['article-info-desktop-card']}>
                <p><span class={style.pheader}>Date Published:</span> {currentArticle.date}</p>
                <p> <span class={style.pheader}>Author:</span> {currentArticle.author}</p>
                <p> <span class={style.pheader}>Category:</span> {`${currentArticle.tag} ${currentArticle.tag_meta}`}</p>
          </div>
              <ShareSaveButtons />
        </div>

      </div>

      </section>

    </div>
  )
}

export default SingleArticle
