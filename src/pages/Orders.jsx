import Card from "../components/Card";
import React from "react";
import AppContext from "../context";
import axios from "axios";

function Orders() {
  const { favouriteCartAdd } = React.useContext(AppContext);
  const [orders, setOrders] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("https://69caa8d7ba5984c44bf390e7.mockapi.io/Orders");

        // делаем из массива массивов объектов один единый массив объектов
        // console.log(data.map((obj) => obj.items).flat);
        // console.log(data.reduce((prev, obj) => [...prev, ...obj.items], [])); ---- используем этот.
        setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));

        setIsLoading(false);
      } catch (error) {
        alert("Ошибка при запросе заказов");
      }
    })();
  }, []);

  return (
    <div className="content p-40">
      <div className="d-flex mb-40 justify-between align-center">
        <h1 className="">Мои Заказы</h1>
        <div className="search-bar">
          <img src="search.svg" alt="search"></img>
        </div>
      </div>

      <div className="d-flex flex-wrap">
        {(isLoading ? [...Array(8)] : orders).map((item, index) => (
          <Card
            key={index}
            name={item && item.title}
            onFavourite={(obj) => favouriteCartAdd(obj)}
            {...item}
            loading={isLoading}
          />
        ))}
      </div>
    </div>
  );
}

export default Orders;
