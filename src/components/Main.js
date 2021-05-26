import React from 'react';
import api from './utils/Api';

function Main({onEditProfile, onEditAvatar, onAddPlace}) {
    const [userName, setUserName] = React.useState();
    const [userDescription, setUserDescription] = React.useState();
    const [userAvatar, setUserAvatar] = React.useState();
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        Promise.all([api.getUserInfo(), api.getCards()])
          .then(([userData, cardsData]) => {
            setUserName(userData.name);
            setUserDescription(userData.about);
            setUserAvatar(userData.avatar);
            setCards(cardsData)
          })
          .catch((err) => {
            console.log('Один из промисов отклонен', err);
          });
      });

      const listCards = cards.map((card) => (
        
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
    
      ))

    return(
        <main className="content">
            <div className="profile">
                <div onClick={onEditAvatar} className="profile__avatar-wrapper">
                    <div style={{backgroundImage: `url(${userAvatar})`}} className="profile__avatar"/>
                    <div className="profile__avatar-overlay" />
                </div>
                <div className="profile__info">
                    <h1 className="profile__name">{userName}</h1>
                    <button onClick={onEditProfile} className="profile__edit-button link" type="button" />
                    <p className="profile__about">{userDescription}</p>
                </div>

                <button onClick={onAddPlace} className="profile__add-button link" type="submit" />
                
            </div>
            

    <section className="elements">{listCards}</section>
        </main>
    );
}

export default Main;