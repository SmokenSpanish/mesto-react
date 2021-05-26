function Main({onEditProfile, onEditAvatar, onAddPlace}) {
    return(
        <main className="content">
            <div className="profile">
                <div onClick={onEditAvatar} className="profile__avatar-wrapper">
                    <img src="#" alt="аватар" className="profile__avatar"/>
                    <div className="profile__avatar-overlay" />
                </div>
                <div className="profile__info">
                    <h1 className="profile__name">Жак</h1>
                    <button onClick={onEditProfile} className="profile__edit-button link" type="button" />
                    <p className="profile__about">Исследователь океана</p>
                </div>

                <button onClick={onAddPlace} className="profile__add-button link" type="submit" />
                
            </div>
            

            <section className="elements">
            </section>
        </main>
    );
}

export default Main;