import React from "react";
import CurrentUserContext from '../contexts/CurrentUserContext.js';

function Card ({ card, onCardClick }) {

    const currentUser = React.useContext(CurrentUserContext);
    const isOwn = card.owner._id === currentUser._id;
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    const cardLikeButtonClassName = ( 
        `element__vector ${isLiked && 'element__vector_active'}` 
      );; 

    function handleClick() {
        onCardClick(card);
    }
    
    return (
        <article className="element">
            <img onClick={handleClick} className="element__image" src={card.link} alt= {card.name} /> 
            <h2 className="element__title">{card.name}</h2> 
            {isOwn && <button className="element__delete"></button>}
            <button className="element__vector"></button> 
            <h3 className="element__digital">{card.likes.length}</h3> 
        </article>
    )
}

export default Card;