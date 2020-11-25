import { h } from 'preact';
import {useEffect, useState} from "preact/hooks";
import ArticlesView from '../../components/articles/articlesView';
import style from './style.css';

// Note: `user` comes from the URL, courtesy of our router
const Section = ({ section }) => {
	const [time, setTime] = useState(Date.now());
	const [count, setCount] = useState(10);

	useEffect(() => {
		let timer = setInterval(() => setTime(Date.now()), 1000);
		return () => clearInterval(timer);
	}, []);

	return (
		<div>
			{section === "all-articles" &&
			<ArticlesView section="all-articles"/>
			}
			{section === "parents-and-caregivers" &&
			<ArticlesView section="parents-and-caregivers"/>
			}
			{section === "girls" &&
			<ArticlesView section="girls"/>
			}
			{section === "youth" &&
			<ArticlesView section="youth"/>
			}
			{section === "health-providers" &&
			<ArticlesView section="health-providers"/>}
			{/* <h1>Section: {section}</h1>
			<p>This is the section for a topic { section }.</p>

      <p>10/21 Setting this up to display each section.</p>
			<div>Current time: {new Date(time).toLocaleString()}</div>

			<p>
				<button onClick={() => setCount((count) => count + 1)}>Click Me</button>
				{' '}
				Clicked {count} times.
			</p> */}
		</div>
	);
}

export default Section;
