import { FunctionalComponent, h } from 'preact';
import { useCallback, useState} from 'preact/hooks';

import { Icon } from 'preact-material-components/Icon';
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
    { topicTitle: "Example Subsection" }
  ]


  let flag = true;

  /** Lock Feature for Categories Dropdown - works only with javascript */

  const [categoryDiv3, setCategoryDiv3] = useState('')
  const [categoryDiv4, setCategoryDiv4] = useState('')

    let toggleClass = (index1:number, index2:number, index3?:number) => {

    // Toggle lock for 3rd Level
    let combinedIndex = `${index1} ${index2}`
    if(categoryDiv3 === combinedIndex) setCategoryDiv3('')
    else setCategoryDiv3(combinedIndex)

    // Toggle lock for 4th level if clicked
    if(index3 !== undefined) {
       combinedIndex = `${index1} ${index2} ${index3}`

      if(categoryDiv4 === combinedIndex) setCategoryDiv4('')
      else setCategoryDiv4(combinedIndex)

    }
  }



  return (
    <div class={style['categories-dropdown']}>

      <input type="checkbox" class={style.collapse} id={'all-categories-checkbox'} />

      {/* All Categories Button for Tablet/ Desktop */}
      <label class="clicker" for={'all-categories-checkbox'}>
        <div class={style['btn-group']}>
          <span class={style['categories-btn']}>All Categories
          </span>
          <span class={style['categories-btn-arrow']}>
            <Icon>arrow_drop_down</Icon>
          </span>
        </div>
      </label>

      <div class={`${style['categories-dropdown-content']}  `}>
        <ul >
          {categories.map((topic, index1) => (
            <li>
              <Link class={style['subtopic']} activeClassName={style.active} href={`/section/${formatUrl(topic.topicTitle)}`}
              >
                <span>
                  {topic.topicTitle}
                  <label for={`${topic}${index1}`}></label>
                </span>

                <ul class={style['categories-subtopic-content']}>
                  {topic.subtopics && topic.subtopics.map((topicItem, index2) => (
                    <li>
                      <Link activeClassName={'dl-item'} href={`/section/${formatUrl(topic.topicTitle)}/${formatUrl(topicItem.topicTitle)}`}>
                        <span>
                          {topicItem.topicTitle}
                          <label for={`${topic}${index2}`}></label>
                          <button onClick={()=>toggleClass(index1, index2)}>
                          <Icon>chevron_right</Icon>
                          </button>


                        </span>

                        {/* Level 3 & 4 */}
                        {/*  */}
                        <div class={categoryDiv3 === `${index1} ${index2}` ? style['visible']: style['']}>
                          {/* <Icon>arrow_left</Icon> */}
                        <ul class={style['categories-subsubtopic-content']} >
                          {thirdLevel.map((subsubtopic, index3: number) =>
                            <li>
                              <Link href={`/section/${formatUrl(topic.topicTitle)}/${formatUrl(topicItem.topicTitle)}/${formatUrl(subsubtopic.topicTitle)}`} >
                                <span>

                                  {subsubtopic.topicTitle}
                                  <label for={`subsubtopic${index3}`}></label>

                                  <a href=''>
                                  <button onClick={()=>toggleClass(index1, index2, index3)}>
                          <Icon>chevron_right</Icon>
                          </button>
                          </a>

                                </span>

                            <div class={categoryDiv4 === `${index1} ${index2} ${index3}` ? style['visible']: style['']}>
                                <ul class={style['categories-subsubsubtopic-content']}>

                                  {fourthLevel.map((subsubsubtopic, index: number) =>
                                    <li>
                                      <Link href={`/section/${formatUrl(topic.topicTitle)}/${formatUrl(topicItem.topicTitle)}/${formatUrl(subsubtopic.topicTitle)}/${formatUrl(subsubsubtopic.topicTitle)}`}>
                                        <span>{subsubsubtopic.topicTitle}</span>
                                        {/* <label for={`subsubtopic${index}`}></label> */}
                                      </Link>
                                    </li>)}
                                </ul>
                                </div>
                              </Link>
                            </li>)}
                        </ul>
                          </div>


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
