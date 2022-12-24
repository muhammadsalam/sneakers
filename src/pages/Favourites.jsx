import { useContext } from "react";
import Card from "../components/Card";
import { AppContext } from "../App";
import Info from "../components/Info";

function Favourites({
	onAddToFavourites,
	onAddToCart,
	isLoading,
}) {
	const { favourites } = useContext(AppContext);

	const renderItems = () => {
		return (isLoading ? [...Array(8)] : favourites).map((card, index) => (
			<Card
				key={card ? card.id : index}
				{...card}
				onFavourite={onAddToFavourites}
				onAddToCart={onAddToCart}
				isLoading={isLoading}
			/>
		));
	};

	return (
		<div className="content">
		{(isLoading || (favourites.length > 0)) ? (
			<>
				<div className="content-top">
					<h1 className="title">Мои закладки</h1>
				</div>
				<div className="sneakers">{renderItems()}</div>
			</>
		) : (
			<div className="content-empty">
				<Info
					imgUrl={"/img/no-favourites.png"}
					title={"Закладок нет :("}
					description={
						"Вы ничего не добавляли в закладки"
					}
					linkUrl={"/"}
				/>
			</div>
		)}
	</div>
	);
}

export default Favourites;