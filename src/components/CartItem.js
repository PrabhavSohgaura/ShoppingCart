import React, { useContext } from "react";
import { cartContext } from "./Cart";

const CartItem = ({ id, title, description, price, img, quantity }) => {
  const { removeItem, increment, decrement } = useContext(cartContext);
  return (
    <>
      <div className="item__info">
        <div className="item__img">
          <img src={img} alt="item1" />
        </div>
        <div className="item__title">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="item__quatity">
          <i
            className="fas fa-minus item__quantity--less"
            onClick={() => decrement(id)}
          ></i>
          <input type="text" placeholder={quantity} />
          <i
            className="fas fa-plus item__quantity--add"
            onClick={() => increment(id)}
          ></i>
        </div>
        <div className="item__price">
          <h3>{price}</h3>
        </div>
        <div className="item__remove">
          <i className="fas fa-trash-alt" onClick={() => removeItem(id)}></i>
        </div>
      </div>
      <hr />
    </>
  );
};

export default CartItem;
