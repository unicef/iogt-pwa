import { h } from 'preact';
import style from './style.css';

const PrimaryButton = ({ text }) => {
  return (
    <div>
      <button class={style.primaryButton}>
        <span class={style.buttonLabel}>{text}</span>
      </button>
    </div>
  );
};

export default PrimaryButton;
