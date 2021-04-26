import { FunctionalComponent, h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';
import { formatUrl } from '../../utils'


import { Topic } from '../../types'

type CategoriesDropdownProps = {
  categories: Topic[]
}

const CategoriesDropdown: FunctionalComponent<CategoriesDropdownProps> = ({ categories }: CategoriesDropdownProps) => {

  // Add in subsubtopics / article titles
  //TODO: Will need to update this to match with database info
  let thirdLevel = [
    { topicTitle: "Read to Your Child about COVID", subtopics: [] },

    { topicTitle: "Children with Disabilities", subtopics: [] }
  ]

  let fourthLevel = [
    { topicTitle: "Example" }
  ]

  let flag = true;

  // let clickCategoriesButton = () => {
  //   if (flag)
  //     document.getElementById('categories-dropdown-content')?.classList.add("show");
  //   else
  // }

  return (
    <div class={style['categories-dropdown']}>

      <input type="checkbox" class={style.collapse} id={'all-categories-checkbox'} />

      {/* All Categories Button for Tablet/ Desktop */}
      <label class="clicker" for={'all-categories-checkbox'}>
        <div class={style['btn-group']}>
          <span class={style['categories-btn']}>All Categories
          </span>
          <span class={style['categories-btn-arrow']}>
            <i class="material-icons icon">arrow_drop_down</i>
          </span>
        </div>
      </label>

      <div class={`${style['categories-dropdown-content']}  `}>
        <ul >
          {categories.map((topic, index) => (
            <li>
              <Link class={style['subtopic']} activeClassName={style.active} href={`/section/${formatUrl(topic.topicTitle)}`}
              >
                <span>
                  {topic.topicTitle}
                  <label for={`${topic}${index}`}></label>
                </span>

                <ul class={style['categories-subtopic-content']}>
                  {topic.subtopics && topic.subtopics.map((topicItem) => (
                    <li>
                      <Link activeClassName={'dl-item'} href={`/section/${formatUrl(topic.topicTitle)}/${formatUrl(topicItem.topicTitle)}`}>
                        <span>
                          {topicItem.topicTitle}
                          <label for={`${topic}${index}`}></label>
                        </span>

                        {/* Level 3 & 4 */}
                        {/*  */}
                        <ul class={style['categories-subsubtopic-content']} >
                          {thirdLevel.map((subsubtopic, index: number) =>
                            <li>
                              <Link href={`/section/${formatUrl(topic.topicTitle)}/${formatUrl(topicItem.topicTitle)}/${formatUrl(subsubtopic.topicTitle)}`} >
                                <span>{subsubtopic.topicTitle}
                                  <label for={`subsubtopic${index}`}></label>
                                </span>

                                <ul class={style['categories-subsubsubtopic-content']}>

                                  {fourthLevel.map((subsubsubtopic, index: number) =>
                                    <li>
                                      <Link href={`/section/${formatUrl(topic.topicTitle)}/${formatUrl(topicItem.topicTitle)}/${formatUrl(subsubtopic.topicTitle)}/${formatUrl(subsubsubtopic.topicTitle)}`}>
                                        <span>{subsubsubtopic.topicTitle}</span>
                                        {/* <label for={`subsubtopic${index}`}></label> */}
                                      </Link>
                                    </li>)}
                                </ul>

                              </Link>
                            </li>)}
                        </ul>



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
  );
};

export default CategoriesDropdown;
