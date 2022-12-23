const Info = ({title, description, imgUrl, onClose}) => {
    return (
        <div className="drawer-empty">
            <img
                src={imgUrl}
                alt="you does not have sneakers in your cart"
            />
            <strong>{title}</strong>
            <p>{description}</p>
            <button className="btn-w-arrow" onClick={onClose}>
                <img
                    src="/img/icons/arrow-left.svg"
                    alt="arrow left"
                />
                Вернуться назад
            </button>
        </div>
    );
}
 
export default Info;