import axios from "axios";
import { useState, useEffect } from "react";
import Card from "../components/Card";

function Profile({onAddToCart, onAddToFavourites}) {
    const [isLoading, setIsLoading] = useState(true);
    const [orders, setOrders] = useState([]);
	useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get('https://630d478353a833c5343e1eb7.mockapi.io/orders/');
                setOrders(data)
                setIsLoading(false);
            } catch (error) {
                alert("Ошибка, попробуйте чуть позже.");
                console.log(error.message);
            }
        })();
    }, []);

	const renderItems = () => {
		return (isLoading ? [{id: 1}, {id: 2}] : orders).map((order, index) => (
			<div className="order" key={index}>
				<h2 className="order-title">Заказ {order ? `№ ${order.id}` : ''}</h2>
				<div className="order-list">
					{
						(isLoading ? [...Array(3)] : order.items).map((card, index) => {
							return <Card
								key={card ? card.id : index}
								{...card}
								onFavourite={onAddToFavourites}
								onAddToCart={onAddToCart}				
								isLoading={isLoading}
							/>
						})
					}
				</div>
			</div>
		))
	}

	return (
		<div className="content">
			<div className="content-top">
				<h1 className="title">Мои заказы</h1>
			</div>

			<div className="sneakers orders">
				{renderItems()}
			</div>
		</div>
	);
}

export default Profile;