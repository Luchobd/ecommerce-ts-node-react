import { createContext, useReducer } from "react";
import cartReducer from "../../reducer/cardReducer";
import { CartContextType } from "../../types/typeApp";

const initialState = {
  cartItems: [],
  dispatch: () => {},
};

export const CartContext = createContext<CartContextType>(initialState);

export const CartProvider = ({ children }: any) => {
  const [cartItems, dispatch] = useReducer(cartReducer, initialState.cartItems);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        dispatch,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// 1:31:00
