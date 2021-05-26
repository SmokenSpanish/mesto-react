function PopupWithForm(props) {
    return (
        <div className={`popup popup-${props.type} ${props.isOpen ? 'popup_opened' : ''}`}>
            <div className="popup__body">
            <div className="popup__container popup__overlay">
                <button type="button" className="popup__close-button link"></button>
                <h2 className="popup__title">{props.title}</h2>
                <form name={props.type} className="popup__forms" noValidate>
                    {props.children}

                <button type="submit" className="popup__button link">
                    Сохранить
                </button>

                </form>
            </div>
            </div>
        </div>
    );
}

export default PopupWithForm;