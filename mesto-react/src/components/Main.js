import React from 'react';
import profileAvatar from '../images/image.jpg';
//import api from '../utils/api.js';

function Main({ onEditAvatar, onEditProfile, onAddPlace }) {
   
    //{cards.map(({ _id, ...props }) => (<Card key={_id} {props} onCardClick={onCardClick} />}

    //function handleEditAvatarClick() {
    //  const popupavatarElement = document.querySelector('.popup_avatar');
    //  popupavatarElement.classList.add('popup_opened');
    //}
//
    //function handleEditProfileClick() {
    //  const popupeditElement = document.querySelector('.popup_edit');
    //  popupeditElement.classList.add('popup_opened');
    //}
//
    //function handleAddPlaceClick() {
    //  const popupAddPlaceElement = document.querySelector('.popup_add');
    //  popupAddPlaceElement.classList.add('popup_opened');
    //}

    return (
        <main className="main">
        <section className="profile">
          <div className="profile__container">
            <img className="profile__avatar-image" src={profileAvatar} alt="Фото мужчины" />
            <button onClick={onEditAvatar} className="profile__button-avatar" aria-label="Edit" type="button" name="avatar" id="avatars">
            </button>
          </div>
          <div className="profile__info">
            <h1 className="profile__title">Жак-Ив Кусто</h1>
            <button onClick={onEditProfile} className="profile__button-rectangle" aria-label="Edit" type="button" name="edit" id="edit">
            </button>
            <p className="profile__subtitle">Исследователь океана</p>
          </div>
          <button onClick={onAddPlace} className="profile__button-vector" aria-label="Add" type="button" name="add" id="add">
          </button>
        </section>
        <section className="groups">
        </section>
      </main>
    );
  }
 export default Main;


 //const popupeditAvatarButtonElement = document.querySelector('.profile__button-avatar');
 //handleEditAvatarClick = () => {
 //  const popupavatarElement = document.querySelector('.popup_avatar');
 //  popupavatarElement.classList.add('popup_opened'); 
 //}
 //popupeditAvatarButtonElement.addEventListener('click', handleEditAvatarClick);
//
//
 // const popupeditOpenButtonElement = document.querySelector('.profile__button-rectangle');
 // handleEditProfileClick = () => {
 //  const popupeditElement = document.querySelector('.popup_edit');
 //  popupeditElement.classList.add('popup_opened'); 
 //}
 //popupeditOpenButtonElement.addEventListener('click', handleEditProfileClick);
//
//
 //const popupaddPlaceButtonElement = document.querySelector('.profile__button-vector');
 //handleAddPlaceClick = () => {
 //  const popupAddPlaceElement = document.querySelector('.popup_add');
 //  popupAddPlaceElement.classList.add('popup_opened'); 
 //}
 //popupaddPlaceButtonElement.addEventListener('click', handleAddPlaceClick);