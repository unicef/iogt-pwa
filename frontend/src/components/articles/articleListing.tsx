import { FunctionalComponent, h } from 'preact';
import { Link } from 'preact-router/match';
import { useContext } from 'preact/hooks';
import { Icon } from 'preact-material-components/Icon';
import style from './style.css';
import { Categories, ArticleInfo } from '../app'
import { Article, Section } from '../../types'
import { formatUrl } from '../../utils'

import ArticleComponent from './articleThumbnail';
import {
  articlesInfo
} from '../articleInfoData';
import FullWidthButton from '../buttons/fullWidthButton';
import ViewMore from '../view-more/viewMore';

// section prop should be retrieved if articleListing is accessed from the Section section, otherwise, currently assuming home page (all articles to be displayed - this will be updated in the future when home page design is settled on)
type Props = {
  section?: string;
};

const ArticleListing: FunctionalComponent<Props> = ({ section }) => {

  const categories = useContext(Categories);
  //all articles
  const articleInfo = useContext(ArticleInfo);


  // Sort articles into associated sections, so can list out according to section

  let articles: Article[] = []
  let selectedSection: Section = {
    topicTitle: '',
    articles: [...articles],
    subtopics: [] }

  // Taking the categories information, create structure for sections which will each contain articles
  let sectionsWithArticles: Section[] = categories.map(category => ({
    topicTitle: category.topicTitle,
    articles: [...articles],
    sectionColor: category.color }))


  // Will go through all articles and place article in corresponding section. If the current section matches the current URL, it is the selected section.
  articleInfo.map(article => {
    sectionsWithArticles.map(thisSection => {

      if (article.tag.includes(thisSection.topicTitle.toUpperCase())) thisSection.articles.push(article)

      if (section === formatUrl(thisSection.topicTitle)) selectedSection = thisSection;
    })
  })

  // The above helps find a section from categories. Next if a section is selected, list 3rd level subtopics and list them instead of 2nd level subtopics
  if(section && selectedSection.subtopics){
      sectionsWithArticles =
      selectedSection.subtopics.map(subtopic => ({
        subtopics: subtopic.subtopics,
        topicTitle: subtopic.topicTitle,
        articles: [...articles],
        sectionColor: subtopic.color }))
        console.log("HEE", sectionsWithArticles)

  }

  // ---------------------------------------

  const createArticleComponent = (article: Article, color?: any) =>
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
      color={color}
    />

  const articlesList = articlesInfo.map((article) => (
    createArticleComponent(article)
  ));


  const selectedSectionComponents = selectedSection.topicTitle && selectedSection.articles.map((article: Article) => (
    createArticleComponent(article, selectedSection.color)
  ));


  // helper function for homeMobileArticles
  const mobileArticleComponent = (article: Article) => {
    let singleArticleLink = `/section/${formatUrl(article.tag)}/${article.tag_meta ? formatUrl(article.tag_meta) + '/' : ''}${formatUrl(article.title)}/${article.id}`
    return (
      <div class={style.mobileHomeArticleContainer}>
        <div class={style.mobileTagContainer}>
          <p class={style.mobileTag}>{article.tag}</p>
          <div class={style.share}>
          </div>
        </div>

        <div >
          <Link href={singleArticleLink}>
            <img class={style.mainImage} src={article.img_src} />
          </Link>
        </div>
        <div class={style.title}>
          <h1 class={style.mobileHeader}>
            <Link href={singleArticleLink} style={{ textDecoration: 'none', color: 'black'}}>{article.title}</Link>
          </h1>

          <img src='../../assets/mock-images/share.svg' />
        </div>
      </div>)
  }

  // Contains either all articles or section articles
  const homeMobileArticles = section ? selectedSection.articles && selectedSection.articles.map(article =>
    (mobileArticleComponent(article))
  ) :
    sectionsWithArticles.map((section: Section) => section.articles &&
      section.articles.map(article =>
        (mobileArticleComponent(article))
      )
    );

  return (
    // <div class={style.articlesContainer}>
    //   <div class={style.grid}>{articlesList}</div>
    //   <PrimaryButton text='Load more' />
    // </div>
    <div class={style.articlesView}>


      {/* ----- DESKTOP ARTICLES ----- */}
      {section && <div class={style.desktopArticles}>{selectedSectionComponents}</div>

      }

      {!section && <div class={style.desktopArticles}>{articlesList}</div>}


      {/* ----- TABLET ARTICLES ----- */}

      {/* Display articles for a selected Section */}
      {section && <div class={style.tabletArticles}>
        <div class={style.tabletArticlesRowContainer}>
          <div class={style.tabletArticlesHeader}>
            <h1>{selectedSection.topicTitle}</h1>
            <Icon style={{ fontSize: 30 }}>chevron_right</Icon>
          </div>
          <div class={style.articlesRow}>{selectedSectionComponents}</div>
        </div>

      </div>}

      {/* If on Home page, and/ or a Section is not selected, display all articles */}

      {!section && <div class={style.tabletArticles}>
        {sectionsWithArticles && sectionsWithArticles.map((section: Section, index: number) =>
          <div class={style.tabletArticlesRowContainer}>
            <div class={style.tabletArticlesHeader}>
              <h1>{section.topicTitle}</h1>
              <Icon style={{ fontSize: 30 }} class="material-icons">chevron_right</Icon>
            </div>
            <div class={style.articlesRow}>
              {section.articles && section.articles.map(article =>
  createArticleComponent(article, section.color)
              )}
            </div>
          </div>
        )}

      </div>
      }

      {/* ----- MOBILE PHONE ARTICLES ----- */}
      <div class={style.mobileArticles}>

        {section &&
          <div>
            {/* <h1>{selectedSection.topicTitle}</h1> */}
            {/* {selectedSection.subtopics} */}
            <div class={style.articleBlock}>
              <div class={style.blockHeaderContainer}>
                <h1 class={style.blockHeader}>{selectedSection.topicTitle}</h1>
                <Icon style={{ fontSize: 15 }} class="material-icons">chevron_right</Icon>
              </div>
              <div>{homeMobileArticles}</div>
              <div class={style.articleBlockViewMore}>
                <span>View more</span>
                <Icon style={{ fontSize: 15 }} class="material-icons">chevron_right</Icon>
              </div>
            </div>
          </div>
        }

        {/* Mobile - Display all articles  */}
        {!section &&
          sectionsWithArticles && sectionsWithArticles.map((section: Section, index: number) =>
            <div>
              <div class={style.articleBlock}>
                <div class={style.blockHeaderContainer}>
                  <h1 class={style.blockHeader}>{section.topicTitle}</h1>
                  <Icon style={{ fontSize: 15 }} class="material-icons">chevron_right</Icon>
                </div>
                <div style={style.mobileHomeArticleContainer}>{section.articles.map((article: Article) =>
                  mobileArticleComponent(article)
                )}</div>
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

        {/* all articles */}
        {!section && (
          <div>

            {sectionsWithArticles && sectionsWithArticles.map((section: Section) =>
              <div>
                <div> {section.articles.map((article: Article) =>
                  createArticleComponent(article, section.color))}</div>
                <ViewMore text={section.topicTitle} />
              </div>
            )}
          </div>
        )}

        {/* Selected Section */}
        {section && (
          <div>
            <div>{selectedSectionComponents}</div>
            <ViewMore text={selectedSection.topicTitle} />
          </div>
        )}

      {/* TODO: Feature Footer Links : Move this to footer section:  */}
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
            backgroundColor='#6EC17F'
          />
          <FullWidthButton text='Join' width='100%' backgroundColor='#000000' />
        </div>
      </div>
    </div>
  );
};

export default ArticleListing;
