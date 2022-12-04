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
		setIsLoading(true);
		(async () => {
			try {
				const [itemsResponse, cartResponse, favouritesResponse] =
					await Promise.all([
						axios.get(
							"https://630d478353a833c5343e1eb7.mockapi.io/items"
						),
						axios.get(
							"https://630d478353a833c5343e1eb7.mockapi.io/cart"
						),
						axios.get(
							"https://630d478353a833c5343e1eb7.mockapi.io/favourites"
						),
					]);

				setIsLoading(false);

				setFavourites(favouritesResponse.data);
				setCartItems(cartResponse.data);
				setItems(itemsResponse.data);
			} catch (error) {
				alert("Ошибка при загрузке данных: " + error.name);
				console.log(error);
			}
		})();
	}, []);

	const handleSearchInput = (event) => setSearchValue(event.target.value);

	// добавление карточки в корзину
	const onAddToCart = async (card) => {
		try {
			const findedCard = cartItems.find(
				(item) => +item.token === +card.token
			);
			if (findedCard) {
				axios.delete(
					"https://630d478353a833c5343e1eb7.mockapi.io/cart/" +
						findedCard.id
				);
				setCartItems((prev) =>
					[...prev].filter((item) => +item.token !== +card.token)
				);
			} else {
				const { data } = await axios.post(
					"https://630d478353a833c5343e1eb7.mockapi.io/cart",
					card
				);
				setCartItems((prev) => [...prev, { ...card, id: data.id }]);
			}
		} catch (error) {
			alert("Ошибка, попробуйте чуть позже.");
			console.log(error.message);
		}
	};

	const onRemoveFromCart = (id) => {
		axios.delete("https://630d478353a833c5343e1eb7.mockapi.io/cart/" + id);
		setCartItems((prev) => prev.filter((item) => item.id != id));
	};

	const onAddToFavourites = async (card) => {
		try {
			const findedCard = favourites.find(
				(item) => +item.token === +card.token
			);
			if (findedCard) {
				axios.delete(
					"https://630d478353a833c5343e1eb7.mockapi.io/favourites/" +
						findedCard.id
				);
				setFavourites((prev) =>
					[...prev].filter((item) => +item.token !== +card.token)
				);
			} else {
				const { data } = await axios.post(
					"https://630d478353a833c5343e1eb7.mockapi.io/favourites",
					card
				);
				setFavourites((prev) => [...prev, { ...card, id: +data.id }]);
			}
		} catch (error) {
			alert("Ошибка, попробуйте чуть позже.");
			console.log(error.message);
		}
	};

	const isItemAdded = (token) =>
		cartItems.some((item) => +item.token === +token);
	const isItemFav = (token) =>
		favourites.some((item) => +item.token === +token);

	return (
		<AppContext.Provider
			value={{ items, cartItems, favourites, isItemFav, isItemAdded }}
		>
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
							<Favourites
								onAddToCart={onAddToCart}
								onAddToFavourites={onAddToFavourites}
							/>
						}
					/>
				</Routes>
			</div>
		</AppContext.Provider>
	);
}

export default App;
