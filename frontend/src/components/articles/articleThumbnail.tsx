import { FunctionalComponent, h } from 'preact';
import { Link } from 'preact-router/match';
import { useState, useEffect } from 'preact/hooks';
import style from './style.css';

import { formatUrl } from '../../utils'


type ArticleProps = {
  id: number;
  img_src: string;
  tag: string;
  tag_meta: string;
  date: string;
  author: string;
  title: string;
  desc: string;
  color?: any;
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
  color
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

  // Let theme be color passed or a default color
  let colorTheme = color ? color : myTag === 'emergency'
    ? '#E24256'
    : myTag === 'youth'
      ? '#1CABE2'
      : myTag === 'parents'
        ? '#6EC17F'
        : 'black';

  {/* Link dynamically goes to a Single Article link based on category and title of article. Creates a route based on tags and title */ }

  let singleArticleLink = `/section/${formatUrl(tag)}/${tag_meta ? formatUrl(tag_meta) + '/' : ''}${formatUrl(title)}/${id}`


  return (
    <div class={style.articleContainer}>
      <div class={style.mobileAndFeatureArticleContainer}>
        <div class={style.content}>
          <p
            style={{ color: colorTheme }}
            class={style.tag}
          >
            {tag}
          </p>
          <h1 class={style.title}>{title}</h1>
        </div>
        {img_src && (
          <div class={style.image}>

            <Link
              href={singleArticleLink}
            >
              <img class={style.mainImage} src={img_src} />
            </Link>
          </div>
        )}
      </div>

      <div class={style.tabletArticleContainer} style={{ borderBottom: ` solid ${colorTheme}` }}>
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
            >
              <span>
                {tag} {tag_meta && `| ${tag_meta}`}
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
          {style.desc && <p class={style.desc}>{desc}</p>}

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
            <div>
              <span>
                {tag} {tag_meta && `| ${tag_meta}`}
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
          {style.desc && <p class={style.desc}>{desc}</p>}
        </div>
      </div>
    </div>
  );
};

export default ArticleThumbnail;
