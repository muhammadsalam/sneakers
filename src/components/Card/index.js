import { useState } from "react";
import ContentLoader from "react-content-loader";
import styles from "./Card.module.sass";

export default function Card({
	id,
	imageUrl,
	title,
	price,
	onFavourite,
	onAddToCart,
	isFav = false,
	isAdded = false,
	isLoading = false,
}) {
	const [isFavourite, setIsFavourite] = useState(isFav);
	const [isAdd, setIsAdd] = useState(isAdded);

	const handleCardAdd = () => {
		onAddToCart({ id, title, imageUrl, price });
		setIsAdd(!isAdd);
	};

	const handleCardLike = () => {
		onFavourite({ id, imageUrl, title, price });
		setIsFavourite(!isFavourite);
	};

	const finalPrice =
		price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " руб.";

	return (
		<div className={styles.card}>
			{isLoading ? (
				<ContentLoader
					speed={4}
					width={151}
					height={187}
					viewBox="0 0 151 187"
					backgroundColor="#f3f3f3"
					foregroundColor="#ecebeb"
				>
					<rect x="0" y="0" rx="10" ry="10" width="150" height="100" />
					<rect x="0" y="107" rx="3" ry="3" width="150" height="15" />
					<rect x="0" y="126" rx="3" ry="3" width="93" height="15" />
					<rect x="0" y="163" rx="8" ry="8" width="80" height="24" />
					<rect
						x="118"
						y="155"
						rx="8"
						ry="8"
						width="32"
						height="32"
					/>
				</ContentLoader>
			) : (
				<>
					<div className={styles.imgBlock}>
						<button
							className="btn-32 bxsh"
							onClick={handleCardLike}
						>
							<img
								src={
									"../img/icons/heart-" +
									(isFavourite ? "" : "un") +
									"liked.svg"
								}
								alt="добавить в закладки"
							/>
						</button>
						<img
							className={styles.image}
							src={imageUrl}
							alt="Sneakers"
						/>
					</div>
					<h5>{title}</h5>
					<div className={styles.bottom}>
						<div className={styles.price}>
							<span>Цена:</span>
							<b>{finalPrice}</b>
						</div>
						<button
							className={"btn-32 bxsh " + styles.button}
							onClick={handleCardAdd}
						>
							<img
								src={
									"../img/icons/plus-" +
									(isAdd ? "" : "un") +
									"added.svg"
								}
								alt="add to cart"
							/>
						</button>
					</div>
				</>
			)}
		</div>
	);
}
