import React from "react";

function PopupWithForm(props) {
  return (
    <div className={`popup popup_${props.name} ${props.isOpen ? "popup_opened" :''}`}>
      <div className={`popup__container popup__container-${props.name}`}>
        <button onClick={props.onClose} className="popup__close" aria-label="Close" type="button" name="close" id="close"></button>
        <h2 className="popup__title">{props.title}</h2>
        <form className="popup__inform" name={`${props.name}`} noValidate>
        {props.children}
        <button className="popup__button-rectangle" aria-label="Save" type="submit" name="save" id="save">{props.button}</button>
        </form>
      </div>
    </div>
    )
  }

export default PopupWithForm;