
import React from "react";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";
import api from "../utils/api.js";
import CurrentUserContext from '../contexts/CurrentUserContext.js';
import EditProfilePopup from "./EditProfilePopup.js";
import EditAvatarPopup from "./EditAvatarPopup.js";
import AddPlacePopup from "./AddPlacePopup.js";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getInfo().then(setCurrentUser);
      
      api.getCard().then((res) => {
        setCards(res);
      })
      .catch((err) => {
        console.log(err);
      });
    }, []);


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
    setSelectedCard({});
  };

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    
    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.putLike(card._id, !isLiked).then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    });
}

function handleCardDelete(card) {
   
   // Отправляем запрос в API и получаем обновлённые данные карточки
   api.deleteCard(card._id).then(() => {
       setCards((state) => state.filter((c) => c._id !== card._id));
   });  
}

function handleUpdateUser( name, about ) {
  api.patchInfo(name, about).then((res) => {
    setCurrentUser(res);
    closeAllPopups();
  })
  .catch((err) => {
    console.log(err);
  });
}

function handleUpdateAvatar(avatar) {
  api.patchAvatar(avatar).then((res) => {
    setCurrentUser(res);
    closeAllPopups();
  })
  .catch((err) => {
    console.log(err);
  });
}

function handleAddPlaceSubmit(name, link) {
  api.postCard(name, link).then((card) => {
    setCards([card, ...cards]);
    closeAllPopups();
  })
  .catch((err) => {
    console.log(err);
  });
}


  return (

    <CurrentUserContext.Provider value={currentUser}>

    <div className="page">
      <Header />

      <Main onEditProfile={handleEditProfileClick}
      onAddPlace={handleAddPlaceClick}
      onEditAvatar={handleEditAvatarClick}
      onCardClick={handleCardClick} 
      cards={cards}
      onCardLike={handleCardLike}
      onCardDelete={handleCardDelete}
      onUpdateAvatar={handleUpdateAvatar} />

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

      <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />

      <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} />

      <AddPlacePopup
      onAddPlace={handleAddPlaceSubmit} />

      <Footer />
    </div>

    </CurrentUserContext.Provider>
  )
}

export default App;