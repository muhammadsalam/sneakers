import { useContext } from "react";
import Card from "../components/Card";
import { AppContext } from "../App";

function Favourites({
	onAddToFavourites,
	onAddToCart,
}) {

	const { favourites } = useContext(AppContext);

	return (
		<div className="content">
			<div className="content-top">
				<h1 className="title">Мои закладки</h1>
			</div>

			<div className="sneakers">
				{favourites.map((card) => (
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
