import { h } from 'preact';
import style from './style.css';

interface FullWidthButtonProps {
    text: string;
    width: number | string;
    backgroundColor: string;
}

const FullWidthButton = ({ text, width, backgroundColor }: FullWidthButtonProps) => {
    return (
        <div>
            <button class={style.primaryButton} style={{ width: width, backgroundColor: backgroundColor }}>
                <span class={style.buttonLabel}>{text}</span>
            </button>
        </div>
    );
};

export default FullWidthButton;
