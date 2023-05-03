import React from "react";

function Card ({ card, onCardClick }) {
    function handleClick() {
        onCardClick(card);
    }
    
    return (
        <article className="element">
            <img onClick={handleClick} className="element__image" src={card.link} alt= {card.name} /> 
            <h2 className="element__title">{card.name}</h2> 
            <button className="element__delete"></button> 
            <button className="element__vector"></button> 
            <h3 className="element__digital">{card.likes.length}</h3> 
        </article>
    )
}

export default Card;