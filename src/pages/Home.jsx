import Card from "../components/Card";

function Home({
	cartItems,
	searchValue,
	handleSearchInput,
	items,
	onAddToFavourites,
	onAddToCart,
	isLoading,
}) {

	const renderItems = () => {
		const filteredItems = items.filter((item) =>
			item.title.toLowerCase().includes(searchValue.toLowerCase())
		);

		return (isLoading ? [...Array(12)] : filteredItems).map((card, index) => (
			<Card
				key={index}
				{...card}
				onFavourite={onAddToFavourites}
				onAddToCart={onAddToCart}
				isLoading={isLoading}
			/>
		));
	};

	return (
		<div className="content">
			<div className="content-top">
				<h1 className="title">
					{searchValue
						? "Поиск по запросу: " + searchValue
						: "Все кроссовки"}
				</h1>
				<form className="search">
					<input
						value={searchValue}
						onChange={handleSearchInput}
						className="search-input"
						type="text"
						placeholder="Поиск..."
					/>
				</form>
			</div>

			<div className="sneakers">{renderItems()}</div>
		</div>
	);
}

export default Home;
