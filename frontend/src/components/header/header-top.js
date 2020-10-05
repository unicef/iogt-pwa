import { h } from 'preact'
import { Link } from 'preact-router/match'
import style from './style.css'

import SearchBar from './searchbar'

const HeaderTop = () => {
  let currentLanguage = 'English' //ideally this would be a prop sent in
  let languageList = [
    'English',
    'العربيّة',
    'FRANÇAIS',
    'ESPAÑOL',
    'PORTUGUÊS',
    'РУССКИЙ',
  ]
  return (
    <div class={style['header-top']}>
      {/* Only on Feature Phone: logo-small, current-language, change-language */}
      <div class={style['header-grid']}></div>
      <div class={style['header-top-language']}>
        <div class={style['header-language-brief']}>
          <div class={style['current-language']}>
            Current Language: <span>{currentLanguage}</span>
          </div>
          <div class={style['change-language']}>
            <input
              type='checkbox'
              class={style.collapse}
              id='handel1'
            />
            <label for='handel1'>
              Change Language <i class='material-icons'>keyboard_arrow_down</i>
            </label>
            <div class={style['content']}>
              <div class={style['language-list-menu-content']}>
                <ul>
                  {languageList.map((language) => (
                    <li id={language} class={style.languageListItem}>
                      <Link>{language}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class={style['header-middle']}>
        <Link class={style['logo-small']} href='/'>
          <img src='/assets/icons/logo-small.png' />
        </Link>
        <Link class={style['logo-full']} href='/'>
          <img src='/assets/icons/Logo-with-text.png' />
        </Link>
        <div class={style['join-menu']}>
          <Link>Join </Link>
          <Link>Menu </Link>
        </div>


        <div class={style['signin-language']}>
        <Link
        class={style['signin']}
        activeClassName={style.active}
        href='/signin'
      >
        Sign in
      </Link>
          <select>
            <option value="English" >English</option>
                  {languageList.map(language => <option value={language}>{language}</option>)}
          </select>
        </div>
        <div class={style['search-menu']}>
          <Link><icon class="material-icons">search</icon></Link>
          <Link><icon class="material-icons">menu</icon></Link>
        </div>
      </div>
      <SearchBar />
      {/* Sign in is placed near footer on Feature Phone */}
    <div class={style['tabletDesktopSignin']}>
         <Link
        class={style['signin']}
        activeClassName={style.active}
        href='/signin'
      >
         <img src="../../assets/icons/nav-icons/profile-icon-green.png"/>
            Sign out
      </Link>

    </div>
    </div>
  )
}

export default HeaderTop
