import React from "react";
import styles from "./Card.module.scss";

function Card(props) {
  const [isAdded, setIsAdded] = React.useState(false);

  const onClickPlus = () => {
    setIsAdded(!isAdded);
  };

  return (
    <div className={styles.card}>
      <div className={styles.Favourite}>
        <img src="like-1.svg" alt="unliked" />
      </div>
      <img width={133} height={112} src={props.imgUrl} alt=""></img>
      <h5>{props.title}</h5>
      <div className="d-flex justify-between cardBottom align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{props.price} руб.</b>
        </div>

        <img
          className={styles.Plus}
          onClick={onClickPlus}
          src={isAdded ? "checked.svg" : "plus.svg"}
          alt="plus"
        />
      </div>
    </div>
  );
}

export default Card;
