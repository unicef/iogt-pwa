import { FunctionalComponent, h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

import NavBar from './navbar';
import HeaderTop from './header-top';
import Router, { Route } from 'preact-router';

type HeaderProps = {
  currentLanguage: string;
  languageList: string[];
  categories: Topic[];
  signedInStatus: boolean;
};

interface Topic {
  topicTitle: string;
  topicList: string[];
}

const Nothing = () => <></>;

const Tabs = () => (
  <nav class={style.tabs}>
    <Link activeClassName={style.active} href='/account/signin'>
      Sign in
    </Link>
    <Link activeClassName={style.active} href='/account/register'>
      Register
    </Link>
  </nav>
);

const Header: FunctionalComponent<HeaderProps> = ({
  currentLanguage,
  languageList,
  categories,
  signedInStatus,
}: HeaderProps) => {
  return (
    <header class={style.header}>
      <HeaderTop
        currentLanguage={currentLanguage}
        languageList={languageList}
        signedInStatus={signedInStatus}
      />
      <Router>
        {/* don't render navbar if in sign in view */}
        <Route path='/account/:option' component={Tabs} />
        <NavBar
          default
          currentLanguage={currentLanguage}
          languageList={languageList}
          categories={categories}
        />
      </Router>
    </header>
  );
};

export default Header;
