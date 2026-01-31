function App() {
  return (
    <div className="wrapper clear">
      <div className="overlay">
        <div className="drawer">
          <h2 className="d-flex mb-30 justify-between">
            Корзина{" "}
            <img className="removBtn cu-p" src="close.svg" alt="close"></img>
          </h2>

          <div className="cart">
            <div className="cart-item d-flex align-center mb-15">
              <div
                className="cartImg"
                style={{ backgroundImage: "url(sneakers/sneakers-1.jpg)" }}
              ></div>
              <div className="mr-20 flex">
                <p className="mb-5">Мужские кроссовки Nike Blazer Mid Suede</p>
                <b>12 999 руб.</b>
              </div>
              <img className="removBtn" src="close.svg" alt="close"></img>
            </div>
            <div className="cart-item d-flex align-center mb-15">
              <div
                className="cartImg"
                style={{ backgroundImage: "url(sneakers/sneakers-1.jpg)" }}
              ></div>
              <div className="mr-20 flex">
                <p className="mb-5">Мужские кроссовки Nike Blazer Mid Suede</p>
                <b>12 999 руб.</b>
              </div>
              <img className="removBtn" src="close.svg" alt="close"></img>
            </div>
          </div>

          <div className="cartTotalBlock">
            <ul>
              <li className="d-flex ">
                <span>Итого:</span>
                <div></div>
                <b>21 498 руб.</b>
              </li>
              <li className="d-flex ">
                <span>Налог 5%:</span>
                <div></div>
                <b>1 074 руб.</b>
              </li>
            </ul>
            <button className="greenButton">
              Оформить заказ <img src="arrow-next.svg" alt="arrow"></img>
            </button>
          </div>
        </div>
      </div>

      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width={40} height={40} src="logo.png" alt="logo"></img>
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
            <img width={18} height={18} src="cart.svg" alt="cart"></img>
            <span>1205 руб.</span>
          </li>
          <li>
            <img width={18} height={18} src="profile.svg" alt="user"></img>
          </li>
        </ul>
      </header>

      <div className="content p-40">
        <div className="d-flex mb-40 justify-between align-center">
          <h1 className="">Все кроссовки</h1>
          <div className="search-bar">
            <img src="search.svg" alt="search"></img>
            <input placeholder="Поиск ..."></input>
          </div>
        </div>

        <div className="d-flex">
          <div className="card">
            <div className="favourite">
              <img src="like-1.svg" alt="unliked" />
            </div>
            <img
              width={133}
              height={112}
              src="sneakers/sneakers-1.jpg"
              alt=""
            ></img>
            <h5>Мужские кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between cardBottom align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="plus.svg" alt="plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={133}
              height={112}
              src="sneakers/sneakers-2.jpg"
              alt=""
            ></img>
            <h5>Мужские кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between cardBottom align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button>
                <img src="plus.svg" alt="plus" width={11} height={11} />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={133}
              height={112}
              src="sneakers/sneakers-3.jpg"
              alt=""
            ></img>
            <h5>Мужские кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between cardBottom align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button>
                <img src="plus.svg" alt="plus" width={11} height={11} />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={133}
              height={112}
              src="sneakers/sneakers-4.jpg"
              alt=""
            ></img>
            <h5>Мужские кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between cardBottom align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button>
                <img src="plus.svg" alt="plus" width={11} height={11} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
