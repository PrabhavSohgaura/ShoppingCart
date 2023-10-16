import React, { useContext } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import CartItem from "./CartItem";
import { cartContext } from "./Cart";
const CartContext = () => {
  const { items, removeAllItem, totalItem, totalAmount } =
    useContext(cartContext);

  return (
    <>
      <header>
        <div className="cart__header">
          <img src="./images/arrow.png" alt="" className="cart__header--icon" />
          <h3 className="cart__header--heading">Continue Shopping</h3>
        </div>
        <div className="cart__headerRight">
          <img
            src="./images/cart.png"
            alt="cart"
            className="cart__headerRight--cartIcon"
          />
          <p className="cart__headerRight--count">
            <span className="cart__headerRight--totalCount">{totalItem}</span>
          </p>
        </div>
      </header>

      <section className="cart__main">
        <h1 className="cart__main--heading">Shopping Cart</h1>
        <p className="cart__main--count">
          There are <span className="cart__main--count">{totalItem} </span>
          items in the cart
        </p>
        <div className="cart__container">
          <div className="cart__items">
            <Scrollbars>
              {items.map((item) => {
                return <CartItem key={item.id} {...item} />;
              })}
            </Scrollbars>
          </div>
        </div>
        <div className="cart__total">
          <h3>
            Cart total: <span>{totalAmount}</span>
          </h3>
          <button>Checkout</button>
          <button onClick={() => removeAllItem()}>Clear All</button>
        </div>
      </section>
    </>
  );
};

export default CartContext;
