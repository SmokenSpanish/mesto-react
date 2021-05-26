import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <div className="page">
      <Header />
      <Main />
      <Footer />

    {/* форма редактирования профиля */}
    <div className="popup popup-profile">
        <div className="popup__body">
            <div className="popup__container popup__overlay">
                <form name="popup-info" className="popup__forms" novalidate>
                    <button type="button" className="popup__close-button link"></button>
                    <h3 className="popup__title">Редактировать профиль</h3>
                    <fieldset className="popup__form">
                        <label for="name-card" className="popup__label">
                            <input type="text" className="popup__input_type_name popup__input" name="name" required
                                minlength="2" maxlength="40" autocomplete="off" id="name-card" placeholder="Имя"/>
                            <span className="error" id="name-card-error"></span>
                        </label>
                        <label for="job-card" className="popup__label">
                            <input type="text" className="popup__input_type_description popup__input" name="about"
                                placeholder="О себе" autocomplete="off" id="job-card" required minlength="2"
                                maxlength="200"/>
                            <span className="error" id="job-card-error"></span>
                        </label>
                    </fieldset>
                    <button type="submit" className="popup__button">Сохранить</button>
                </form>
            </div>
        </div>
    </div>

    {/* форма добавления карточки */}
    <div className="popup popup-place">
        <div className="popup__body">
            <div className="popup__container popup__overlay">
                <form name="popupPlaceInfo" className="popup-place__form popup__forms" novalidate>
                    <button type="reset" className="popup__close-button link"></button>
                    <h3 className="popup__title">Новое место</h3>
                    <fieldset className="popup__form">
                        <label for="place-card" className="popup__label">
                            <input type="text" className="popup__input_type_placeName popup__input" name="name"
                                placeholder="Название" required minlength="2" maxlength="30" autocomplete="off"
                                id="place-card"/>
                            <span className="error" id="place-card-error"></span>
                        </label>
                        <label for="link-card" className="popup__label">
                            <input type="url" className="popup__input_type_imgLink popup__input" name="link"
                                placeholder="Ссылка на картинку" id="link-card" required minlength="3"/>
                            <span className="error" id="link-card-error"></span>
                        </label>
                    </fieldset>
                    <button type="submit" className="popup__button popup__create">Создать</button>
                </form>
            </div>
        </div>
    </div>

    {/*форма обновления аватара*/}
    <div className="popup popup-avatar">
        <div className="popup__body">
            <div className="popup__container popup__overlay">
                <form name="avatar" className="popup__forms" novalidate>
                    <button type="reset" className="popup__close-button link"></button>
                    <h3 className="popup__title">Обновить аватар</h3>
                    <fieldset className="popup__form">

                        <label for="avatar-card" className="popup__label">
                            <input type="url" className="popup__input" name="avatar" placeholder="Ссылка на аватар"
                                id="link-ava" required minlength="3"/>
                            <span className="error" id="link-ava-error"></span>
                        </label>
                    </fieldset>
                    <button type="submit" className="popup__button popup__create">Сохранить</button>
                </form>
            </div>
        </div>
    </div>

    {/* попап удаления карточки */}
    <div className="popup popup-confirm">
        <div className="popup__body">
            <div className="popup__container popup__overlay">
                <button type="reset" className="popup__close-button link"></button>
                <h3 className="popup__title">Вы уверены?</h3>
                <form name="confirm" className="popup__forms" novalidate>
                    <button type="submit" className="popup__button link">
                        Да
                    </button>
                </form>
            </div>
        </div>
    </div>

    {/* попап картинки */}
    <div className="popup popup-image">
        <div className="popup__body">
            <div className="popup__image-container popup__overlay">
                <button type="button" className="popup__close-button popup__image-button link"></button>
                <img src='#' alt="место" className="popup__image"/>
                <p className="popup__image-title">название картинки</p>
            </div>
        </div>
    </div>
    </div>
  );
}

export default App;
