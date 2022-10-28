import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Home from "./pages/Home";
import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Favourites from "./pages/Favourites";

export const AppContext = createContext({});

function App() {
	const [items, setItems] = useState([]);
	const [cartItems, setCartItems] = useState([]);
	const [favourites, setFavourites] = useState([]);
	const [searchValue, setSearchValue] = useState("");
	const [isCartOpened, setIscartOpened] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		async function fetchData() {
			setIsLoading(true);
			const itemsResponse = await axios.get(
				"https://630d478353a833c5343e1eb7.mockapi.io/items"
			);
			const cartResponse = await axios.get(
				"https://630d478353a833c5343e1eb7.mockapi.io/cart"
			);
			const favouritesResponse = await axios.get(
				"https://630d478353a833c5343e1eb7.mockapi.io/favourites"
			);

			setIsLoading(false);

			setFavourites(favouritesResponse.data);
			setCartItems(cartResponse.data);
			setItems(itemsResponse.data);
		}

		fetchData();
	}, []);

	const handleSearchInput = (event) => setSearchValue(event.target.value);

	const onAddToCart = (card) => {
		if (cartItems.find((item) => +item.id === +card.id)) {
			axios.delete(
				"https://630d478353a833c5343e1eb7.mockapi.io/cart/" + card.id
			);
			setCartItems((prev) =>
				[...prev].filter((item) => +item.id !== +card.id)
			);
		} else {
			axios.post(
				"https://630d478353a833c5343e1eb7.mockapi.io/cart",
				{...card, parentId: +card.id}
			);
			setCartItems((prev) => [...prev, {...card, parentId: +card.id}]);
		}
	};

	const onRemoveFromCart = (id) => {
		axios.delete("https://630d478353a833c5343e1eb7.mockapi.io/cart/" + id);
		setCartItems((prev) => prev.filter((item) => item.id != id));
	};

	const onAddToFavourites = async (card) => {
		try {
			if (favourites.find((item) => item.id == card.id)) {
				axios.delete(
					"https://630d478353a833c5343e1eb7.mockapi.io/favourites/" +
						card.id
				);
				setFavourites((prev) =>
					prev.filter((item) => item.id != card.id)
				);
			} else {
				const { data } = await axios.post(
					"https://630d478353a833c5343e1eb7.mockapi.io/favourites",
					{...card, parentId: +card.id}
				);
				setFavourites((prev) => [...prev, {...card, parentId: +card.id}]);
			}
		} catch (error) {
			alert("Не удалось добавить в закладки");
		}
	};

	const isItemAdded = (id) => cartItems.some((item) => +item.id === +id);
	const isItemFav = (id) => favourites.some((item) => +item.parentId === +id);

	return (
		<AppContext.Provider value={{ items, cartItems, favourites, isItemFav, isItemAdded }}>
			<div className="wrapper">
				{isCartOpened && (
					<Drawer
						onRemove={onRemoveFromCart}
						items={cartItems}
						onClose={() => setIscartOpened(false)}
					/>
				)}
				<Header onClickCart={() => setIscartOpened(true)} />
				<Routes>
					<Route
						path="/"
						element={
							<Home
								cartItems={cartItems}
								searchValue={searchValue}
								handleSearchInput={handleSearchInput}
								items={items}
								onAddToFavourites={onAddToFavourites}
								onAddToCart={onAddToCart}
								isLoading={isLoading}
							/>
						}
					/>
					<Route
						path="/favourites"
						element={
							<Favourites onAddToFavourites={onAddToFavourites} />
						}
					/>
				</Routes>
			</div>
		</AppContext.Provider>
	);
}

export default App;
