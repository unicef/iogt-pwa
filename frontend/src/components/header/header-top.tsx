import { FunctionalComponent, h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';
import { Icon } from 'preact-material-components/Icon';
import { formatUrl } from '../../utils'

import { useState, useEffect, useContext } from 'preact/hooks';
import { Categories } from '../app'
import CategoriesDropdown from './categories-dropdown'
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
  zIndex: '100',
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

  const categories = useContext(Categories);
  let joinStatus = signedInStatus ? 'My Profile' : 'Join';

  // Modal state and related functions
  const [modalOpen, setModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);

  const selectModal = () => {
    setModalOpen(!modalOpen); // true/false toggle
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  // For Feature and Mobile: Will close Tablet/ Desktop Login Modal if it is open
  useEffect(() => {
    function handleResize() {
      var x = window.matchMedia("(max-width: 767px)")
      console.log("MODAL", x)
      if (x.matches && modalOpen) setModalOpen(false)
    }
    window.addEventListener('resize', handleResize)
  })

  // Add in subsubtopics / article titles
  //TODO: Will need to update this to match with database info
  let thirdLevel = [
    { topicTitle: "Read to Your Child about COVID", subtopics: [] },

    { topicTitle: "Children with Disabilities", subtopics: [] }
  ]

  let fourthLevel = [
    { topicTitle: "Example Subsection" }
  ]


  const Login = () => (
    <div class={style.loginComponent}>
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
          onClick={() => setModalIndex(1)}
          style={{
            fontWeight: 400,
            textDecoration: 'underline',
            marginLeft: '1%',
            marginBottom: '3%',
            cursor: 'pointer',
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
          backgroundColor='#6EC17F'
        />
      </div>
    </div>
  );

  const Signup = () => (
    <div class={style.signupComponent}>
      <div class={style.loginHeader}>
        <h3>Be a part of</h3>
        <img
          style={{ width: '35%' }}
          src={'../../assets/icons/iogt_logo.svg'}
        />
      </div>
      <div class={style.signupText}>
        <span style={{ fontWeight: 300 }}>Already have an account?</span>
        <span
          onClick={() => setModalIndex(0)}
          style={{
            fontWeight: 400,
            textDecoration: 'underline',
            marginLeft: '1%',
            marginBottom: '3%',
            cursor: 'pointer',
          }}
        >
          Sign in.
        </span>
      </div>
      <div class={style.loginContent}>
        <input
          class={style.textField}
          type='text'
          id='username'
          name='username'
          placeholder='CHOOSE A USERNAME'
        />
        <label for='username'>
          This name you will use to log in and won't appear to other users. Only
          you will see this.
        </label>
        <input
          type='number'
          min='1900'
          max='2099'
          step='1'
          class={style.textField}
          id='birthdate'
          name='birthdate'
        />
        <label for='birthdate'>
          Let us know your birth year to get access to exclusive content.
        </label>
        <select class={style.textField} id='gender' name='gender'>
          <option value=''>--Please choose an option--</option>
          <option value='male'>Male</option>
          <option value='female'>Female</option>
          <option value='transgender'>Transgender</option>
          <option value='non-binary'>Non-binary</option>
          <option value='other'>Other</option>
        </select>
        <label for='gender'>Only you will see this.</label>
        <input
          class={style.textField}
          type='text'
          id='address'
          name='address'
          placeholder='WHERE DO YOU LIVE'
        />
        <label for='address'>Only you will see this.</label>
        <input
          class={style.textField}
          type='password'
          id='pass'
          name='password'
          placeholder='CHOOSE 4-DIGIT PIN'
        />
        <label for='pass' style={{ marginBottom: '5%' }}>
          e.g. 1234
        </label>
        <div class={style.checkbox} style={{ marginTop: 10 }}>
          <input type='checkbox' id='horns' name='horns' />
          <label for='logged-in'>I accept the terms and conditions</label>
        </div>
        <FullWidthButton
          text='Sign Up'
          width='100%'
          backgroundColor='#20cd84'
        />
      </div>
    </div>
  );

  const modalViews = [<Login />, <Signup />];

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
          <div class={style.content}>
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
            href='/account/signin'
            class={style['signin']}
            activeClassName={style.active}
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

          <div>
            <input type="checkbox" id='burger-checkbox' class={style.collapse} />
            <label class="clicker" for='burger-checkbox' >
              <Icon class='material-icons'>menu</Icon>
            </label>

            {/* Burger Menu */}
            <div class={style.hiddendiv} >
              <div class={`${style['burger-content']}  `}>
                <ul >
                  {categories.map((topic, index1) => (
                    <li>
                      <Link
                        //class={style['subtopic']}
                        activeClassName={style.active} href={`/section/${formatUrl(topic.topicTitle)}`}
                      >
                        <span>
                          {topic.topicTitle}
                          <label for={`${topic}${index1}`}></label>
                        </span>

                        <ul
                        //class={style['subtopic-dropdown-content']}
                        >
                          {topic.subtopics && topic.subtopics.map((topicItem, index2) => (
                            <li>
                              <Link href={`/section/${formatUrl(topic.topicTitle)}/${formatUrl(topicItem.topicTitle)}`}>
                                <span>
                                  {topicItem.topicTitle}
                                  <label for={`${topic}${index2}`}></label>

                                  <Icon>chevron_right</Icon>



                                </span>

                                {/* Level 3 & 4 */}



                              </Link>
                            </li>
                          ))}

                        </ul>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
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
          onPointerDown={selectModal}
        >
          {/* If signed in display profile icon */}
          {signedInStatus ? (
            <img src='../../assets/icons/nav-icons/profile-icon-grey.png' />
          ) : (
            ''
          )}

          {signedInStatus ? 'Sign Out' : 'Sign In'}
        </Link>

        <Modal
          isOpen={modalOpen}
          closeModal={() => {
            setModalIndex(0);
            closeModal();
          }}
          style={customStyles}
          contentLabel='Login Modal'
        >
          <div>
            {/* <div class={style.loginHeader}>
              <h3>Login into</h3>
              <img style={{ width: '35%' }} src={'../../assets/icons/iogt_logo.svg'} />
            </div>
            <div class={style.signupText}>
              <span style={{ fontWeight: 300 }}>Need an account?</span>
              <span style={{ fontWeight: 400, textDecoration: 'underline', marginLeft: '1%', marginBottom: '3%' }}>Sign up.</span>
            </div>
            <div class={style.loginContent}>
              <input class={style.textField} type="text" id="username" name="username" placeholder="USERNAME"></input>
              <input class={style.textField} type="password" id="pass" name="password" placeholder="4-DIGIT PIN"></input>
              <span class={style.forgotPin}>Forgot your pin?</span>
              <div class={style.checkbox}>
                <input type="checkbox" id="horns" name="horns" />
                <label for="logged-in">Stay logged in</label>
              </div>
              <FullWidthButton text='Sign In' width='100%' backgroundColor='#6EC17F' />
            </div>
          </div> */}
            {modalViews[modalIndex]}
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default HeaderTop;
