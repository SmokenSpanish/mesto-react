function ImagePopup({ card, onClose }) {
    const copyCard = Object.assign({}, card);

    return(
    <div className={`popup popup-image ${card ? 'popup_opened' : ''}`}>
        <div className="popup__body">
            <div className="popup__image-container popup__overlay">
                <button onClick={onClose} type="button" className="popup__close-button popup__image-button link" />
                <img  src={copyCard.link} alt={copyCard.name} className="popup__image"/>
                <p className="popup__image-title">{copyCard.name}</p>
            </div>
        </div>
    </div>
    );
}

export default ImagePopup;