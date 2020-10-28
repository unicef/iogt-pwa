import { h } from 'preact'
import { Link } from 'preact-router/match'
// import { Layout, Section } from "preact-layout";
import style from './style.css'

const SearchBar = () => {
  return (
    <form id='search-bar' role='search' class={style['search-bar']}>
      <input type='text' placeholder='Enter your search here...' />
      <button type='submit'>
        <i class='material-icons'>search</i>
      </button>
    </form>
  )
}

export default SearchBar
