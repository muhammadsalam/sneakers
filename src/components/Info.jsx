import { Link } from "react-router-dom";

const Info = ({ title, description, imgUrl, onClose, linkUrl = false }) => {
	return (
		<div className="info">
			<img src={imgUrl} alt="you does not have sneakers in your cart" />
			<strong>{title}</strong>
			<p>{description}</p>
			{linkUrl ? (
				<Link to={linkUrl} className="info-link">
					<button className="btn-w-arrow">
						<img src="/img/icons/arrow-left.svg" alt="arrow left" />
						Вернуться назад
					</button>
				</Link>
			) : (
				<button className="btn-w-arrow" onClick={onClose}>
					<img src="/img/icons/arrow-left.svg" alt="arrow left" />
					Вернуться назад
				</button>
			)}
		</div>
	);
};

export default Info;
