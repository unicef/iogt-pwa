import { h } from 'preact'
import { Link } from 'preact-router/match'
// import { Layout, Section } from "preact-layout";
import style from './style.css'

import  { Component } from 'react'

import Navbar from './navbar.js'
import Searchbar from './searchbar.js'
const Header = () => {
  let categoriesArray = [
    {
      topicTitle: 'Coronavirus (Covid-19)',
      topicList: [
        'About Coronavirus',
        'Student Toolkit',
        'COVID-19 Parenting',
        'Health Worker Resources',
      ],
    },
    {
      topicTitle: 'Youth',
      topicList: [
        'Internet Safety',
        'Career Advice',
        "Girl's Zone",
        'Freedom for Girls',
        'HIV / AIDS and Safe Sex',
        'The Future is Yours!',
        'Act for Climate',
        'End Violent',
        'U-Report',
        'Sustainable Goals - Practical Guide',
        'Your Rights',
      ],
    },
    {
      topicTitle: 'Parents & Caregivers',
      topicList: [
        'Vaccines',
        'Pre-School Years',
        'Nutrition and Breastfeeding',
        'Early Life Tips!',
        'Facts for Life',
      ],
    },
  ]
  return (
    <header class={style.header}>
      <div class={style['header-logo-search-signin']}>
        <Link class={style['logo']} href="/"><img src='/assets/icons/Logo-with-text.png' /></Link>
        <Searchbar />
        <Link class={style['signin']} activeClassName={style.active} href="/signin">Sign in</Link>
      </div>
      <Navbar categories={categoriesArray} />
    </header>
  )
}

export default Header
