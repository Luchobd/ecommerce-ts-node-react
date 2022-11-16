import { useState } from "react";
import { Navigation } from "./components/Navigation/Navigation";
import { BrowserRouter } from "react-router-dom";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { CartProvider } from "./components/context/CartContext";

const AppCommerce = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <Navigation handleOpen={setShow} />
          {show && <Sidebar handleClose={setShow} />}
        </CartProvider>
      </BrowserRouter>
    </>
  );
};

export default AppCommerce;

// 2:14:00
