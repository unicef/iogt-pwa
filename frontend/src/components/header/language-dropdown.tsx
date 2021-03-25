import React from 'react'

import { FunctionalComponent, h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

type LanguageDropdownProps = {
  currentLanguage: string;
  languageList: string[]
}

const LanguageDropdown: FunctionalComponent<LanguageDropdownProps> = ({ currentLanguage, languageList }: LanguageDropdownProps) => {
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
  );
};

export default LanguageDropdown;
