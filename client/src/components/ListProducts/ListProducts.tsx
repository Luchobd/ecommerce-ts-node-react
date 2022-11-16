// import "./styles.css";

import { useContext } from "react";
import { ProductItem } from "../../types/typeApp";
import { CartContext } from "../context/CartContext";
import { useFetch } from "../hooks/useFetch";
import { Product } from "./Product/Product";

export const ListProducts = () => {
  const { dispatch } = useContext(CartContext);

  const { products, isLoading } = useFetch();

  const handleAddToCart = (product: ProductItem) => {
    dispatch({
      payload: product,
      type: "ADD",
    });
  };

  if (isLoading) return <h1>Cargando...</h1>;

  return (
    <>
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          handleAddToCart={handleAddToCart}
        />
      ))}
    </>
  );
};
