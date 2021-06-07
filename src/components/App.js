import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import api from './utils/Api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import EditProfilePopup from './EditProfilePopup';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);

  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);

  const [isConfirmPopupOpen, setIsConfirmPopupOpen] = React.useState(false);

  const [selectedCard, setSelectedCard] = React.useState(null);

  const [currentUser, setCurrentUser] = React.useState({});

  React.useEffect(() => {
    api
      .getUserInfo()
      .then((userData) => {
        setCurrentUser(userData);
      })
      .catch((err) => {
        console.log('getUserInfo', err);
      });
  }, []);

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

  const handleUpdateUser = (user) => {
    api
      .setUserInfo(user)
      .then((newUser) => {
        setCurrentUser(newUser);
        closeAllPopups();
      })
      .catch((err) => {
        console.log('handleUpdateUser', err);
      });
  };

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick} />
        <Footer />
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
          />

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
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
