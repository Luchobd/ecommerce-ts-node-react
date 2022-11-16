import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Footer } from "./Footer/Footer";
import { Item } from "./Item/Item";
import "./styles.css";

export const Cart = () => {
  const { cartItems } = useContext(CartContext);

  if (!cartItems.length) return <h5>Ningun item por pagar</h5>;

  return (
    <div className="shoping-cart">
      {cartItems.map((item) => (
        <Item key={item.id} item={item} />
      ))}
      <Footer />
    </div>
  );
};
