export const reducer = (state, action) => {
  switch (action.type) {
    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => {
          return item.id !== action.payload;
        }),
      };
    case "REMOVE_ALL":
      return {
        ...state,
        items: [],
      };
    case "INCREMENT":
      let updatedCart = state.items.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      });
      return {
        ...state,
        items: updatedCart,
      };
    case "DECREMENT":
      let updateCart = state.items
        .map((item) => {
          if (item.id === action.payload) {
            return {
              ...item,
              quantity: item.quantity - 1,
            };
          }
          return item;
        })
        .filter((item) => item.quantity !== 0);
      return {
        ...state,
        items: updateCart,
      };

    case "GET_ALL":
      let { totalItem } = state.items.reduce(
        (acc, curVal) => {
          let { quantity } = curVal;
          acc.totalItem += quantity;
          return acc;
        },
        {
          totalItem: 0,
        }
      );
      return {
        ...state,
        totalItem,
      };
    case "GET_TOTAL":
      let { totalAmount } = state.items.reduce(
        (acc, curVal) => {
          let { price, quantity } = curVal;
          let updatedPrice = price * quantity;
          acc.totalAmount += updatedPrice;
          return acc;
        },
        {
          totalAmount: 0,
        }
      );
      return {
        ...state,
        totalAmount,
      };

    default:
      return state;
  }
};
