import { h } from 'preact'
import { Link } from 'preact-router/match'
import style from './style.css'


const CategoriesDropdown = (props) => (
  <div class={style['categories-dropdown']}>
    <div class={style['btn-group']}>
    <button class={style['categories-btn']}>All Categories </button>
    <button class={style['categories-btn-arrow']}>
    <i class="material-icons icon">arrow_drop_down</i>
        </button>
     </div>
    <div class={style['categories-dropdown-content']}>
      <dl>
        {props.categories.map((topic) => (
          <span>
            <Link class={style['dl-title']} activeClassName={style.active} href='/'>
              <dt>{topic.topicTitle}
              <i class="material-icons">arrow_drop_up</i>
              </dt>
            </Link>
            {topic.topicList.map((topicItem) => (
              <Link activeClassName={style.active} href='/'>
                <dd>{topicItem}</dd>
              </Link>
            ))}
            </span>
        ))}
      </dl>
    </div>
  </div>
)

export default CategoriesDropdown
