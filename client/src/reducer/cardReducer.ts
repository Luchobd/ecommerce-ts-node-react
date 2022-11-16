import { CartActionReducer, CartItem } from "../types/typeApp";

const cartReducer = (state: CartItem[], action: CartActionReducer) => {
  switch (action.type) {
    case "ADD":
      const existProduct = state.find((item) => item.id === action.payload.id);
      if (existProduct) {
        return state.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              amount: item.amount + 1,
            };
          }
          return item;
        });
      } else {
        const { id, title, image, price } = action.payload;
        return [...state, { id, title, image, price, amount: 1 }];
      }

    case "REMOVE":
      /*
      [ITEM1,ITEM2,ITEM3]
      */
      return state.reduce((acu, item) => {
        if (item.id === action.payload) {
          if (item.amount === 1) return acu;
          else return [...acu, { ...item, amount: item.amount - 1 }];
        }
        return [...acu, item];
      }, [] as CartItem[]);

    case "REMOVE-ALL":
      return state.filter((item) => item.id !== action.payload);

    case "CLEAR":
      return [];

    default:
      return state;
  }
};

export default cartReducer;
