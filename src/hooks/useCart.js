import React from "react";
import AppContext from "../context";

//кастомный хук. Переиспользуемая функция, вызываемая как обычный базовый реакт хук типо юзКонтекста.

export const useCart = () => {
  //лучше единичный экспорт, но можно и дефолт. Только дефолт местами ограниченный
  const { itemsCart, setItemsCart } = React.useContext(AppContext);
  const totalPrice = itemsCart.reduce((sum, obj) => sum + obj.price, 0);

  return { itemsCart, setItemsCart, totalPrice };
};

//при применении без реакт.бубубу. Просто ... = useCart
