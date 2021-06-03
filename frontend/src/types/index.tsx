// Guess at how Article data will look like, will need to update this, or convert incoming Article text
export interface Article {
  id: number
  img_src: string
  tag: string
  tag_meta: string
  date: string // possibly make Date type in future
  author: string
  title: string
  desc: string
  text: string // assumes this will be markdown style text
  comments: Comment[] | null | []
  relatedArticles: number[]|null // stores article ids
}
// Notes: 'Categories' has an array of Topics
export interface Topic {
  topicTitle: string
  subtopics?: Topic[]
  color?: any
}

// Similar to Topic but this includes articles
export interface Section {
  topicTitle: string
  articles: Article[]
  subtopics?: Topic[]
  color?: any // rgb or hex value
}

// As of now this is a assumption of what comment format looks like (Comments with one level of replies), will need to update according to backend format
export interface Reply {
  userName: string
  comment: string
}

export interface Comment {
  userName: string
  comment: string
  replies: Reply[] | null
}


