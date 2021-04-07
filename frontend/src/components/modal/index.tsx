import style from './style.css';
import { ComponentChildren, FunctionalComponent, h } from 'preact';

interface ModalProps {
    children: ComponentChildren;
    isOpen: boolean;
    onRequestClose: () => void;
    style: {};
    contentLabel: string;
    displayModal?: boolean;
    closeModal?: () => void;
}

const Modal: FunctionalComponent<ModalProps> = (props: ModalProps) => {
    const divStyle = {
        display: props.displayModal ? 'block' : 'none'
    };

    function closeModal(e: { stopPropagation: () => void; }) {
        e.stopPropagation()
        props.closeModal?.()
    }

    return (
        <div
            class={style.modal}
            onPointerDown={closeModal}
            style={divStyle} >
            <div
                className={style.modalContent}
                onPointerDown={e => e.stopPropagation()} >
                {props.children}
            </div>
        </div>
    )
}

export default Modal;