import { FunctionalComponent, h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

type FooterProps = {
    categories: Topic[]
}

interface Topic {
    topicTitle: string
    topicList: string[]
}

const Footer: FunctionalComponent<FooterProps> = ({ categories }: FooterProps) => (
    <footer className={style.footer}>
        <nav>
            {/* Display Topic Titles and Subtopics */}
            {categories.map((topic) => (
                <div className={style.links}>
                    <span>{topic.topicTitle.toUpperCase()}</span>
                    {topic.topicTitle === 'Youth' &&
                        <div style={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap'}}>
                            {/* <div className={style.column}> */}
                                {topic.topicList.map((topicItem) => (
                                    <Link style={{ width: '100%' }} activeClassName={style.active} href='/'>
                                        {topicItem.toUpperCase()}
                                    </Link>
                                ))}
                            </div>}

                    {topic.topicTitle !== 'Youth' && topic.topicList.map((topicItem: string) => (
                        <Link activeClassName={style.active} href='/'>
                            {topicItem.toUpperCase()}
                        </Link>
                    ))}
                </div>
            ))}
            {/* <div className={style.links}>
                <span>CORONAVIRUS (COVID-19)</span>
                <Link activeClassName={style.active} href='/'>
                    ABOUT CORONAVIRUS
                </Link>
                <Link activeClassName={style.active} href='/'>
                    STUDENT TOOLKIT
                </Link>
                <Link activeClassName={style.active} href='/'>
                    COVID-19 PARENTING
                </Link>
                <Link activeClassName={style.active} href='/'>
                    HEALTH WORKER RESOURCES
                </Link>
            </div>
            <div className={style.links}>
                <span>YOUTH</span>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <div className={style.column}>
                        <Link activeClassName={style.active} href='/'>
                            INTERNET SAFETY
                    </Link>
                        <Link activeClassName={style.active} href='/'>
                            CAREER ADVICE
                    </Link>
                        <Link activeClassName={style.active} href='/'>
                            GIRL'S ZONE
                    </Link>
                        <Link activeClassName={style.active} href='/'>
                            FREEDOM FOR GIRLS
                    </Link>
                        <Link activeClassName={style.active} href='/'>
                            HIV / AIDS AND SAFE SEX
                    </Link>
                        <Link activeClassName={style.active} href='/'>
                            THE FUTURE IS YOURS!
                    </Link>
                    </div>
                    <div className={style.column}>
                        <Link activeClassName={style.active} href='/'>
                            ACT FOR CLIMATE
                    </Link>
                        <Link activeClassName={style.active} href='/'>
                            END VIOLENCE
                    </Link>
                        <Link activeClassName={style.active} href='/'>
                            U-REPORT
                    </Link>
                        <Link activeClassName={style.active} href='/'>
                            SUSTAINABLE GOALS - PRACTICAL GUIDE
                    </Link>
                        <Link activeClassName={style.active} href='/'>
                            YOUR RIGHTS
                    </Link>
                    </div>
                </div>
            </div>
            <div className={style.links}>
                <span>PARENTS & CAREGIVERS</span>
                <Link activeClassName={style.active} href='/'>
                    VACCINES
                </Link>
                <Link activeClassName={style.active} href='/'>
                    PRE-SCHOOL YEARS
                </Link>
                <Link activeClassName={style.active} href='/'>
                    NUTRITION AND BREASTFEEDING
                </Link>
                <Link activeClassName={style.active} href='/'>
                    EARLY LIFE TIPS!
                </Link>
                <Link activeClassName={style.active} href='/'>
                    FACTS FOR LIFE
                </Link>
            </div> */}
        </nav>
        <div className={style.copyright}>
            <div className={style.logo}>
                <img src={'../../assets/icons/iogt_logo.svg'} />
            </div>
            <div className={style.links}>
                <Link>Terms of Use</Link>
                <Link>Privacy Policy</Link>
                <Link>About Us</Link>
            </div>
            <div>
                <span> &#169; The Internet of Good Things. All Rights Reserved.</span>
            </div>
        </div>
    </footer>
);

export default Footer;
