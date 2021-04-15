import { FunctionalComponent, h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

import CategoriesDropdown from './categories-dropdown'
import LanguageDropdown from './language-dropdown'

type NavBarProps = {
  currentLanguage: string;
  languageList: string[]
  categories: Topic[]
}

interface Topic {
  topicTitle: string
  topicList: string[]
}

interface NavLinks {
  text: string
  class: string
  imgSrc?: string
  imgSwap?: string
  icon?: string
  hrefText: string
  subtopics: string[]
}

const NavBar: FunctionalComponent<NavBarProps> = ({ currentLanguage, languageList, categories }: NavBarProps) => {


  // format section url
  const formatUrl = (text:string) => text.toLowerCase().replace(/[\W]+/g, ' ').replace(/\s/g, '-');


  const navLinks: NavLinks[] = [
    {
      text: 'Home',
      class: style.articles,
      imgSrc: '../../assets/icons/nav-icons/star-yellow.svg',
      imgSwap: '../../assets/icons/nav-icons/star-white.svg',
      hrefText: '/',
      subtopics: []
    },
    {
      text: 'Parents & Caregivers',
      class: style.parents,
      imgSrc: '../../assets/icons/nav-icons/family-green.svg',
      imgSwap: '../../assets/icons/nav-icons/family-white.svg',
      get hrefText () {
        return `/section/${formatUrl(this.text)}`},
      subtopics: []
    },
    {
      text: 'Girls',
      class: style.girls,
      imgSrc: '../../assets/icons/nav-icons/face1-pink.svg',
      imgSwap: '../../assets/icons/nav-icons/face1-white.svg',
      get hrefText () {
        return `/section/${formatUrl(this.text)}`},
      subtopics: []
    },
    {
      text: 'Youth',
      class: style.youth,
      imgSrc: '../../assets/icons/nav-icons/robot-blue.svg',
      imgSwap: '../../assets/icons/nav-icons/robot-white.svg',
      get hrefText () {
        return `/section/${formatUrl(this.text)}`},
      subtopics: []
    },
    {
      text: 'Coronavirus (Covid-19)',
      class: style['health-providers'],
      imgSrc: '../../assets/icons/nav-icons/microbe-red.svg',
      imgSwap: '../../assets/icons/nav-icons/microbe-white.svg',
      get hrefText () {
        return `/section/${formatUrl(this.text)}`},
      subtopics: []
    },
    {
      text: '',
      class: style['tablet-ellipsis'],
      imgSrc: '',
      // imgSrc: '../../assets/icons/nav-icons/horiz-ellipsis-green.png',
      icon: 'more_horiz',
      hrefText: '/section',
      subtopics: []
    },
    {
      text: 'See More',
      class: style['see-more'],
      imgSrc: '',
      icon: 'more_vert',
      hrefText: '/see-more',
      subtopics: []
    },
  ]

  navLinks.map(navLink => {
    // Find associated category for link
    let category: Topic[] = categories.filter(category => navLink.text === category.topicTitle)

    // Add in subtopics
    if (category[0]) navLink.subtopics = category[0].topicList

  })
  // Add in subsubtopics / article titles
  //TODO: Will need to update this to match with database info
  let thirdLevel = [
    { title: "Read to Your Child about COVID", link: "" },

    { title: "Children with Disabilities", link: "" }
  ]

  let fourthLevel = [
    { title: "Children with Disabilities", link: "" }
  ]
  return (
    <nav aria-label="primary" class={style.nav}>
      <CategoriesDropdown categories={categories} />
      {navLinks.map((link, index) => (
        // Nav Item and Subtopic dropdown
        <div class={`${link.class} ${style['nav-bar-item']} ${style['nav-bar-item' +index]}`}>

          <Link activeClassName={style.active} href={link.hrefText}>
            {link.imgSrc ? (
              <img src={link.imgSrc} />
            ) : (
              <i class='material-icons'>{link.icon}</i>
            )}
            {link.imgSrc ? (
              <img class={style.imgSwap} src={link.imgSwap} />
            ) : (
              ''
            )}
            <span>{link.text}</span>
            {/* Subtopics - to appear on hover*/}
            {!!link.subtopics.length &&
              <ul class={style['subtopic-dropdown-content']}>
                {link.subtopics.map((subtopic, index) =>
                  <li>
                    <Link href={`${link.hrefText}/${subtopic.split(' ').join('-').toLowerCase()}`}>
                      <span>{subtopic}
                        <label for={`${subtopic}${index}`}></label>
                      </span>

                      <ul class={style['subsubtopic-content']}>
                        {thirdLevel.map((subsubtopic, index: number) =>
                          <li>
                            <Link href={subsubtopic.link}>
                              <span>{subsubtopic.title}
                                <label for={`${index}`}></label>
                              </span>

                              <ul class={style['subsubsubtopic-content']}>
                                {fourthLevel.map((subsubsubtopic, index: number) =>
                                  <li>
                                    <Link href={subsubsubtopic.link}>
                                      <span>{subsubsubtopic.title}
                                        {/* <label for={`${index}`}></label> */}
                                      </span>
                                    </Link>
                                  </li>)}
                              </ul>
                            </Link>
                          </li>)}
                      </ul>
                    </Link>
                  </li>
                )}
              </ul>

            }
          </Link>



        </div>



      ))}
      <Link class={style.language}>
        Language:
        <LanguageDropdown
          currentLanguage={currentLanguage}
          languageList={languageList}
        />
      </Link>
    </nav>
  );
};

export default NavBar;

