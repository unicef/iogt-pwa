import React from 'react';
import style from './style.css';

const Modal = (props) => {
    const divStyle = { 
        display: props.displayModal ? 'block' : 'none'
   };

   function closeModal(e) {
        e.stopPropagation()
        props.closeModal()
    }

    return (
        <div 
         class={style.modal}
         onClick={ closeModal }
         style={divStyle} >
          <div 
             className={style.modalContent}
             onClick={ e => e.stopPropagation() } >
             {props.children}
          </div>
       </div>
    )
}

export default Modal;