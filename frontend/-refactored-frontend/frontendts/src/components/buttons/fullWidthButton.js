import { h } from 'preact';
import style from './style.css';

const FullWidthButton = ({ text, width,backgroundColor }) => {
  return (
    <div>
      <button class={style.primaryButton} style={{ width: width,backgroundColor:backgroundColor }}>
        <span class={style.buttonLabel}>{text}</span>
      </button>
    </div>
  );
};

export default FullWidthButton;
