import { h } from 'preact'
import { Link } from 'preact-router/match'
// import { Layout, Section } from "preact-layout";
import style from './style.css'

// If user is signed in, will display input box. Otherwise, just the comments.
const CommentsSection = (props) => {
  let isSignedIn = true
  return (
    <div class={style['comments-section']}>

      {/* Comment Input Box. If user is signed in will show comment input otherwise, there will be a prompt to log in */}
      <div class={style['comments-input-section']}>
        {isSignedIn ?
        <label for='comments-input-form'>Leave a Comment Below: </label>
        :<p><Link href="/">Log in</Link> to leave a comment!</p>}
        {isSignedIn ?

        <form action='/action_page.php' class={style['comments-input-form']}>
          <textarea class={style['comments-input']} name='comment' form='comments-input-form' placeholder="Start typing here...">

          </textarea><input type="submit" value="Send"/>
        </form>: ''}

      </div>

     {/* Display all comments */}
    </div>
  )
}

export default CommentsSection
