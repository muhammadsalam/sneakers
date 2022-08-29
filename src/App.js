import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

const arr = [
  {
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: "12999",
    imageUrl: require("./assets/img/sneakers/1.jpg"),
  },
  {
    title: "Мужские Кроссовки Nike Air Max 270",
    price: "12999",
    imageUrl: require("./assets/img/sneakers/2.jpg"),
  },
  {
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: "8499",
    imageUrl: require("./assets/img/sneakers/3.jpg"),
  },
  {
    title: "Кроссовки Puma X Aka Boku Future Rider",
    price: "8999",
    imageUrl: require("./assets/img/sneakers/4.jpg"),
  },
];

function App() {
  return (
    <div className="wrapper">
      <Drawer />
      <Header />
      <div className="content">
        <div className="content-top">
          <h1 className="title">Все кроссовки</h1>
          <form className="search">
            <input
              className="search-input"
              type="text"
              placeholder="Поиск..."
            />
          </form>
        </div>

        <div className="sneakers">
          {arr.map((card) => (
            <Card
              imageUrl={card.imageUrl}
              title={card.title}
              price={card.price}
              onFavourite={() => console.log("добавили в закладки")}
              onPlus={() => console.log("нажали на плюс")}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
