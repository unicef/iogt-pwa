import { FunctionalComponent, h } from 'preact';
import { Link } from 'preact-router/match';
import { useState, useEffect } from 'preact/hooks';
import style from './style.css';

import { formatUrl} from '../../utils'


type ArticleProps = {
  id: number;
  img_src: string;
  tag: string;
  tag_meta: string;
  date: string;
  author: string;
  title: string;
  desc: string;
};

const ArticleThumbnail: FunctionalComponent<ArticleProps> = ({
  id,
  img_src,
  tag,
  tag_meta,
  date,
  author,
  title,
  desc,
}: ArticleProps) => {
  const [myTag, setMyTag] = useState('');

  useEffect(() => {
    if (tag.includes('CORONA') || tag.includes('HEALTH')) {
      setMyTag('emergency');
    } else if (tag.includes('YOUTH')) {
      setMyTag('youth');
    } else if (tag.includes('PARENTS')) {
      setMyTag('parents');
    } else {
      setMyTag('default');
    }
  });

  let colorTheme =
    myTag === 'emergency'
      ? '#E24256'
      : myTag === 'youth'
        ? '#1CABE2'
        : myTag === 'parents'
          ? '#6EC17F'
          : 'black';

  {/* Link dynamically goes to a Single Article link based on category and title of article. Creates a route based on tags and title */ }

  let singleArticleLink = `/section/${formatUrl(tag)}/${tag_meta? formatUrl(tag_meta)+ '/': ''}${formatUrl(title)}/${id}`


  return (
    <div class={style.articleContainer}>
      <div class={style.mobileAndFeatureArticleContainer}>
        <div class={style.content}>
          <p
            style={colorTheme}
            class={style.tag}
          >
            {tag}
          </p>
          <h1 class={style.title}>{title}</h1>
        </div>
        {img_src !== '' && (
          <div class={style.image}>

            <Link
              href={singleArticleLink}
            >
              <img class={style.mainImage} src={img_src} />
            </Link>
          </div>
        )}
      </div>

      <div class={style.tabletArticleContainer}>
        <div class={style.image}>
          <Link
            href={singleArticleLink}
          >
            <img class={style.mainImage} src={img_src} />
          </Link>
          <div class={style.share}>
            <img src='../../assets/mock-images/share.svg' />
          </div>
        </div>
        <div class={style.content}>
          <p style={{ color: colorTheme }} class={style.tag}>
            <div
              style={{
                marginBottom: -15,
              }}
            >
              <span>
                {tag} | {tag_meta}
              </span>
            </div>
          </p>

          <div class={style.title}>
            <Link
              href={singleArticleLink}
            >
              <span>{title}</span>
            </Link>
          </div>
          <p class={style.desc}>{desc}</p>
          <hr style={{ borderColor: colorTheme }} class={style.hr} />
        </div>
      </div>

      <div
        class={style.desktopArticleContainer}
        style={{ borderBottom: ` solid ${colorTheme}` }}
      >
        <div class={style.image}>
          <Link
            href={singleArticleLink}
          >
            <img class={style.mainImage} src={img_src} />
          </Link>

          <div class={style.share}>
            <img src='../../assets/mock-images/share.svg' />
          </div>
        </div>
        <div class={style.content}>
          <p style={{ color: colorTheme }} class={style.tag}>
            <div
              style={{
                marginBottom: -22,
              }}
            >
              <span>
                {tag} | {tag_meta}
              </span>
            </div>

          </p>

          <div class={style.title}>
            <Link
              href={singleArticleLink}
            >
              <span>{title}</span>
            </Link>
          </div>
          <p class={style.desc}>{desc}</p>
          {/* <hr
            style={{ borderColor: colorTheme }
            }
            class={style.hr}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default ArticleThumbnail;
