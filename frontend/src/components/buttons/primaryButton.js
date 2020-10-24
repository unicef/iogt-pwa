import { h } from 'preact';
import style from './style.css';

const PrimaryButton = ({ text, width }) => {
  return (
    <div>
      <button class={style.primaryButton} style={{ width: width }}>
        <span class={style.buttonLabel}>{text}</span>
      </button>
    </div>
  );
};

export default PrimaryButton;
