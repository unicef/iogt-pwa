import { h } from 'preact';
import { Link } from 'preact-router/match';
import { useState, useEffect } from 'preact/hooks';
import style from './style.css';

const Article = ({ id, img_src, tag, date, author, title, desc }) => {
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

  return (
    <div class={style.container}>
      <div class={style.image}>
        {/* Link dynamically goes to a Single Article link based on category and title of article */}
        <Link href={`/section/${tag.toLowerCase().split(' ').join('-').split('|').join('/')}/${title.split(' ').join('-')}/${id}`}>
        <img class={style.mainImage} src={img_src} />
        </Link>
      </div>
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
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span>{tag}</span>
            <img class={style.share} src='../../assets/mock-images/share.png' />
          </div>

          <br />
          <span class={style.byline}>
            on {date} / <span class={style.author}>by {author}</span>
          </span>
        </p>

        <div style={{ borderColor: 'black' }}>
          <span class={style.title}>{title}</span>
        </div>
        <p class={style.desc}>{desc}</p>
        <hr
          style={
            myTag === 'emergency'
              ? { borderColor: '#BF0012' }
              : myTag === 'youth'
              ? { borderColor: '#00A4CB' }
              : myTag === 'parents'
              ? { borderColor: '#48AB5D' }
              : { borderColor: 'black' }
          }
          class={style.hr}
        />
      </div>
    </div>
  );
};

export default Article;
