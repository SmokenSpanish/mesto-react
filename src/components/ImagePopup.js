function ImagePopup(props) {
    return(
    <div className="popup popup-image">
        <div className="popup__body">
            <div className="popup__image-container popup__overlay">
                <button type="button" className="popup__close-button popup__image-button link"></button>
                <img src='https://images.unsplash.com/photo-1621793280880-a690a100148a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80' 
                alt="место" className="popup__image"/>
                <p className="popup__image-title">название картинки</p>
            </div>
        </div>
    </div>
    );
}

export default ImagePopup;