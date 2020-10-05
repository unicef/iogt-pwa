import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

import NavBar from './navbar.js'
import HeaderTop from './header-top.js'

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
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet" />
<link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;1,400&display=swap" rel="stylesheet" />
      <HeaderTop />
      <NavBar categories={categoriesArray} />
    </header>
  )
}

export default Header
