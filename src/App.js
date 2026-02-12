import Card from "./components/Card";
import Shapka from "./components/Header";
import Drawer from "./components/Drawer";
import React from "react";

const arr = [
  {
    name: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 12999,
    imgUrl: "sneakers/sneakers-1.jpg",
  },

  {
    name: "Мужские Кроссовки Nike Air Max 270",
    price: 15600,
    imgUrl: "sneakers/sneakers-2.jpg",
  },

  {
    name: "Мужские Кроссовки Nike Sport Alkaline",
    price: 9433,
    imgUrl: "sneakers/sneakers-3.jpg",
  },

  {
    name: "Мужские Кроссовки Nike Air Buba 33",
    price: 8999,
    imgUrl: "sneakers/sneakers-4.jpg",
  },
];

function App() {
  const [cartOpened, setCartOpened] = React.useState(false);
  // const openCart = () => {
  //   setCartOpened(true);
  // };
  // const closeCart = () => {
  //   setCartOpened(false);
  // };

  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer onClose={() => setCartOpened(false)} />}

      <Shapka onClickCart={() => setCartOpened(true)} />

      <div className="content p-40">
        <div className="d-flex mb-40 justify-between align-center">
          <h1 className="">Все кроссовки</h1>
          <div className="search-bar">
            <img src="search.svg" alt="search"></img>
            <input placeholder="Поиск ..."></input>
          </div>
        </div>

        <div className="d-flex">
          {arr.map((obj) => (
            <Card title={obj.name} price={obj.price} imgUrl={obj.imgUrl} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
