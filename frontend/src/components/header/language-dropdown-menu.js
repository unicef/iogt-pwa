import { h } from 'preact'
import { Link } from 'preact-router/match'
import style from './style.css'

const LanguageDropdownMenu = (props) => {
  let languageList = props.languageList
  let currentLanguage = props.currentLanguage
  return (
    <div class={style['language-dropdown']}>
      <Link>
        {currentLanguage}
        <i class='material-icons'></i>
      </Link>
      <div class={style['language-dropdown-content']}>
        {languageList.map((language) => (
          <Link
            class={style['language-name']}
            href='/'
          >
            {language}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default LanguageDropdownMenu
