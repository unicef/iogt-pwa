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

  const navLinks: NavLinks[] = [
    {
      text: 'Home',
      class: style.articles,
      imgSrc: '../../assets/icons/nav-icons/star-yellow.svg',
      imgSwap: '../../assets/icons/nav-icons/star-white.svg',
      hrefText: '/section/all-articles',
      subtopics: []
    },
    {
      text: 'Parents & Caregivers',
      class: style.parents,
      imgSrc: '../../assets/icons/nav-icons/family-brown.svg',
      imgSwap: '../../assets/icons/nav-icons/family-white.svg',
      hrefText: '/section/parents-and-caregivers',
      subtopics: []
    },
    {
      text: 'Girls',
      class: style.girls,
      imgSrc: '../../assets/icons/nav-icons/woman-green.svg',
      imgSwap: '../../assets/icons/nav-icons/woman-white.svg',
      hrefText: '/section/girls',
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
      text: 'Youth',
      class: style.youth,
      imgSrc: '../../assets/icons/nav-icons/youth-tan.svg',
      imgSwap: '../../assets/icons/nav-icons/youth-white.svg',
      hrefText: '/section/youth',
      subtopics: []
    },
    {
      text: 'Coronavirus (Covid-19)',
      class: style['health-providers'],
      imgSrc: '../../assets/icons/nav-icons/doctor-red.svg',
      imgSwap: '../../assets/icons/nav-icons/doctor-white.svg',
      hrefText: '/section/health-providers',
      subtopics: []
    },
    {
      text: 'See More',
      class: style['see-more'],
      imgSrc: '',
      icon: 'more_vert',
      hrefText: '/7',
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
      <CategoriesDropdown
        // activeClassName={style.active}
        categories={categories}
      />
      {navLinks.map((link) => (
        // Nav Item and Subtopic dropdown
        <div class={`${link.class} ${style}[nav-bar-item]`}>
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
            {link.text}
            {/* Subtopics - to appear on hover*/}
            {!!link.subtopics.length &&
              <ul class={style['subtopic-dropdown-content']}>
                {link.subtopics.map((subtopic, index) =>
                  <li>
                    <Link href={`${link.hrefText}/${subtopic.split(' ').join('-').toLowerCase()}`}>
                      <span>{subtopic}</span>
                      <label for={`${subtopic}${index}`}></label>
                    </Link>
                    <ul class={style['subsubtopic-content']}>
                    {thirdLevel.map((subsubtopic, index:number) =>
                      <li>
                        <Link href={subsubtopic.link}>
                          <span>{subsubtopic.title}</span>
                          <label for={`${index}`}></label>
                        </Link>
                        <ul class={style['subsubsubtopic-content']}>
                        {fourthLevel.map((subsubsubtopic, index:number) =>
                          <li>
                        <Link href={subsubsubtopic.link}>
                          <span>{subsubsubtopic.title}</span>
                          <label for={`${index}`}></label>
                        </Link>
                          </li>)}
                        </ul>

                      </li>)}
                    </ul>
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

