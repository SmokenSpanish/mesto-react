import React from 'react';
import api from './utils/Api';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main({onEditProfile, onEditAvatar, onAddPlace, onCardClick}) {
    const currentUser = React.useContext(CurrentUserContext);
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        api
        .getCards()
        .then((cardsData) => {
          setCards(cardsData);
        })
        .catch((err) => {
          console.log('getCards', err);
        });
    }, []);

    function handleCardDelete(card) {
        api.deleteCard(card._id).then(() => {
          setCards((state) => state.filter((c) => c._id !== card._id));
        });
      }

    function handleCardLike(card) {
        // Снова проверяем, есть ли уже лайк на этой карточке
        const isLiked = card.likes.some((i) => i._id === currentUser._id);
    
        // Отправляем запрос в API и получаем обновлённые данные карточки
        api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
          setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
        });
      }

      const listCards = cards.map((card) => ( <Card key={card._id} card={card} onCardClick={onCardClick} onCardLike={handleCardLike} onCardDelete={handleCardDelete} />
      ));

    return(
        <main className="content">
            <div className="profile">
                <div onClick={onEditAvatar} className="profile__avatar-wrapper">
                    <div style={{backgroundImage: `url(${currentUser.avatar})`}} className="profile__avatar"/>
                    <div className="profile__avatar-overlay" />
                </div>
                <div className="profile__info">
                    <h1 className="profile__name">{currentUser.name}</h1>
                    <button onClick={onEditProfile} className="profile__edit-button link" type="button" />
                    <p className="profile__about">{currentUser.about}</p>
                </div>

                <button onClick={onAddPlace} className="profile__add-button link" type="submit" />
                
            </div>
            

    <section className="elements">{listCards}</section>
        </main>
    );
}

export default Main;