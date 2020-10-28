import { h } from 'preact'
import { Link } from 'preact-router/match'
// import { Layout, Section } from "preact-layout";
import style from './style.css'

import CategoriesDropdown from './categories-dropdown.js'
import LanguageDropdownMenu from './language-dropdown-menu'

const NavBar = (props) => {
  let currentLanguage = props.currentLanguage
  let languageList = props.languageList

  const navLinks = [
    {
      text: 'All Articles',
      class: style.articles,
      imgSrc: '../../assets/icons/nav-icons/globe-green.png',
      imgSwap: '../../assets/icons/nav-icons/globe-white.png',
      hrefText: '/section/all-articles',
    },
    {
      text: 'Parents & Caregivers',
      class: style.parents,
      imgSrc: '../../assets/icons/nav-icons/parent-green.png',
      imgSwap: '../../assets/icons/nav-icons/parent-white.png',
      hrefText: '/section/parents-and-caregivers',
    },
    {
      text: 'Girls',
      class: style.girls,
      imgSrc: '../../assets/icons/nav-icons/girl-green.png',
      imgSwap: '../../assets/icons/nav-icons/girl-white.png',
      hrefText: '/section/girls',
    },
    {
      text: '',
      class: style['tablet-ellipsis'],
      imgSrc: '',
      // imgSrc: '../../assets/icons/nav-icons/horiz-ellipsis-green.png',
      icon: 'more_horiz',
      hrefText: '/section',
    },
    {
      text: 'Youth',
      class: style.youth,
      imgSrc: '../../assets/icons/nav-icons/boy-green.png',
      imgSwap: '../../assets/icons/nav-icons/boy-white.png',
      hrefText: '/section/youth',
    },
    {
      text: 'Health Providers',
      class: style['health-providers'],
      imgSrc: '../../assets/icons/nav-icons/healthcare-green.png',
      imgSwap: '../../assets/icons/nav-icons/healthcare-white.png',
      hrefText: '/section/health-providers',
    },
    {
      text: 'See More',
      class: style['see-more'],
      imgSrc: '',
      icon: 'more_vert',
      hrefText: '/7',
    },
  ]

  return (
    <nav class={style.nav}>
      <CategoriesDropdown
        activeClassName={style.active}
        categories={props.categories}
      />
      {navLinks.map((link) => (
        <div class={link.class}>
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
          </Link>
        </div>
      ))}
      <Link class={style.language}>
        Language:
        <LanguageDropdownMenu
          currentLanguage={currentLanguage}
          languageList={languageList}
        />
      </Link>
    </nav>
  )
}

export default NavBar
