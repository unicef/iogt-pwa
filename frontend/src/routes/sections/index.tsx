import { FunctionalComponent, h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import ArticlesView from '../../components/articles/articleListing';
import style from './style.css';

// Note: `section` comes from the URL, courtesy of our router
const Section: FunctionalComponent<{ section?: string }> = ({ section }) => {
  const [time, setTime] = useState(Date.now());
  const [count, setCount] = useState(10);

  useEffect(() => {
    let timer = setInterval(() => setTime(Date.now()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>

      {section && <ArticlesView section={section} />}

    </div>
  );
};

export default Section;
