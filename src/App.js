function App() {
  return (
    <div className="wrapper clear">
      <header className="header">
        <a href="/" className="header-logo">
          <img width={40} height={40} src="/img/logo.png" alt="react-sneakers"/>
          <div>
            <h3>React Sneakers</h3>
            <p>магазин лучших кроссовок</p>
          </div>
        </a>
        <ul className="header-list">
          <li className="header-list__item">
            <img src="/img/icons/cart.svg" alt="cart"/>
            <span>1205 руб.</span>
          </li>
          <li className="header-list__item">
            <img src="/img/icons/heart.svg" alt="favorites" />
          </li>
          <li className="header-list__item">
            <img src="/img/icons/user.svg" alt="profile"/>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default App;
