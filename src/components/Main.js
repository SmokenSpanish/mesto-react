function Main(props) {
    const handleEditAvatarClick = () => {
        document.querySelector('.popup-avatar').classList.add('popup_opened');
    }
    const handleEditProfileClick = () => {
        document.querySelector('.popup-profile').classList.add('popup_opened');
    }

    const handleAddPlaceClick = () => {
        document.querySelector('.popup-place').classList.add('popup_opened');
    }


    return(
        <main className="content">
            <div className="profile">
                <div onClick={handleEditAvatarClick} className="profile__avatar-wrapper">
                    <img src="#" alt="аватар" className="profile__avatar"/>
                    <div className="profile__avatar-overlay"></div>
                </div>
                <div className="profile__info">
                    <h1 className="profile__name">Жак</h1>
                    <button onClick={handleEditProfileClick} className="profile__edit-button link" type="button"></button>
                    <p className="profile__about">Какова твоя профессия</p>
                </div>

                <button onClick={handleAddPlaceClick} className="profile__add-button link" type="submit">
                </button>
            </div>

            <section className="elements">
            </section>
        </main>
    );
}

export default Main;