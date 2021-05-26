function PopupWithForm(props) {
    return (
        <div className={`popup popup-${props.name}`}>
            <div className="popup__container popup__overlay">
                <button type="button" className="popup__close-button link"></button>
                <h2 className="popup__title">{props.title}</h2>
                <form name={props.name} className="popup__forms" noValidate>
                    {props.children}

                <button type="submit" className="popup__button link">
                    Сохранить
                </button>

                </form>
            </div>
        </div>
    );
}

export default PopupWithForm;