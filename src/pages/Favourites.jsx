import Card from "../components/Card";

function Favourites({ items, itemsCartAdd, favouriteCartAdd }) {
  return (
    <div className="content p-40">
      <div className="d-flex mb-40 justify-between align-center">
        <h1 className="">Мои Закладки</h1>
        <div className="search-bar">
          <img src="search.svg" alt="search"></img>
        </div>
      </div>

      <div className="d-flex flex-wrap">
        {items.map((item, index) => (
          <Card
            key={item.id}
            title={item.name}
            price={item.price}
            imgUrl={item.imgUrl}
            onAdd={(obj) => itemsCartAdd(obj)}
            onFavourite={(obj) => favouriteCartAdd(obj)}
            favorited={true}
            {...item}
          />
        ))}
      </div>
    </div>
  );
}

export default Favourites;
