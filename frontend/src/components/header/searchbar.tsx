 import { FunctionalComponent, h } from 'preact';
import { Link } from 'preact-router/match'
import style from './style.css'

const SearchBar: FunctionalComponent = () => {
    return (
      <form id='search-bar' role='search' class={style['search-bar']}>
      <input type='text' placeholder='Enter your search here...' />
      <button type='submit'>
        <i class='material-icons'>search</i>
      </button>
    </form>
    );
};

export default SearchBar;
