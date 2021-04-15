import { FunctionalComponent, h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';


type CategoriesDropdownProps = {
  categories: Topic[]
}

interface Topic {
  topicTitle: string
  topicList: string[]
}


const CategoriesDropdown: FunctionalComponent<CategoriesDropdownProps> = ({ categories }: CategoriesDropdownProps) => {

  // Add in subsubtopics / article titles
  //TODO: Will need to update this to match with database info
  let thirdLevel = [
    { title: "Read to Your Child about COVID", link: "" },

    { title: "Children with Disabilities", link: "" }
  ]

  let fourthLevel = [
    { title: "Children with Disabilities", link: "" }
  ]

  const formatUrl = (text: string) =>
    text.split(' ').join('-').toLowerCase()

  return (
    <div class={style['categories-dropdown']}>
      <div class={style['btn-group']}>
        <button class={style['categories-btn']}>All Categories </button>
        <button class={style['categories-btn-arrow']}>
          <i class="material-icons icon">arrow_drop_down</i>
        </button>
      </div>
      <div class={style['categories-dropdown-content']}>
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
                  {topic.topicList.map((topicItem) => (
                    <li>
                      <Link activeClassName={'dl-item'} href={`/section/${formatUrl(topic.topicTitle)}/${formatUrl(topicItem)}`}>
                        <span>
                          {topicItem}
                          <label for={`${topic}${index}`}></label>
                        </span>

                        {/* Level 3 & 4 */}
                        {/*  */}
                        <ul class={style['categories-subsubtopic-content']} >
                          {thirdLevel.map((subsubtopic, index: number) =>
                            <li>
                              <Link href={subsubtopic.link}>
                                <span>{subsubtopic.title}
                                  <label for={`subsubtopic${index}`}></label>
                                </span>

                                <ul class={style['categories-subsubsubtopic-content']}>

                                  {fourthLevel.map((subsubsubtopic, index: number) =>
                                    <li>
                                      <Link href={subsubsubtopic.link}>
                                        <span>{subsubsubtopic.title}</span>
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
