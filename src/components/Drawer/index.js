import Info from "../Info";
import React from "react";
// import AppContext from "../context";
import axios from "axios";
import styles from "./Drawer.module.scss";

import { useCart } from "../../hooks/useCart";

function Drawer({ items = [], onClose, onCloseItem, opened }) {
  const [isOrdered, setIsOrdered] = React.useState(false);
  const [orderId, setOrdeId] = React.useState(null);
  const [isLoading, setisLoading] = React.useState(false);
  // const { itemsCart, setItemsCart } = React.useContext(AppContext);
  // const totalPrice = itemsCart.reduce((sum, obj) => sum + obj.price, 0);
  const { itemsCart, setItemsCart, totalPrice } = useCart();

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const onClickOrder = async () => {
    try {
      setisLoading(true);
      const { data } = await axios.post("https://69caa8d7ba5984c44bf390e7.mockapi.io/Orders", { items: itemsCart });
      // await axios.put("https://698df943aded595c2530b392.mockapi.io/cart", []); не работает из-за МокАпи
      setOrdeId(data.id);
      setIsOrdered(true);
      setItemsCart([]);

      for (let i = 0; i < itemsCart.length; i++) {
        const item = itemsCart[i]; // цикл-костыль чтобы не банил мокапи за запросы
        await axios.delete("https://698df943aded595c2530b392.mockapi.io/cart/" + item.id);
        await delay(1000);
      }
    } catch (error) {
      alert("Не удалось создать заказ :(((");
    }
    setisLoading(false);
  };

  return (
    <div className={`${styles.overlay} ${opened ? styles.overlayVisible : ""} `}>
      <div className={`${styles.drawer}`}>
        <h2 className="d-flex mb-30 justify-between">
          Корзина <img onClick={onClose} className="removBtn cu-p" src="close.svg" alt="close"></img>
        </h2>

        {items.length > 0 ? (
          <div className={`${styles.exist}`}>
            <div className={`${styles.cart}`}>
              {items.map((obj) => (
                <div key={obj.id} className={`${styles.cartitem} d-flex align-center mb-15`}>
                  <div className={`${styles.cartImg}`} style={{ backgroundImage: `url(${obj.imgUrl})` }}></div>
                  <div className="mr-20 flex">
                    <p className="mb-5">{obj.title}</p>
                    <b>{obj.price} руб.</b>
                  </div>
                  <img className="removBtn" src="close.svg" alt="close" onClick={() => onCloseItem(obj.id)}></img>
                </div>
              ))}
            </div>

            <div className={`${styles.cartTotalBlock}`}>
              <ul>
                <li className="d-flex ">
                  <span>Итого:</span>
                  <div></div>
                  <b>{totalPrice} руб.</b>
                </li>
                <li className="d-flex ">
                  <span>Налог 5%:</span>
                  <div></div>
                  <b>{totalPrice * 0.05} руб.</b>
                </li>
              </ul>
              <button disabled={isLoading} className={`${styles.greenButton} greenButton`} onClick={onClickOrder}>
                Оформить заказ <img src="arrow-next.svg" alt="arrow"></img>
              </button>
            </div>
          </div>
        ) : (
          <Info
            title={isOrdered ? "Заказ оформлен!" : "Корзина пустая"}
            description={
              isOrdered
                ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке`
                : "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."
            }
            image={isOrdered ? "order-success-icon.png" : "package-icon.png"}
          />
        )}
      </div>
    </div>
  );
}

export default Drawer;
