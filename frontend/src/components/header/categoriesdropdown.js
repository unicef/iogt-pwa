import { h } from 'preact'
import { Link } from 'preact-router/match'
// import { Layout, Section } from "preact-layout";
import style from './style.css'

import React, { Component } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons'

const CategoriesDropdown = (props) => (
  <div class={style['categories-dropdown']}>
    <button class={style['categories-btn']}>All Categories </button>
    <button class={style['categories-btn-caret']}>
    <FontAwesomeIcon icon={faCaretDown} color = "#FFFFFF" />
        </button>

    <div class={style['categories-dropdown-content']}>
      <dl>
        {props.categories.map((topic) => (
          <React.Fragment activeClassName={style.active}>
            <Link class={style['dl-title']} activeClassName={style.active} href='/'>
              <dt>{topic.topicTitle}<FontAwesomeIcon class={style['dl-icon']}  icon={faCaretUp} color = "#20CD84" /></dt>
            </Link>
            {topic.topicList.map((topicItem) => (
              <Link activeClassName={style.active} href='/'>
                <dd>{topicItem}</dd>
              </Link>
            ))}
          </React.Fragment>
        ))}
      </dl>
    </div>
  </div>
)

export default CategoriesDropdown
