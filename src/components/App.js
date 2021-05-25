import React from 'react';
import Header from './Header';

function App() {
  return (
    <div className="page">
      <Header />
        <main className="content">
            <div className="profile">
                <div className="profile__avatar-wrapper">
                    <img src="#" alt="аватар" className="profile__avatar"/>
                    <div className="profile__avatar-overlay"></div>
                </div>
                <div className="profile__info">
                    <h1 className="profile__name">Жак</h1>
                    <button className="profile__edit-button link" type="button"></button>
                    <p className="profile__about">Какова твоя профессия</p>
                </div>

                <button className="profile__add-button link" type="submit">
                </button>
            </div>

            <section className="elements">
            </section>
        </main>

        <footer className="footer">
            <p className="footer__logo">&copy; 2020 Mesto Russia</p>
        </footer>
    </div>
  );
}

export default App;
