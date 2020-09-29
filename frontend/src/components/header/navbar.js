import { h } from 'preact'
import { Link } from 'preact-router/match'
// import { Layout, Section } from "preact-layout";
import style from './style.css'

import  { Component } from 'react'

import CategoriesDropdown from './categoriesDropdown.js'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons'

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.mediaQuery = {
      desktop: 1200,
      tablet: 768,
      mobilePhone: 360,
      featurePhone: 240
    }

    this.navbarLinks = [
      { text: 'Top Stories', hrefText: '/' },
      { text: 'News for You', hrefText: '/profile' },
      { text: 'Most Recent', hrefText: '/2' },
      { text: 'Corona Virus', hrefText: '/3' },
      { text: 'Youth', hrefText: '/4' },
      { text: 'Parents & Caregivers', hrefText: '/5' },
    ]

    this.mobileLinks =[
      {text: 'All Articles', imgSrc: "../../assets/icons/nav-icons/globe.png", hrefText: '/'},
      {text: 'Parents & Caregivers', imgSrc: "../../assets/icons/nav-icons/parent.png", hrefText: '/2'},
      {text: 'Girls', imgSrc: "../../assets/icons/nav-icons/girl.png", hrefText: '/3'},
      {text: 'Youth', imgSrc: "../../assets/icons/nav-icons/boy.png", hrefText: '/4'},
      {text: 'Coronavirus (COVID-19)', imgSrc: "../../assets/icons/nav-icons/healthcare.png", hrefText: '/5'},
    ]

    this.state = {
      windowWidth: null,
      mediaQueryResult: '',
      clientScreenWidth: ''
    }
  }

  componentDidMount() {
    console.log(document.body.clientWidth, 'clientscreenwidth')
    // window.addEventListener('resize', () => {
    //   this.setState({windowWidth: document.body.clientWidth})
    // });
    let mediaQueryResult =
      document.body.clientWidth >= this.mediaQuery.desktop
        ? 'desktop'
        : document.body.clientWidth >= this.mediaQuery.tablet
        ? 'tablet'
        : document.body.clientWidth >= this.mediaQuery.mobilePhone
        ? 'mobilePhone'
        : 'featurePhone'

    this.setState({ mediaQueryResult, clientScreenWidth:document.body.clientWidth })
    console.log(mediaQueryResult, 'device')
  }


  //  componentDidUpdate(){
  //     this.setState({clientScreenWidth: document.body.clientWidth})
  //   }

  render() {
    let props = this.props

    // this.state.windowWidth > this.mediaQuery.desktop ? this.setState({mediaQueryResult: 'desktop'}):
    // this.state.windowWidth > this.mediaQuery.tablet ? this.setState({mediaQueryResult: 'tablet'}) :
    // this.state.windowWidth > this.mediaQuery.mobilePhone ? this.setState({mediaQueryResult: 'mobilePhone'}) :
    // this.state.windowWidth >= this.mediaQuery.featurePhone ? this.setState({mediaQueryResult: 'featurePhone'}) : '';

    //console.log(this.state.mediaQueryResult, 'testing')
    return (
      <nav>
        {this.state.mediaQueryResult == 'desktop' ||
        this.state.mediaQueryResult == 'tablet' ? (
          <CategoriesDropdown
            activeClassName={style.active}
            categories={props.categories}
          />
        ) : (
          ''
        )}

        {this.state.mediaQueryResult == 'desktop'
          ? this.navbarLinks.map((link) => (
              <div>
                <Link activeClassName={style.active} href={link.hrefText}>
                  {link.text}
                </Link>
              </div>
            ))
          : ''}

        {this.state.mediaQueryResult == 'tablet'
          ? this.navbarLinks.slice(0, 3).map((link) => (
              <div>
                <Link activeClassName={style.active} href={link.hrefText}>
                  {link.text}
                </Link>
              </div>
            ))
          : ''}
        {this.state.mediaQueryResult == 'tablet' ? (
          <div>
            <Link activeClassName={style.active} href='/'>
              <FontAwesomeIcon
                class={style['dl-icon']}
                icon={faEllipsisH}
                color='#20CD84'
                size='2x'
              />
            </Link>
          </div>
        ) : (
          ''
        )}

        {this.state.mediaQueryResult == 'desktop' ||
        this.state.mediaQueryResult == 'tablet' ? (
          <div>
            <Link activeClassName={style.active} href='/6'>
              Language:
              <select>
                <option value='English'>EN</option>
                <option value='Spanish'>ES</option>
              </select>
            </Link>
          </div>
        ) : (
          ''
        )}


        {this.state.mediaQueryResult == 'mobilePhone' ||
        this.state.mediaQueryResult == 'featurePhone'
          ? this.mobileLinks.map((link) => (
              <div class={style['mobile-nav-bar']}>

                <Link activeClassName={style.active} href={link.hrefText}><img alt="Clock" src={link.imgSrc} />
                  {link.text}
                </Link>
              </div>
            ))
          : ''}

      </nav>
    )
  }
}

export default Navbar
