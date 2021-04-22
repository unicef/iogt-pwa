import { FunctionalComponent, h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

import {Topic} from '../../types'

import NavBar from './navbar';
import HeaderTop from './header-top';

type HeaderProps = {
    currentLanguage: string;
    languageList: string[]
    categories: Topic[]
    signedInStatus : boolean
}


const Header: FunctionalComponent<HeaderProps> = ({ currentLanguage, languageList, categories, signedInStatus }: HeaderProps) => {

    return (
        <header class={style.header}>
            <HeaderTop
                currentLanguage={currentLanguage}
                languageList={languageList}
                signedInStatus={signedInStatus}
            />
            <NavBar
                currentLanguage={currentLanguage}
                languageList={languageList}
                categories={categories}
            />
        </header>
    );
};

export default Header;
