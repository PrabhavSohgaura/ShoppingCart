import React, { createContext, useEffect, useReducer } from "react";
import "./Cart.css";
import CartContext from "./CartContext";
import { products } from "./Item";
import { reducer } from "./reducer";

export const cartContext = createContext();

const initialState = {
  items: products,
  totalAmount: 0,
  totalItem: 0,
};

const Cart = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const removeItem = (id) => {
    return dispatch({
      type: "REMOVE_ITEM",
      payload: id,
    });
  };
  const removeAllItem = () => {
    return dispatch({
      type: "REMOVE_ALL",
    });
  };
  const increment = (id) => {
    return dispatch({
      type: "INCREMENT",
      payload: id,
    });
  };
  useEffect(() => {
    dispatch({ type: "GET_ALL" });
    dispatch({ type: "GET_TOTAL" });
  }, [state.items]);

  const decrement = (id) => {
    return dispatch({
      type: "DECREMENT",
      payload: id,
    });
  };
  return (
    <cartContext.Provider
      value={{ ...state, removeItem, removeAllItem, increment, decrement }}
    >
      <CartContext />
    </cartContext.Provider>
  );
};

export default Cart;
