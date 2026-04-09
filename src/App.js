import Home from "./pages/Home";
import Shapka from "./components/Header";
import Drawer from "./components/Drawer";
import axios from "axios";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Favourites from "./pages/Favourites";

// const arr = [];

function App() {
  const [cartOpened, setCartOpened] = React.useState(false);
  // const openCart = () => {
  //   setCartOpened(true);
  // };
  // const closeCart = () => {
  //   setCartOpened(false);
  // };

  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(
    () => {
      // fetch("https://698df943aded595c2530b392.mockapi.io/items")
      //   .then((res) => {
      //     return res.json();
      //   })
      //   .then((json) => {
      //     setItems(json);
      //   });
      setIsLoading(true);
      async function fetchData() {
        const cartResponse = await axios.get("https://698df943aded595c2530b392.mockapi.io/cart");
        const favouritesResponse = await axios.get("https://69caa8d7ba5984c44bf390e7.mockapi.io/Favourite");
        const itemsResponse = await axios.get("https://698df943aded595c2530b392.mockapi.io/items");

        setIsLoading(false);

        setItemsCart(cartResponse.data);
        setFavouriteCart(favouritesResponse.data);
        setItems(itemsResponse.data);
      }

      fetchData();
    },

    // axios.get("https://698df943aded595c2530b392.mockapi.io/items").then((res) => {
    //   setItems(res.data);
    // });
    // axios.get("https://698df943aded595c2530b392.mockapi.io/cart").then((res) => { не подходит потому что состояния карточек могут прогружаться раньше списка корзины и фэйворитов (не будет галочек и сердечек)
    //   setItemsCart(res.data);
    // });
    // axios.get("https://69caa8d7ba5984c44bf390e7.mockapi.io/Favourite").then((res) => {
    //   setFavouriteCart(res.data);
    // });
    [],
  );

  const [itemsCart, setItemsCart] = React.useState([]);
  const itemsCartAdd = (obj) => {
    //   axios.post("https://698df943aded595c2530b392.mockapi.io/cart", obj).then((res) => { --- ТАК НЕЛЬЗЯ, Шо СНАЧАЛА ЗАПРОС А ПОТОМ ПРОВЕРКИ ХУЕРКИ, ТЕМ БОЛЕЕЕ
    //     setItemsCart((prev) => ------- ЗАЧЕМ Я ЕГО ВООБЩЕ УДАЛЯЮ ЕСЛИ ПОТОМ УДАЛЯТЬ, СНИЗУ ВСЕ КАК НАДО
    //       prev.some((item) => item.id === obj.id) -- ЭТО БЫЛА ТИП МОЯ ФАНТАЗИЯ, А ПОД СНИЗУ Я ИМЕЮ ВВИДУ ПОД КОММЕНТАРИЕМ
    //         ? (axios.delete(`https://698df943aded595c2530b392.mockapi.io/cart/${obj.id}`), -- ОФОРМИТЬ КАК Я СДЕЛАЛ С ФЕЙВОРИТАМИ
    //           prev.filter((item) => item.id !== obj.id))
    //         : [...prev, res.data],
    //     );
    //   });

    try {
      if (itemsCart.some((itmObj) => Number(itmObj.id) === Number(obj.id))) {
        axios.delete(`https://698df943aded595c2530b392.mockapi.io/cart/${obj.id}`);
        setItemsCart((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)));
      } else {
        console.log(obj.id);
        axios.post("https://698df943aded595c2530b392.mockapi.io/cart", obj).then((res) => {
          setItemsCart((prev) => [...prev, res.data]);
        });
      }
    } catch (error) {
      alert("Не удалось добавить в корзину");
    }
  };

  const itemCartRemove = (id) => {
    setItemsCart((prev) => prev.filter((item) => item.id !== id));
    axios.delete(`https://698df943aded595c2530b392.mockapi.io/cart/${id}`);
  };

  const [searchValue, setSearchValue] = React.useState("");
  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const [favouriteCart, setFavouriteCart] = React.useState([]);
  const favouriteCartAdd = /*async*/ (obj) => {
    try {
      if (favouriteCart.find((favObj) => favObj.id === obj.id)) {
        axios.delete(`https://69caa8d7ba5984c44bf390e7.mockapi.io/Favourite/${obj.id}`);
        setFavouriteCart((prev) => prev.filter((item) => item.id !== obj.id));
      } else {
        /*const res = await*/ axios.post("https://69caa8d7ba5984c44bf390e7.mockapi.io/Favourite", obj).then((res) => {
          setFavouriteCart((prev) => [...prev, res.data]);
        }); //вместо then(res) можно использовать то что выше в комментариях, получается идентично. Чтоб не было разницы типо передаешь 1,2 и 7 в блок где они становятся 1,2 и 3, удаляешь 2, 3 становится 2, а в списке нет. Или типо того
      }
    } catch (error) {
      //оборачиваем в трайкетч т.к. из-за эвэйта не будет уведомлений об ошибке если она будет
      alert("Не удалось добавить в избранное");
    }
  };

  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer items={itemsCart} onClose={() => setCartOpened(false)} onCloseItem={itemCartRemove} />}

      <Shapka onClickCart={() => setCartOpened(true)} />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              onChangeSearchInput={onChangeSearchInput}
              items={items}
              itemsCartAdd={itemsCartAdd}
              favouriteCartAdd={favouriteCartAdd}
              itemsCart={itemsCart}
              isLoading={isLoading}
            />
          }
        />
        <Route
          path="/favourites"
          element={<Favourites items={favouriteCart} itemsCartAdd={itemsCartAdd} favouriteCartAdd={favouriteCartAdd} />}
        />
      </Routes>
    </div>
  );
}

export default App;
