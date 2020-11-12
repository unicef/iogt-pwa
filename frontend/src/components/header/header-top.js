import { h } from 'preact'
import { Link } from 'preact-router/match'
import { useState, useEffect } from 'preact/hooks';
import style from './style.css'

import LanguageDropdownMenu from './language-dropdown-menu'
import SearchBar from './searchbar'
import Modal from 'react-modal';

Modal.setAppElement('body');

const HeaderTop = (props) => {
  const [modalStatus,setModalStatus] = useState(false);

  const openModal = () =>{
    setModalStatus(true);
  }

  let languageList = props.languageList
  let currentLanguage = props.currentLanguage //ideally this would be a prop sent in


  let signedIn = false //default value to be replaced

  let joinStatus = signedIn ? 'My Profile' : 'Join'

  return (
    <div class={style['header-top']}>
      {/* Only on Feature Phone: logo-small, current-language, change-language */}
      <div class={style['header-top-language-strip']}>
        <div class={style['current-language']}>
          Language: <span>{currentLanguage}</span>
        </div>
        <div class={style['change-language']}>
          <input type='checkbox' class={style.collapse} id='handel1' />
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

      <div class={style['header-middle']}>
        <Link class={style['logo-small']} href='/'>
          <img src='/assets/icons/logo-small.png' />
        </Link>
        <div class={style['join-menu']}>
          <Link>{joinStatus} </Link>
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
          <LanguageDropdownMenu
            currentLanguage={currentLanguage}
            languageList={languageList}
          />
        </div>

        <div class={style['search-menu']}>
          <Link>
            <icon class='material-icons'>search</icon>
          </Link>
          <Link>
            <icon class='material-icons'>menu</icon>
          </Link>
        </div>
      </div>


      {/* Top Header in tablet and desktop*/}
      <div class={style['tabletDesktopSignin']}>
      <Link class={style['logo-full']} href='/'>
          <img src='/assets/icons/Logo-with-text.png' />
        </Link>
        <SearchBar />

        <Link
          class={style['signin']}
          activeClassName={style.active}
          // href=""
          onClick={()=>setModalStatus(true)}
        >

          {/* If signed in display icon if not dont' */}
         {signedIn? <img src='../../assets/icons/nav-icons/profile-icon-grey.png' />: ''}

          {signedIn? 'Sign out': 'Sign in'}

        </Link>

        <Modal isOpen={modalStatus}>
          <h2>login</h2>
          <button onClick={()=>setModalStatus(false)}>close</button>
        </Modal>
      </div>
    </div>
  )
}

export default HeaderTop
