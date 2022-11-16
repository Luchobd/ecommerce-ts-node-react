import React, { useEffect, useState } from "react";
import { ProductFetch, ProductItem } from "../../types/typeApp";
import { getProducts } from "../../helpers/getData";

export const useFetch = () => {
  // useState
  const [data, setData] = useState<ProductFetch>({
    products: [],
    isLoading: true,
    isError: false,
  });

  // useEffect
  useEffect(() => {
    getProducts()
      .then((data) => {
        // ============== Limitador de caracteres ==================
        const customData = data.map((product: ProductItem) => ({
          ...product,
          description: product.description.substring(0, 55),
        }));
        // =========================================================

        setData({
          products: customData,
          isLoading: false,
          isError: false,
        });
      })
      .catch((err) => {
        setData({
          products: [],
          isLoading: false,
          isError: true,
        });
      });
  }, []);

  return data;
};
