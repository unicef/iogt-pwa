import { FunctionalComponent, h } from 'preact';
import { Link } from 'preact-router/match';
import { useState, useEffect } from 'preact/hooks';
import style from './style.css';

type Props = {
  id: number;
  img_src: string;
  tag: string;
  tag_meta: string;
  date: string;
  author: string;
  title: string;
  desc: string;
};

const Article: FunctionalComponent<Props> = ({
  id,
  img_src,
  tag,
  tag_meta,
  date,
  author,
  title,
  desc,
}) => {
  const [myTag, setMyTag] = useState('');

  useEffect(() => {
    if (tag.includes('CORONA')) {
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
      ? '#BF0012'
      : myTag === 'youth'
      ? '#00A4CB'
      : myTag === 'parents'
      ? '#48AB5D'
      : 'black';

  return (
    <div class={style.articleContainer}>
      <div class={style.mobileAndFeatureArticleContainer}>
        <div class={style.content}>
          <p
            style={
              myTag === 'emergency'
                ? { color: '#BF0012' }
                : myTag === 'youth'
                ? { color: '#00A4CB' }
                : myTag === 'parents'
                ? { color: '#48AB5D' }
                : { color: 'black' }
            }
            class={style.tag}
          >
            {tag}
          </p>
          <h1 class={style.title}>{title}</h1>
        </div>
        {img_src !== '' && (
          <div class={style.image}>
            {/* Link dynamically goes to a Single Article link based on category and title of article. Creates a route based on tags and title */}
            <Link
              href={`/section/${tag
                .split(/\W/)
                .join('-')
                .toLowerCase()}/${tag_meta
                .split(' ')
                .join('-')
                .toLowerCase()}/${title.split(/\W/).join('-')}/${id}`}
            >
              <img class={style.mainImage} src={img_src} />
            </Link>
          </div>
        )}
      </div>

      <div class={style.tabletArticleContainer}>
        <div class={style.image}>
          <Link
            href={`/section/${tag
              .split(/\W/)
              .join('-')
              .toLowerCase()}/${tag_meta
              .split(' ')
              .join('-')
              .toLowerCase()}/${title.split(/\W/).join('-')}/${id}`}
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

            <br />
            <span class={style.byline}>
              on {date} / <span class={style.author}>by {author}</span>
            </span>
          </p>

          <div class={style.title}>
            <Link
              href={`/section/${tag
                .split(/\W/)
                .join('-')
                .toLowerCase()}/${tag_meta
                .split(' ')
                .join('-')
                .toLowerCase()}/${title.split(/\W/).join('-')}/${id}`}
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
            href={`/section/${tag
              .split(/\W/)
              .join('-')
              .toLowerCase()}/${tag_meta
              .split(' ')
              .join('-')
              .toLowerCase()}/${title.split(/\W/).join('-')}/${id}`}
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

            <br />
            <span class={style.byline}>
              on {date} / <span class={style.author}>by {author}</span>
            </span>
          </p>

          <div class={style.title}>
            <Link
              href={`/section/${tag
                .split(/\W/)
                .join('-')
                .toLowerCase()}/${tag_meta
                .split(' ')
                .join('-')
                .toLowerCase()}/${title.split(/\W/).join('-')}/${id}`}
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

export default Article;
