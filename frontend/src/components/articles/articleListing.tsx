import { FunctionalComponent, h } from 'preact';
import { Link } from 'preact-router/match';
import { useContext } from 'preact/hooks';
import { Icon } from 'preact-material-components/Icon';
import style from './style.css';
import { Categories, ArticleInfo } from '../app'
import { Article, Section } from '../../types'
import ArticleComponent from './articleThumbnail';
import {
  articlesInfo,
  aboutCoronavirusArticles,
  studentToolkitArticles,
  covidParentingArticles,
  healthWorkerArticles,
  mobileHomeArticles,
} from '../articleInfoData';
import FullWidthButton from '../buttons/fullWidthButton';
import ViewMore from '../view-more/viewMore';

// section prop should be retrieved if articleListing is accessed from the Section section, otherwise, currently assuming home page (all articles to be displayed - this will be updated in the future when home page design is settled on)
type Props = {
  section?: string;
};

const ArticleListing: FunctionalComponent<Props> = ({ section }) => {

  const categories = useContext(Categories);

  const articleInfo = useContext(ArticleInfo);


  // Create sections with associated articles:

  let articles: Article[] = []
  let selectedSection: Section = { sectionTitle: '', articles: [...articles] }

  let sectionsWithArticles: Section[] = categories.map(category => ({ sectionTitle: category.topicTitle, articles: [...articles] }))

  const formatUrl = (text:string) => text.toLowerCase().replace(/[\W]+/g, '-')

  // Sort articles into associated sections
  articleInfo.map(article => {
    sectionsWithArticles.map(thisSection => {

      if (article.tag.includes(thisSection.sectionTitle.toUpperCase())) thisSection.articles.push(article)

      if (section === formatUrl(thisSection.sectionTitle)) selectedSection = thisSection;
    })
  })

  // ---------------------------------------

  console.log(sectionsWithArticles, "DOES THIS WORK")

  const articlesList = articlesInfo.map((article) => (
    <ArticleComponent
      key={article.id}
      id={article.id}
      img_src={article.img_src}
      tag={article.tag}
      tag_meta={article.tag_meta}
      date={article.date}
      author={article.author}
      title={article.title}
      desc={article.desc}
    />
  ));

  const selectedSectionList = selectedSection.sectionTitle && selectedSection.articles.map((article: Article) => (
    <ArticleComponent
      key={article.id}
      id={article.id}
      img_src={article.img_src}
      tag={article.tag}
      tag_meta={article.tag_meta}
      date={article.date}
      author={article.author}
      title={article.title}
      desc={article.desc}
    />
  ));

  console.log(section,selectedSection)

  const coronaArticles = articlesInfo.map((article) => {
    return article.tag.includes('CORONAVIRUS') ? (
      <ArticleComponent
        key={article.id}
        id={article.id}
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
  const youthArticles = articlesInfo.map((article) => {
    return article.tag.includes('YOUTH') ? (
      <ArticleComponent
        key={article.id}
        id={article.id}
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

  const parentArticles = articlesInfo.map((article) => {
    return article.tag.includes('PARENTS') ? (
      <ArticleComponent
        key={article.id}
        id={article.id}
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

  const homeMobileArticles = articleInfo.map((article) => {
    return (
      <div class={style.mobileHomeArticleContainer}>
        <div class={style.mobileTagContainer}>
          <h1 class={style.mobileTag}>{article.tag}</h1>
          <div class={style.share}>
            <img src='../../assets/mock-images/share.svg' />
          </div>
        </div>
        <div>
          <img src={article.img_src} />
        </div>
        <h1 class={style.mobileHeader}>{article.title}</h1>
      </div>
    );
  });

  const mobileCovidArticles = aboutCoronavirusArticles.map((article) => {
    return (
      <ArticleComponent
        key={article.id}
        id={article.id}
        img_src={article.img_src}
        tag={article.tag}
        tag_meta={article.tag_meta}
        date={article.date}
        author={article.author}
        title={article.title}
        desc={article.desc}
      />
    );
  });

  const mobileStudentArticles = studentToolkitArticles.map((article) => {
    return (
      <ArticleComponent
        key={article.id}
        id={article.id}
        img_src={article.img_src}
        tag={article.tag}
        tag_meta={article.tag_meta}
        date={article.date}
        author={article.author}
        title={article.title}
        desc={article.desc}
      />
    );
  });

  const mobileParentingArticles = covidParentingArticles.map((article) => {
    return (
      <ArticleComponent
        key={article.id}
        id={article.id}
        img_src={article.img_src}
        tag={article.tag}
        tag_meta={article.tag_meta}
        date={article.date}
        author={article.author}
        title={article.title}
        desc={article.desc}
      />
    );
  });

  const mobileHealthArticles = healthWorkerArticles.map((article) => {
    return (
      <ArticleComponent
        key={article.id}
        id={article.id}
        img_src={article.img_src}
        tag={article.tag}
        tag_meta={article.tag_meta}
        date={article.date}
        author={article.author}
        title={article.title}
        desc={article.desc}
      />
    );
  });

  return (
    // <div class={style.articlesContainer}>
    //   <div class={style.grid}>{articlesList}</div>
    //   <PrimaryButton text='Load more' />
    // </div>
    <div class={style.articlesView}>
      <link
        href='https://fonts.googleapis.com/icon?family=Material+Icons'
        rel='stylesheet'
      />
      {/* -----DESKTOP ARTICLES----- */}
      {section && <div class={style.desktopArticles}>{selectedSectionList}</div>

      }

      {!section && <div class={style.desktopArticles}>{articlesList}</div>}

      {!section && (
        <div class={style.desktopArticles}>{articlesList}</div>
      )}
      {/* {section==="health-providers" &&
      <div style={{margin:'5%'}}>
        <div class={style.tabletArticlesRowContainer}>
            <div class={style.tabletArticlesHeader}>
              <h1>About Coronavirus</h1>
              <ChevronRight size="30"/>
            </div>
            <div class={style.articlesRow}>{deskCoronaArticles}</div>
        </div>
        <div class={style.tabletArticlesRowContainer}>
            <div class={style.tabletArticlesHeader}>
              <h1>Student Toolkit</h1>
              <ChevronRight size="30"/>
            </div>
            <div class={style.articlesRow}>{deskStudentArticles}</div>
        </div>
        <div class={style.tabletArticlesRowContainer}>
            <div class={style.tabletArticlesHeader}>
              <h1>COVID-19 Parenting</h1>
              <ChevronRight size="30"/>
            </div>
            <div class={style.articlesRow}>{deskParentArticles}</div>
        </div>
      </div>
      } */}

      {/* -----TABLET ARTICLES----- */}
      <div class={style.tabletArticles}>
        <div class={style.tabletArticlesRowContainer}>
          <div class={style.tabletArticlesHeader}>
            <h1>About Coronavirus</h1>
            <Icon style={{ fontSize: 30 }} class="material-icons">chevron_right</Icon>
            {/* <ChevronRight size='30' /> */}
          </div>
          <div class={style.articlesRow}>{coronaArticles}</div>
        </div>
        <div class={style.tabletArticlesRowContainer}>
          <div class={style.tabletArticlesHeader}>
            <h1>Student Toolkit</h1>
            <Icon style={{ fontSize: 30 }} class="material-icons">chevron_right</Icon>
          </div>
          <div class={style.articlesRow}>{youthArticles}</div>
        </div>
        <div class={style.tabletArticlesRowContainer}>
          <div class={style.tabletArticlesHeader}>
            <h1>COVID-19 Parenting</h1>
            <Icon style={{ fontSize: 30 }} class="material-icons">chevron_right</Icon>
          </div>
          <div class={style.articlesRow}>{parentArticles}</div>
        </div>
      </div>

      {/* -----MOBILE PHONE ARTICLES----- */}
      <div class={style.mobileArticles}>

        {!section && (
          <div>
            <div>{homeMobileArticles}</div>
          </div>
        )}

        {section === 'youth' && <div></div>}
        {section === 'coronavirus-covid-19-' && (
          <div>
            <div class={style.articleBlock}>
              <div class={style.blockHeaderContainer}>
                <h1 class={style.blockHeader}>ABOUT CORONAVIRUS</h1>
                <Icon style={{ fontSize: 15 }} class="material-icons">chevron_right</Icon>
              </div>
              <div>{mobileCovidArticles}</div>
              <div class={style.articleBlockViewMore}>
                <span>View more</span>
                <Icon style={{ fontSize: 15 }} class="material-icons">chevron_right</Icon>
              </div>
            </div>
            <div class={style.articleBlock}>
              <div class={style.blockHeaderContainer}>
                <h1 class={style.blockHeader}>STUDENT TOOLKIT</h1>
                <Icon style={{ fontSize: 15 }} class="material-icons">chevron_right</Icon>
              </div>
              <div>{mobileStudentArticles}</div>
              <div class={style.articleBlockViewMore}>
                <span>View more</span>
                <Icon style={{ fontSize: 15 }} class="material-icons">chevron_right</Icon>
              </div>
            </div>
            <div class={style.articleBlock}>
              <div class={style.blockHeaderContainer}>
                <h1 class={style.blockHeader}>COVID-19 PARENTING</h1>
                <Icon style={{ fontSize: 15 }} class="material-icons">chevron_right</Icon>
              </div>
              <div>{mobileParentingArticles}</div>
              <div class={style.articleBlockViewMore}>
                <span>View more</span>
                <Icon style={{ fontSize: 15 }} class="material-icons">chevron_right</Icon>
              </div>
            </div>
            <div class={style.articleBlock}>
              <div class={style.blockHeaderContainer}>
                <h1 class={style.blockHeader}>HEALTH WORKER RESOURCES</h1>
                <Icon style={{ fontSize: 15 }} class="material-icons">chevron_right</Icon>
              </div>
              <div>{mobileHealthArticles}</div>
              <div class={style.articleBlockViewMore}>
                <span>View more</span>
                <Icon style={{ fontSize: 15 }} class="material-icons">chevron_right</Icon>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* -----FEATURE PHONE ARTICLES----- */}
      <div class={style.featureArticles}>
        {/* PARENTS & CAREGIVERS FEATURE ARTICLES */}
        {section === 'parents-and-caregivers' && (
          <div>
            <div>{mobileCovidArticles}</div>
            <ViewMore text='CORONAVIRUS (COVID-19)' />
            <div>{mobileStudentArticles}</div>
            <ViewMore text='STUDENT TOOLKIT' />
            <div>{mobileParentingArticles}</div>
            <ViewMore text='COVID-19 PARENTING' />
            <div>{mobileHealthArticles}</div>
            <ViewMore text='HEALTH WORKER RESOURCES' />
          </div>
        )}

        {/* GIRLS FEATURE ARTICLES */}
        {section === 'girls' && (
          <div>
            <div>{mobileCovidArticles}</div>
            <ViewMore text='CORONAVIRUS (COVID-19)' />
            <div>{mobileStudentArticles}</div>
            <ViewMore text='STUDENT TOOLKIT' />
            <div>{mobileParentingArticles}</div>
            <ViewMore text='COVID-19 PARENTING' />
            <div>{mobileHealthArticles}</div>
            <ViewMore text='HEALTH WORKER RESOURCES' />
          </div>
        )}

        {/* HEALTH PROVIDERS FEATURE ARTICLES */}
        {section === 'health-providers' && (
          <div>
            <div>{mobileCovidArticles}</div>
            <ViewMore text='CORONAVIRUS (COVID-19)' />
            <div>{mobileStudentArticles}</div>
            <ViewMore text='STUDENT TOOLKIT' />
            <div>{mobileParentingArticles}</div>
            <ViewMore text='COVID-19 PARENTING' />
            <div>{mobileHealthArticles}</div>
            <ViewMore text='HEALTH WORKER RESOURCES' />
          </div>
        )}

        {/* YOUTH FEATURE ARTICLES */}
        {section === 'youth' && (
          <div>
            <div>{mobileCovidArticles}</div>
            <ViewMore text='CORONAVIRUS (COVID-19)' />
            <div>{mobileStudentArticles}</div>
            <ViewMore text='STUDENT TOOLKIT' />
            <div>{mobileParentingArticles}</div>
            <ViewMore text='COVID-19 PARENTING' />
            <div>{mobileHealthArticles}</div>
            <ViewMore text='HEALTH WORKER RESOURCES' />
          </div>
        )}

        {/* ALL FEATURE ARTICLES */}
        {section === 'all-articles' && (
          <div>
            <div>{coronaArticles}</div>
            <ViewMore text='CORONAVIRUS (COVID-19)' />
            <div>{youthArticles}</div>
            <ViewMore text='YOUTH' />
            <div>{parentArticles}</div>
            <ViewMore text='PARENTS & CAREGIVERS' />
          </div>
        )}

        {/* HOME FEATURE ARTICLES */}
        {!section && (
          <div>
            <div>{coronaArticles}</div>
            <ViewMore text='CORONAVIRUS (COVID-19)' />
            <div>{youthArticles}</div>
            <ViewMore text='YOUTH' />
            <div>{parentArticles}</div>
            <ViewMore text='PARENTS & CAREGIVERS' />
          </div>
        )}

        <div class={style.featureLinksContainer}>
          <div class={style.featureLinksWrapper}>
            <a class={style.noUnderline} href='#'>
              <div class={style.searchLink}>
                <p>Search</p>
                <Icon style={{ fontSize: 'small' }} class="material-icons">search</Icon>
              </div>
            </a>
            <a href='#'>
              <div class={style.featureLink}>
                <p>Coronavirus</p>
                <Icon style={{ fontSize: 20 }} class="material-icons">chevron_right</Icon>
              </div>
            </a>
            <a href='#'>
              <div class={style.featureLink}>
                <p>Youth</p>
                <Icon style={{ fontSize: 20 }} class="material-icons">chevron_right</Icon>
              </div>
            </a>
            <a href='#'>
              <div class={style.featureLink}>
                <p>Parents & Caregivers</p>
                <Icon style={{ fontSize: 20 }} class="material-icons">chevron_right</Icon>
              </div>
            </a>
            <a href='#'>
              <div class={style.featureLink}>
                <p>Quizzes</p>
                <Icon style={{ fontSize: 20 }} class="material-icons">chevron_right</Icon>
              </div>
            </a>
            <a href='#'>
              <div class={style.featureLink}>
                <p>Surveys</p>
                <Icon style={{ fontSize: 20 }} class="material-icons">chevron_right</Icon>
              </div>
            </a>
            <a href='#'>
              <div class={style.featureLink}>
                <p>How To Use Free Data</p>
                <Icon style={{ fontSize: 20 }} class="material-icons">chevron_right</Icon>
              </div>
            </a>
            <a href='#'>
              <div class={style.featureLink}>
                <p>About Us</p>
                <Icon style={{ fontSize: 20 }} class="material-icons">chevron_right</Icon>
              </div>
            </a>
          </div>
          <FullWidthButton
            text='Sign out'
            width='100%'
            backgroundColor='#20cd84'
          />
          <FullWidthButton text='Join' width='100%' backgroundColor='#000000' />
        </div>
      </div>
    </div>
  );
};

export default ArticleListing;
