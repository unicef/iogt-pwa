import { FunctionalComponent, h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

import { Topic } from '../../types'
import { formatUrl} from '../../utils'


import CategoriesDropdown from './categories-dropdown'
import LanguageDropdown from './language-dropdown'

type NavBarProps = {
  currentLanguage: string;
  languageList: string[]
  categories: Topic[]
}


interface NavLinks {
  text: string
  class: string
  imgSrc?: string
  imgSwap?: string
  icon?: string
  hrefText: string
  subtopics?: Topic[]
}

const NavBar: FunctionalComponent<NavBarProps> = ({ currentLanguage, languageList, categories }: NavBarProps) => {


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
    }
  ]

  navLinks.map(navLink => {
    // Find associated category for link
    let category: Topic[] = categories.filter(category => navLink.text === category.topicTitle)

    // Add in subtopics
    if (category[0] && navLink.subtopics) navLink.subtopics = category[0].subtopics

  })
  // Add in subsubtopics / article titles
  //TODO: Will need to update this to match with database info
  let thirdLevel = [
    { topicTitle: "Read to Your Child about COVID", subtopics: [] },

    { topicTitle: "Children with Disabilities", subtopics: [] }
  ]

  let fourthLevel = [
    { topicTitle: "Example" }
  ]
  return (
    <nav aria-label="primary" class={style.nav}>
      <CategoriesDropdown categories={categories} />
      {navLinks.map((link, index) => (
        // Nav Item and Subtopic dropdown
        <div class={`${link.class} ${style['nav-bar-item']} ${style['nav-bar-item' +index]}`} id={'nav-bar-item' +index}>

          <a href={link.text.toLowerCase()==='home' ? '/':'' }>

          <input type="checkbox" class={style.collapse} id={'nav-bar-checkbox' +index}/>

          <label class="clicker" for={'nav-bar-checkbox' +index}>

          {/* Navlink - Feature and Mobile Version - allows for toggling on and off of menu item */}
          <a class={style['navlink-feature-mobile']}>
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
            </a>
            {/* Navlink - Desktop and Tablet Version - allows user to go to related section */}
                      <Link class={style['navlink-tablet-desktop']}activeClassName={style.active} href={link.hrefText}>

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
            </Link>
          </label>

            {/* Subtopics - to appear on hover*/}
            <div class={style.hiddendiv}>
            {link.subtopics && !!link.subtopics.length &&
              <ul class={`${style['subtopic-dropdown-content']}`} id={'subtopic-dropdown-content' +index}>
                {link.subtopics.map((subtopic, index) =>
                  <li>
                    <Link href={`/section/${formatUrl(link.text)}/${formatUrl(subtopic.topicTitle)}`}
                    >
                      <span>{subtopic.topicTitle}
                        <label for={`${subtopic}${index}`}></label>
                      </span>

                      <ul class={style['subsubtopic-content']}>
                        {thirdLevel.map((subsubtopic, index: number) =>
                          <li>
                            <Link href={`/section/${formatUrl(link.text)}/${formatUrl(subtopic.topicTitle)}/${formatUrl(subsubtopic.topicTitle)}`}>
                              <span>{subsubtopic.topicTitle}
                                <label for={`${index}`}></label>
                              </span>

                              <ul class={style['subsubsubtopic-content']}>
                                {fourthLevel.map((subsubsubtopic, index: number) =>
                                  <li>
                                    <Link href={`/section/${formatUrl(link.text)}/${formatUrl(subtopic.topicTitle)}/${formatUrl(subsubtopic.topicTitle)}/${formatUrl(subsubsubtopic.topicTitle)}`}>
                                      <span>{subsubsubtopic.topicTitle}
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
             </div>
          </a>


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

