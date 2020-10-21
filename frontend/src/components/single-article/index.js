import { h } from 'preact';
import {useEffect, useState} from "preact/hooks";
import { Link } from 'preact-router/match'
import { route } from 'preact-router';
import style from './style.css';
import { articleInfo } from './articleInfo';


//'/section/:section/:topic/:articleTitle/:articleId

// Note: `user` comes from the URL, courtesy of our router
const SingleArticle = ({ section, topic, articleTitle, articleId }) => {

	const [time, setTime] = useState(Date.now());
	const [count, setCount] = useState(10);

	useEffect(() => {
		let timer = setInterval(() => setTime(Date.now()), 1000);
		return () => clearInterval(timer);
	}, []);

	let currentArticle = articleInfo[articleId];

	return (
		<div class={style['single-article']}>

			<div class={style.breadcrumb}>
				<Link href='/'>HOME</Link> {' > '}
				<Link href={`/section/${section}`}>{section.split('-').join(' ').toUpperCase()}</Link>{' > '}
				<Link href={`/section/${section}/${topic}`}>{topic.split('-').join(' ').toUpperCase()}</Link>{' > '}
				<Link href={`section/${section}/${topic}/${articleTitle}`} > {currentArticle.title.toUpperCase()}</Link>
				</div>

			<section class={style["article-content"]}>

			<img class={style["main-image"]} src={currentArticle.img_src} />

			<h1>{currentArticle.title}</h1>

			<div class={style["main-text"]} dangerouslySetInnerHTML={{__html: currentArticle.text}} />

			</section>

			<p>This is the section for a topic { articleTitle }.</p>

      <p>10/21 Setting this up to display a single article.</p>
			<div>Current time: {new Date(time).toLocaleString()}</div>


			<p>
				<button onClick={() => setCount((count) => count + 1)}>Click Me</button>
				{' '}
				Clicked {count} times.
			</p>
		</div>

	);

}

export default SingleArticle;
