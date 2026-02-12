function Drawer(props) {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="d-flex mb-30 justify-between">
          Корзина{" "}
          <img
            onClick={props.onClose}
            className="removBtn cu-p"
            src="close.svg"
            alt="close"
          ></img>
        </h2>

        <div className="cart">
          <div className="cart-item d-flex align-center mb-15">
            <div
              className="cartImg"
              style={{ backgroundImage: "url(sneakers/sneakers-1.jpg)" }}
            ></div>
            <div className="mr-20 flex">
              <p className="mb-5">Мужские кроссовки Nike Blazer Mid Suede</p>
              <b>12 999 руб.</b>
            </div>
            <img className="removBtn" src="close.svg" alt="close"></img>
          </div>
          <div className="cart-item d-flex align-center mb-15">
            <div
              className="cartImg"
              style={{ backgroundImage: "url(sneakers/sneakers-1.jpg)" }}
            ></div>
            <div className="mr-20 flex">
              <p className="mb-5">Мужские кроссовки Nike Blazer Mid Suede</p>
              <b>12 999 руб.</b>
            </div>
            <img className="removBtn" src="close.svg" alt="close"></img>
          </div>
        </div>

        <div className="cartTotalBlock">
          <ul>
            <li className="d-flex ">
              <span>Итого:</span>
              <div></div>
              <b>21 498 руб.</b>
            </li>
            <li className="d-flex ">
              <span>Налог 5%:</span>
              <div></div>
              <b>1 074 руб.</b>
            </li>
          </ul>
          <button className="greenButton">
            Оформить заказ <img src="arrow-next.svg" alt="arrow"></img>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
