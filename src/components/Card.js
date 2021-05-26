import React from 'react';

function Card({ card }) {
    return (
    <div key={card.id} className="element">
        <button className="element__trash link" />
        <img src={card.link} alt={card.name} className="element__image" />
        <div className="element__info">
            <h2 className="element__title">{card.name}</h2>
            <div className="element__like-box">
                <button type="button" className="element__rectangle link" />
                <span className="element__like-count">{card.likes.length}</span>
            </div>
        </div>
    </div>
    );
}

export default Card;