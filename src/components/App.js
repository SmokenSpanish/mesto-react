import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);

  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);

  const [isConfirmPopupOpen, setIsConfirmPopupOpen] = React.useState(false);

  const [selectedCard, setSelectedCard] = React.useState(null);

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  }
  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  }

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  }

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsConfirmPopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <div className="page">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick} />
      <Footer />
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      <PopupWithForm
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        type={'profile'}
        title={'Редактировать профиль'}
        buttonText={'Сохранить'}
      >
        <fieldset className="popup__form">
          <label htmlFor="name-card" className="popup__label">
            <input type="text" className="popup__input_type_name popup__input" name="name" required
              minLength="2" maxLength="40" autoComplete="off" id="name-card" placeholder="Имя" />
            <span className="error" id="name-card-error"></span>
          </label>
          <label htmlFor="job-card" className="popup__label">
            <input type="text" className="popup__input_type_description popup__input" name="about"
              placeholder="О себе" autoComplete="off" id="job-card" required minLength="2"
              maxLength="200" />
            <span className="error" id="job-card-error"></span>
          </label>
        </fieldset>
      </PopupWithForm>

      <PopupWithForm
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        type={'place'}
        title={'Новое место'}
        buttonText={'Создать'}
      >
        <fieldset className="popup__form">
          <label htmlFor="place-card" className="popup__label">
            <input type="text" className="popup__input_type_placeName popup__input" name="name"
              placeholder="Название" required minLength="2" maxLength="30" autoComplete="off"
              id="place-card" />
            <span className="error" id="place-card-error"></span>
          </label>
          <label htmlFor="link-card" className="popup__label">
            <input type="url" className="popup__input_type_imgLink popup__input" name="link"
              placeholder="Ссылка на картинку" id="link-card" required minLength="3" />
            <span className="error" id="link-card-error"></span>
          </label>
        </fieldset>
      </PopupWithForm>

      <PopupWithForm
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        type={'avatar'}
        title={'Обновить аватар'}
        buttonText={'Сохранить'}
      >
        <fieldset className="popup__form">
          <label htmlFor="avatar-card" className="popup__label">
            <input type="url" className="popup__input" name="avatar" placeholder="Ссылка на аватар"
              id="link-ava" required minLength="3" />
            <span className="error" id="link-ava-error"></span>
          </label>
        </fieldset>
      </PopupWithForm>

      <PopupWithForm
        isOpen={isConfirmPopupOpen}
        onClose={closeAllPopups}
        type={'confirm'}
        title={'Вы уверены?'}
        buttonText={'Да'}
      />

    </div>
  );
}

export default App;
