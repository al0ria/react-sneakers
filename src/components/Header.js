import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";

function Header(props) {
  const { totalPrice } = /*React.*/ useCart(); //БЕз реакт.бубубу

  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to="/">
        <div className="d-flex align-center">
          <img width={40} height={40} src="logo.png" alt="logo"></img>
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
      </Link>
      <ul className="d-flex">
        <li className="mr-30" onClick={props.onClickCart}>
          <img width={18} height={18} src="cart.svg" alt="cart"></img>
          <span>{totalPrice}</span>
        </li>
        <Link to="/favourites">
          <li>
            <img width={18} height={18} src="heart.svg" alt="user"></img>
          </li>
        </Link>
        <Link to="/orders">
          <li>
            <img width={18} height={18} src="profile.svg" alt="user"></img>
          </li>
        </Link>
      </ul>
    </header>
  );
}

export default Header;
