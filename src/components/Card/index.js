import React from "react";
import ContentLoader from "react-content-loader";
import styles from "./Card.module.scss";

function Card(
  /*props*/ { name: title, price, imgUrl, onAdd, onFavourite, favorited = false, id, added = false, loading },
) {
  const [isAdded, setIsAdded] = React.useState(false);
  const [isFavourite, setIsFavourite] = React.useState(favorited);

  React.useEffect(() => {
    setIsAdded(added);
  }, [added]); //в хоум рендерится сначала массив загрузки и в верхний стейт записывается один раз только одно значение - из этого блядского пустого массива, поэтому обновляем стейт как только обновляется аддед.

  const onClickPlus = () => {
    setIsAdded(!isAdded);
    onAdd({ id, title, price, imgUrl });
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
          {" "}
          {/* <--- так называемый фрагмент. Типа див, но в разметке его не видно. Чисто реактовская штучка */}
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

            <img className={styles.Plus} onClick={onClickPlus} src={isAdded ? "checked.svg" : "plus.svg"} alt="plus" />
          </div>
        </>
      )}
    </div>
  );
}

export default Card;
