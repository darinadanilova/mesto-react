
import React from "react";
import Header from "../components/Header.js";
import Main from "../components/Main.js";
import Footer from "../components/Footer.js";
import PopupWithForm from "../components/PopupWithForm.js";
import ImagePopup from "../components/ImagePopup.js";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

  const handleEditProfileClick = () => {
     setIsEditProfilePopupOpen(true);
  }

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  }

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  }

  const handleCardClick = (card) => {
    setSelectedCard(card);
  }

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(null);
  };

  document.body.classList.add("page");
  return (
    <div className="page">
      <Header />

      <Main onEditProfile={handleEditProfileClick}
      onAddPlace={handleAddPlaceClick}
      onEditAvatar={handleEditAvatarClick}
      onCardClick={handleCardClick} />

      <PopupWithForm isOpen={isEditProfilePopupOpen} title="Редактировать профиль" name="information" button="Сохранить" onClose={closeAllPopups}>
        <input required type="text" minLength="2" maxLength="40" className="popup__form popup__form_input_name" id="name" name="name" placeholder="Имя" />
        <span id="name-error" className="popup__error"></span>
        <input required type="text" minLength="2" maxLength="200" className="popup__form popup__form_input_profession" id="profession" name="profession" placeholder="Профессия" />
        <span id="profession-error" className="popup__error"></span>
      </PopupWithForm>

      <PopupWithForm isOpen={isAddPlacePopupOpen} title="Новое место" name="informations" button="Создать" onClose={closeAllPopups}>
        <input required type="text" minLength="2" maxLength="30" className="popup__form popup__form_input_place" id="place" name="place" placeholder="Название" />
        <span id="place-error" className="popup__error"></span>
        <input required type="url" className="popup__form popup__form_input_link" id="link" name="link" placeholder="Сcылка на картинку" />
        <span id="link-error" className="popup__error"></span>
      </PopupWithForm>

      <PopupWithForm isOpen={isEditAvatarPopupOpen} title="Обновить аватар" name="avatar" button="Сохранить" onClose={closeAllPopups}>
        <input required type="url" className="popup__form popup__form_input_avatar" id="avatar" name="avatar" placeholder="Сcылка на фото" />
        <span id="avatar-error" className="popup__error"></span>
      </PopupWithForm>

      <PopupWithForm title="Вы уверены?" name="delete" button="Да" onClose={closeAllPopups} />

      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups} />

      <Footer />
    </div>
  )
}

export default App;