export default function Drawer(props) {
  return (
    <div className="overlay">
      <div className="drawer">
        <div className="drawer-top">
          <h2>Корзина</h2>
          <button
            onClick={props.onClose}
            className="btn-32 | drawer-top__button"
          >
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.0799 7.61553L6.6311 5.16673L9.07982 2.71801C10.0241 1.77376 8.55964 0.309342 7.6154 1.25359L5.16668 3.70231L2.71787 1.2535C1.77384 0.309466 0.309467 1.77384 1.2535 2.71787L3.70231 5.16668L1.25359 7.61539C0.309343 8.55964 1.77376 10.0241 2.71801 9.07982L5.16673 6.6311L7.61553 9.0799C8.55969 10.0241 10.0241 8.55969 9.0799 7.61553Z" />
            </svg>
          </button>
        </div>
        {props.items.length > 0 ? (
          <>
            <div className="drawer-list">
              {props.items &&
                props.items.map((item) => (
                  <div className="drawer-item" key={item.id}>
                    <img
                      className="drawer-item__img"
                      src={item.imageUrl}
                      alt="sneakers"
                    />
                    <div className="drawer-item__info">
                      <p>{item.title}</p>
                      <b>
                        {item.price
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " руб."}
                      </b>
                    </div>
                    <button
                      onClick={() => props.onRemove(item.id)}
                      className="btn-32 | drawer-item__button"
                    >
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.0799 7.61553L6.6311 5.16673L9.07982 2.71801C10.0241 1.77376 8.55964 0.309342 7.6154 1.25359L5.16668 3.70231L2.71787 1.2535C1.77384 0.309466 0.309467 1.77384 1.2535 2.71787L3.70231 5.16668L1.25359 7.61539C0.309343 8.55964 1.77376 10.0241 2.71801 9.07982L5.16673 6.6311L7.61553 9.0799C8.55969 10.0241 10.0241 8.55969 9.0799 7.61553Z" />
                      </svg>
                    </button>
                  </div>
                ))}
            </div>
            <div className="drawer-bottom">
              <ul>
                <li>
                  <span>Итого: </span>
                  <div></div>
                  <b>21 498 руб.</b>
                </li>
                <li>
                  <span>Налог 5%: </span>
                  <div></div>
                  <b>1074 руб.</b>
                </li>
              </ul>
              <button className="btn-w-arrow grow arr-right">
                <img src="/img/icons/arrow-left.svg" alt="arrow left" />
                Оформить заказ
              </button>
            </div>
          </>
        ) : (
          <div className="drawer-empty">
            <img
              src="/img/empty-box.png"
              alt="you does not have sneakers in your cart"
            />
            <strong>Корзина пустая</strong>
            <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
            <button className="btn-w-arrow" onClick={props.onClose}>
              <img src="/img/icons/arrow-left.svg" alt="arrow left" />
              Вернуться назад
            </button>
          </div>
        )}
      </div>
    </div>
  );
}