import { FunctionalComponent, h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

type ShareSaveProps = {
  //isSaved: boolean --> should eventually come from specific user account information
}

const ShareSaveButtons: FunctionalComponent<ShareSaveProps> = (props: ShareSaveProps) => {
  let isSaved = false;
  return (
    <div class={style['share-save-section']}>
      <button class={style.share}>
        <img src="../../assets/icons/nav-icons/forward-green.png" />
        <span>Share this Article</span>
      </button>

      <button class={style.save}>
        <i class="material-icons">{isSaved ? 'bookmark' : 'bookmark_border'}</i>
        <span>{isSaved ? 'Unsave ' : 'Save '} this Article</span>
      </button>
    </div>
  );
};

export default ShareSaveButtons;
