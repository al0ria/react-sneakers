function Card(props) {
  return (
    <div className="card">
      <div className="favourite">
        <img src="like-1.svg" alt="unliked" />
      </div>
      <img width={133} height={112} src={props.imgUrl} alt=""></img>
      <h5>{props.title}</h5>
      <div className="d-flex justify-between cardBottom align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{props.price} руб.</b>
        </div>
        <button className="button">
          <img width={11} height={11} src="plus.svg" alt="plus" />
        </button>
      </div>
    </div>
  );
}

export default Card;
