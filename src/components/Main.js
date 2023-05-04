import React from "react";
//import profileAvatar from "../images/image.jpg";
import api from "../utils/api.js";
import Card from "./Card.js";

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setCards] = React.useState([]);
  
  React.useEffect(() => {
    Promise.all([api.getInfo(), api.getCard()])
      .then(([inform, cardInfo]) => {
        setUserName(inform.name);
        setUserDescription(inform.about);
        setUserAvatar(inform.avatar);
        setCards (
          cardInfo.map((card) => ({
            name: card.name,
            link: card.link,
            id: card._id,
            likes: card.likes.length
          }))
        )
      })
  }, [])
  
  return (
    <main className="main">
      <section className="profile">
        <div className="profile__container">
          <img className="profile__avatar-image" src={userAvatar} alt="Фото мужчины" />
          <button onClick={onEditAvatar} className="profile__button-avatar" aria-label="Edit" type="button" name="avatar" id="avatars"></button>
        </div>
        <div className="profile__info">
          <h1 className="profile__title">{userName}</h1>
          <button onClick={onEditProfile} className="profile__button-rectangle" aria-label="Edit" type="button" name="edit" id="edit"></button>
          <p className="profile__subtitle">{userDescription}</p>
        </div>
        <button onClick={onAddPlace} className="profile__button-vector" aria-label="Add" type="button" name="add" id="add"></button>
      </section>
      <section className="groups">
        {cards.map((card) => (
          <Card
            card={card}
            key={card.id}
            onCardClick={onCardClick} />
        ))}
      </section>
    </main>
    )
  }

export default Main;