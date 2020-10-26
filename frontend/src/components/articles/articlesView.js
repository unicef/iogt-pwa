import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';
import Article from './article';
import { articleInfo, 
         aboutCoronavirusArticles,
         studentToolkitArticles, 
         covidParentingArticles, 
         healthWorkerArticles } 
from './articleInfo';
import FullWidthButton from '../buttons/fullWidthButton';
import ViewMore from '../view-more/viewMore';
import SearchIcon from '@material-ui/icons/Search';
import { ChevronRight } from 'react-feather';

const ArticlesView = () => {
  const articlesList = articleInfo.map((article) => (
    <Article
      key={article.id}
      img_src={article.img_src}
      tag={article.tag}
      tag_meta={article.tag_meta}
      date={article.date}
      author={article.author}
      title={article.title}
      desc={article.desc}
    />
  ));

  const coronaArticles = articleInfo.map((article) => {
    return article.tag.includes('CORONAVIRUS') ? (
      <Article
        key={article.id}
        img_src={article.img_src}
        tag={article.tag}
        tag_meta={article.tag_meta}
        date={article.date}
        author={article.author}
        title={article.title}
        desc={article.desc}
      />
    ) : (
      <div></div>
    );
  });
  const youthArticles = articleInfo.map((article) => {
    return article.tag.includes('YOUTH') ? (
      <Article
        key={article.id}
        img_src={article.img_src}
        tag={article.tag}
        tag_meta={article.tag_meta}
        date={article.date}
        author={article.author}
        title={article.title}
        desc={article.desc}
      />
    ) : (
      <div></div>
    );
  });

  const parentArticles = articleInfo.map((article) => {
    return article.tag.includes('PARENTS') ? (
      <Article
        key={article.id}
        img_src={article.img_src}
        tag={article.tag}
        tag_meta={article.tag_meta}
        date={article.date}
        author={article.author}
        title={article.title}
        desc={article.desc}
      />
    ) : (
      <div></div>
    );
  });

  const mobileCovidArticles = aboutCoronavirusArticles.map((article)=>{
    return(
      <Article
        key={article.id}
        img_src={article.img_src}
        tag={article.tag}
        tag_meta={article.tag_meta}
        date={article.date}
        author={article.author}
        title={article.title}
        desc={article.desc}
    />
      )
  })

  const mobileStudentArticles = studentToolkitArticles.map((article)=>{
    return(
      <Article
      key={article.id}
      img_src={article.img_src}
      tag={article.tag}
      tag_meta={article.tag_meta}
      date={article.date}
      author={article.author}
      title={article.title}
      desc={article.desc}
  />
    )
  })

  const mobileParentingArticles = covidParentingArticles.map((article)=>{
    return(
      <Article
      key={article.id}
      img_src={article.img_src}
      tag={article.tag}
      tag_meta={article.tag_meta}
      date={article.date}
      author={article.author}
      title={article.title}
      desc={article.desc}
  />
    )
  })

  const mobileHealthArticles = healthWorkerArticles.map((article)=>{
    return(
      <Article
      key={article.id}
      img_src={article.img_src}
      tag={article.tag}
      tag_meta={article.tag_meta}
      date={article.date}
      author={article.author}
      title={article.title}
      desc={article.desc}
  />
    )
  })

  return (
    // <div class={style.articlesContainer}>
    //   <div class={style.grid}>{articlesList}</div>
    //   <PrimaryButton text='Load more' />
    // </div>
    <div class={style.articlesView}>
      <div class={style.desktopArticles}>{articlesList}</div>

      <div class={style.tabletArticles}>
        <div class={style.tabletArticlesRowContainer}>
          <div class={style.tabletArticlesHeader}>
            <h1>About Coronavirus</h1>
            <ChevronRight size="30"/>
          </div>
          <div class={style.articlesRow}>{coronaArticles}</div>
        </div>
        <div class={style.tabletArticlesRowContainer}>
          <div class={style.tabletArticlesHeader}>
            <h1>Student Toolkit</h1>
            <ChevronRight size="30"/>
          </div>
          <div class={style.articlesRow}>{youthArticles}</div>
        </div>
        <div class={style.tabletArticlesRowContainer}>
          <div class={style.tabletArticlesHeader}>
            <h1>COVID-19 Parenting</h1>
            <ChevronRight size="30"/>
          </div>
          <div class={style.articlesRow}>{coronaArticles}</div>
        </div>
      </div>

      <div class={style.mobileArticles}>
        <div class={style.articleBlock}>
          <div class={style.blockHeaderContainer}>
            <h1 class={style.blockHeader}>ABOUT CORONAVIRUS</h1>
            <ChevronRight size="15"/>
          </div>
          <div>{mobileCovidArticles}</div>
          <div class={style.articleBlockViewMore}>
            <span>View more</span>
            <ChevronRight size="15"/>
          </div>
        </div>
        <div class={style.articleBlock}>
          <div class={style.blockHeaderContainer}>
            <h1 class={style.blockHeader}>STUDENT TOOLKIT</h1>
            <ChevronRight size="15"/>
          </div>
          <div>{mobileStudentArticles}</div>
          <div class={style.articleBlockViewMore}>
            <span>View more</span>
            <ChevronRight size="15"/>
          </div>
        </div>
        <div class={style.articleBlock}>
          <div class={style.blockHeaderContainer}>
            <h1 class={style.blockHeader}>COVID-19 PARENTING</h1>
            <ChevronRight size="15"/>
          </div>
          <div>{mobileParentingArticles}</div>
          <div class={style.articleBlockViewMore}>
            <span>View more</span>
            <ChevronRight size="15"/>
          </div>
        </div>
        <div class={style.articleBlock}>
          <div class={style.blockHeaderContainer}>
            <h1 class={style.blockHeader}>HEALTH WORKER RESOURCES</h1>
            <ChevronRight size="15"/>
          </div>
          <div>{mobileHealthArticles}</div>
          <div class={style.articleBlockViewMore}>
            <span>View more</span>
            <ChevronRight size="15"/>
          </div>
        </div>
      </div>

      <div class={style.featureArticles}>
        <div>{coronaArticles}</div>
        <ViewMore text='CORONAVIRUS (COVID-19)' />
        <div>{youthArticles}</div>
        <ViewMore text='YOUTH' />
        <div>{parentArticles}</div>
        <ViewMore text='PARENTS & CAREGIVERS' />
        <div class={style.featureLinksContainer}>
          <div class={style.featureLinksWrapper}>
          <a class={style.noUnderline} href='#'>
            <div class={style.searchLink}>
              <p>Search</p>
              <SearchIcon fontSize="small"/>
            </div>
          </a>
          <a href='#'>
            <div class={style.featureLink}>
              <p>Coronavirus</p>
              <ChevronRight size="20"/>
            </div>
          </a>
          <a href='#'>
            <div class={style.featureLink}>
              <p>Youth</p>
              <ChevronRight size="20" />
            </div>
          </a>
          <a href='#'>
            <div class={style.featureLink}>
              <p>Parents & Caregivers</p>
              <ChevronRight size="20"/>
            </div>
          </a>
          <a href='#'>
            <div class={style.featureLink}>
              <p>Quizzes</p>
              <ChevronRight size="20"/>
            </div>
          </a>
          <a href='#'>
            <div class={style.featureLink}>
              <p>Surveys</p>
              <ChevronRight size="20"/>
            </div>
          </a>
          <a href='#'>
            <div class={style.featureLink}>
              <p>How To Use Free Data</p>
              <ChevronRight size="20"/>
            </div>
          </a>
          <a href='#'>
            <div class={style.featureLink}>
              <p>About Us</p>
              <ChevronRight size="20"/>
            </div>
          </a>
          </div>
          <FullWidthButton text='Sign out' width='100%' backgroundColor='#20cd84' />
          <FullWidthButton text='Join' width='100%' backgroundColor='#000000' />
        </div>
      </div>
    </div>
  );
};

export default ArticlesView;
