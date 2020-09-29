import { h } from 'preact'
import { Link } from 'preact-router/match'
// import { Layout, Section } from "preact-layout";
import style from './style.css'


import React, { Component } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Searchbar = () => {
  return (
    <form class={style['search-bar']} id="search-bar">
      <input type='text' placeholder='Search' />
      <button type='submit'>
      <FontAwesomeIcon icon={faSearch} color = "#959BAC" />
      </button>
    </form>
  )
}

export default Searchbar
