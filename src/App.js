import axios from "axios";
import React from "react";
import { Route, Routes } from "react-router-dom";
import AppContext from "./context"; //или в отдельном файле так, или внутри этого же как снизу

import Shapka from "./components/Header";
import Drawer from "./components/Drawer/index";
import Favourites from "./pages/Favourites";
import Home from "./pages/Home";
import Orders from "./pages/Orders";

// export const AppContext = React.createContext({}); //создаем юзЭфект хранилище для всего приложения, через которое в любом компоненте можно будет мгновенно достать передаваемые в контекст данные, подробнее ниже. Экспортируем точечно чтобы можно было вытащить его отдельно через import {appCon...} from "../...."

function App() {
  const [cartOpened, setCartOpened] = React.useState(false);

  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setIsLoading(true);
    async function fetchData() {
      try {
        const [cartResponse, favouritesResponse, itemsResponse] = await Promise.all([
          //будет выполнять массив промисов, их результат выполнения вернет в виде массива
          axios.get("https://698df943aded595c2530b392.mockapi.io/cart"), //промис
          axios.get("https://69caa8d7ba5984c44bf390e7.mockapi.io/Favourite"), //промис
          axios.get("https://698df943aded595c2530b392.mockapi.io/items"), //промис
        ]);

        setIsLoading(false);

        setItemsCart(cartResponse.data);
        setFavouriteCart(favouritesResponse.data);
        setItems(itemsResponse.data);
      } catch (error) {
        alert("Ошибка при запросе данных");
      }
    }

    fetchData();
  }, []);

  const [itemsCart, setItemsCart] = React.useState([]);
  const itemsCartAdd = async (obj) => {
    const findItem = itemsCart.find((itmObj) => Number(itmObj.parentId) === Number(obj.id));
    try {
      if (findItem) {
        setItemsCart((prev) => prev.filter((item) => Number(item.parentId) !== Number(obj.id)));
        await axios.delete(`https://698df943aded595c2530b392.mockapi.io/cart/${findItem.id}`);
      } else {
        setItemsCart((prev) => [...prev, obj]);
        await axios.post("https://698df943aded595c2530b392.mockapi.io/cart", obj).then((res) => {
          setItemsCart((prev) =>
            prev.map((item) => {
              if (item.parentId === res.data.parentId) {
                return {
                  ...item,
                  id: res.data.id,
                };
              }
              return item;
            }),
          );
        });
      }
    } catch (error) {
      alert("Не удалось добавить в корзину");
    }
  };
  const isItemAdded = (id) => {
    return itemsCart.some((obj) => Number(obj.parentId) === Number(id));
  };

  const itemCartRemove = (id) => {
    setItemsCart((prev) => prev.filter((item) => Number(item.id) !== Number(id)));
    axios.delete(`https://698df943aded595c2530b392.mockapi.io/cart/${id}`);
  };

  const [searchValue, setSearchValue] = React.useState("");
  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const [favouriteCart, setFavouriteCart] = React.useState([]);
  const favouriteCartAdd = (obj) => {
    try {
      if (favouriteCart.find((favObj) => favObj.id === obj.id)) {
        axios.delete(`https://69caa8d7ba5984c44bf390e7.mockapi.io/Favourite/${obj.id}`);
        setFavouriteCart((prev) => prev.filter((item) => item.id !== obj.id));
      } else {
        axios.post("https://69caa8d7ba5984c44bf390e7.mockapi.io/Favourite", obj).then((res) => {
          setFavouriteCart((prev) => [...prev, res.data]);
        });
      }
    } catch (error) {
      alert("Не удалось добавить в избранное");
    }
  };

  return (
    <AppContext.Provider
      value={{
        items,
        itemsCart,
        favouriteCart,
        isItemAdded,
        setCartOpened,
        setItemsCart,
      }} /* Мое все приложение, ты теперь знаешь что хранится в этом контексте, а в этом контексте объект с тремя свойствами */
    >
      <div className="wrapper clear">
        <Drawer
          items={itemsCart}
          onClose={() => setCartOpened(false)}
          onCloseItem={itemCartRemove}
          opened={cartOpened}
        />

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
            element={<Favourites itemsCartAdd={itemsCartAdd} favouriteCartAdd={favouriteCartAdd} />}
          />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
