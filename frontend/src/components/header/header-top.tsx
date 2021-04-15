import { FunctionalComponent, h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';
import { Icon } from 'preact-material-components/Icon';

import { useState, useEffect } from 'preact/hooks';

import LanguageDropdown from './language-dropdown';
import SearchBar from './searchbar';
import modalStyle from '../modal/style.css';
import Modal from '../modal';
import FullWidthButton from '../buttons/fullWidthButton';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    paddingLeft: '5%',
    paddingRight: '5%',
    paddingBottom: '3%',
    backgroundColor: 'white',
    border: 'none',
  },
  overlay: {
    background: 'rgb(218,218,218, 0.5)',
  },
};

type HeaderTopProps = {
  currentLanguage: string;
  languageList: string[];
  signedInStatus: boolean;
};

const HeaderTop: FunctionalComponent<HeaderTopProps> = ({
  currentLanguage,
  languageList,
  signedInStatus,
}: HeaderTopProps) => {
  let joinStatus = signedInStatus ? 'My Profile' : 'Join';

  // Modal state and related functions
  const [modalOpen, setModalOpen] = useState(false);
  const selectModal = () => {
    setModalOpen(!modalOpen); // true/false toggle
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div class={style['header-top']}>
      {/* Only on Feature Phone: (menu pushes down page) logo-small, current-language, change-language */}

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
          <img src='/assets/icons/IOGT-logo-two-lines.png' />
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
          <LanguageDropdown
            currentLanguage={currentLanguage}
            languageList={languageList}
          />
        </div>

        <div class={style['search-menu']}>
          <Link>
            <Icon class='material-icons'>search</Icon>
          </Link>
        </div>
      </div>

      {/* Top Header in tablet and desktop*/}
      <div class={style['tabletDesktopSignin']}>
        <Link class={style['logo-full']} href='/'>
          <img src='/assets/icons/IOGT-logo-two-lines.png' />
        </Link>
        <SearchBar />

        <Link
          class={style['signin']}
          activeClassName={style.active}
          onClick={selectModal}
        >
          {/* If signed in display profile icon */}
          {signedInStatus ? (
            <img src='../../assets/icons/nav-icons/profile-icon-grey.png' />
          ) : (
            ''
          )}

          {signedInStatus ? 'Sign Out' : 'Sign In'}
        </Link>
        {!signedInStatus && (
          <Link
            href='/signup'
            class={style['signin']}
            activeClassName={style.active}
            onClick={selectModal}
          >
            Sign Up
          </Link>
        )}

        <Modal
          isOpen={modalOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel='Login Modal'
        >
          <div>
            <div class={style.loginHeader}>
              <h3>Login into</h3>
              <img
                style={{ width: '35%' }}
                src={'../../assets/icons/iogt_logo.svg'}
              />
            </div>
            <div class={style.signupText}>
              <span style={{ fontWeight: 300 }}>Need an account?</span>
              <span
                style={{
                  fontWeight: 400,
                  textDecoration: 'underline',
                  marginLeft: '1%',
                  marginBottom: '3%',
                }}
              >
                Sign up.
              </span>
            </div>
            <div class={style.loginContent}>
              <input
                class={style.textField}
                type='text'
                id='username'
                name='username'
                placeholder='USERNAME'
              ></input>
              <input
                class={style.textField}
                type='password'
                id='pass'
                name='password'
                placeholder='4-DIGIT PIN'
              ></input>
              <span class={style.forgotPin}>Forgot your pin?</span>
              <div class={style.checkbox}>
                <input type='checkbox' id='horns' name='horns' />
                <label for='logged-in'>Stay logged in</label>
              </div>
              <FullWidthButton
                text='Sign In'
                width='100%'
                backgroundColor='#20cd84'
              />
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default HeaderTop;
