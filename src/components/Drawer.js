function Drawer(/*props*/ { items = [], onClose, onCloseItem }) {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="d-flex mb-30 justify-between">
          Корзина <img onClick={onClose} className="removBtn cu-p" src="close.svg" alt="close"></img>
        </h2>

        {items.length > 0 ? (
          <div className="exist">
            <div className="cart">
              {items.map((obj) => (
                <div key={obj.id} className="cart-item d-flex align-center mb-15">
                  <div
                    className="cartImg"
                    style={{ backgroundImage: /*"url(...)"*/ `url(${obj.imgUrl})` }} //с двойных на шаблонные
                  ></div>
                  <div className="mr-20 flex">
                    <p className="mb-5">{obj.title}</p>
                    <b>{obj.price} руб.</b>
                  </div>
                  <img className="removBtn" src="close.svg" alt="close" onClick={() => onCloseItem(obj.id)}></img>
                </div>
              ))}
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
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default Drawer;
