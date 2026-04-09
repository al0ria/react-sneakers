import Card from "../components/Card";

function Home({
  searchValue,
  setSearchValue,
  onChangeSearchInput,
  items,
  itemsCartAdd,
  favouriteCartAdd,
  itemsCartRemove,
  itemsCart,
  isLoading,
}) {
  const renderItems = () => {
    const filtredItems = items.filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase()));
    return (isLoading ? [...Array(8)] : filtredItems).map((item, index) => (
      <Card
        key={isLoading ? index : item.id}
        onAdd={(obj) => itemsCartAdd(obj)}
        onFavourite={(obj) => favouriteCartAdd(obj)}
        added={itemsCart.some((obj) => Number(obj.id) === Number(item.id))}
        loading={isLoading}
        {...item}
      />
    ));
  };

  return (
    <div className="content p-40">
      <div className="d-flex mb-40 justify-between align-center">
        <h1 className="">{searchValue ? `Поиск по: "${searchValue}"` : "Все кроссовки"}</h1>
        <div className="search-bar">
          <img src="search.svg" alt="search"></img>
          {searchValue && (
            <img onClick={() => setSearchValue("")} className="clear cu-p" src="close.svg" alt="clear"></img>
          )}
          <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск ..."></input>
        </div>
      </div>

      <div className="d-flex flex-wrap">
        {
          renderItems()

          /* {items
          .filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase()))
          .map((item, index) => (
            <Card
              key={item.id}
              onAdd={(obj) => itemsCartAdd(obj)}
              onFavourite={(obj) => favouriteCartAdd(obj)}
              added={itemsCart.some((obj) => Number(obj.id) === Number(item.id))}
              {...item}
            />
          ))} */
        }
      </div>
    </div>
  );
}

export default Home;
