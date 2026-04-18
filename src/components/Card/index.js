import React from "react";
import ContentLoader from "react-content-loader";
import AppContext from "../../context";
import styles from "./Card.module.scss";

function Card({ name: title, price, imgUrl, onAdd, onFavourite, favorited = false, id, loading }) {
  const { isItemAdded } = React.useContext(AppContext);
  const [isFavourite, setIsFavourite] = React.useState(favorited);

  const onClickPlus = () => {
    onAdd({ id, parentId: id, title, price, imgUrl });
  };

  const onClickFavourite = () => {
    setIsFavourite(!isFavourite);
    onFavourite({ id, title, price, imgUrl });
  };

  return (
    <div className={styles.card}>
      {loading ? (
        <ContentLoader
          speed={2}
          width={155}
          height={265}
          viewBox="0 0 155 265"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="1" y="0" rx="10" ry="10" width="155" height="155" />
          <rect x="0" y="167" rx="5" ry="5" width="155" height="15" />
          <rect x="0" y="187" rx="5" ry="5" width="100" height="15" />
          <rect x="1" y="234" rx="5" ry="5" width="80" height="25" />
          <rect x="124" y="230" rx="10" ry="10" width="32" height="32" />
        </ContentLoader>
      ) : (
        <>
          <div className={styles.Favourite}>
            <img onClick={onClickFavourite} src={isFavourite ? "like-2.svg" : "like-1.svg"} alt="unliked" />
          </div>
          <img width={133} height={112} src={imgUrl} alt=""></img>
          <h5>{/*props.title*/ title}</h5>
          <div className="d-flex justify-between cardBottom align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>{price} руб.</b>
            </div>

            {onAdd && (
              <img
                className={styles.Plus}
                onClick={onClickPlus}
                src={isItemAdded(id) ? "checked.svg" : "plus.svg"}
                alt="plus"
              />
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default Card;
