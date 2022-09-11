import Card from "../components/Card";

function Favourites({
	items,
	onAddToFavourites,
	onAddToCart,
}) {
	return (
		<div className="content">
			<div className="content-top">
				<h1 className="title">Мои закладки</h1>
			</div>

			<div className="sneakers">
				{items.map((card) => (
					<Card
						key={card.id}
						{...card}
						onFavourite={onAddToFavourites}
						onAddToCart={() => onAddToCart(card)}
                        isFav={true}
					/>
				))}
			</div>
		</div>
	);
}

export default Favourites;
