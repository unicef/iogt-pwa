import { h } from 'preact'
import { Link } from 'preact-router/match'
// import { Layout, Section } from "preact-layout";
import style from './style.css'

import { Component } from 'react'

import CategoriesDropdown from './categories-dropdown.js'

const NavBar = (props) => {
  const navLinks = [
    {
      text: 'All Articles',
      class: style.articles,
      imgSrc: '../../assets/icons/nav-icons/globe-green.png',
      imgSwap: '../../assets/icons/nav-icons/globe-white.png',
      hrefText: '/1',
    },
    {
      text: 'Parents & Caregivers',
      class: style.parents,
      imgSrc: '../../assets/icons/nav-icons/parent-green.png',
      imgSwap: '../../assets/icons/nav-icons/parent-white.png',
      hrefText: '/2',
    },
    {
      text: 'Girls',
      class: style.girls,
      imgSrc: '../../assets/icons/nav-icons/girl-green.png',
      imgSwap: '../../assets/icons/nav-icons/girl-white.png',
      hrefText: '/3',
    },
    {
      text: '',
      class: style['tablet-ellipsis'],
      imgSrc: '',
      // imgSrc: '../../assets/icons/nav-icons/horiz-ellipsis-green.png',
      icon: 'more_horiz',
      hrefText: '/4',
    },
    {
      text: 'Youth',
      class: style.youth,
      imgSrc: '../../assets/icons/nav-icons/boy-green.png',
      imgSwap: '../../assets/icons/nav-icons/boy-white.png',
      hrefText: '/5',
    },
    {
      text: 'Health Providers',
      class: style['health-providers'],
      imgSrc: '../../assets/icons/nav-icons/healthcare-green.png',
      imgSwap: '../../assets/icons/nav-icons/healthcare-white.png',
      hrefText: '/6',
    },
    {
      text: 'See More',
      class: style['see-more'],
      imgSrc: '',
      icon: 'more_vert',
      hrefText: '/7',
    },
    { text: 'Language:\n ', class: style.language, imgSrc: '', hrefText: '/8' },
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
            {link.text == 'Language:\n ' ? (
              <select>
                <option value='English'>English</option>
                <option value='Arabic'> العربيّة</option>
                <option value='FRANÇAIS'>FRANÇAIS</option>
                <option value='ESPAÑOL'>ESPAÑOL</option>
                <option value='PORTUGUÊS'>PORTUGUÊS</option>
                <option value='РУССКИЙ'> РУССКИЙ</option>
              </select>
            ) : (
              ''
            )}
          </Link>
        </div>
      ))}
    </nav>
  )
}

export default NavBar
