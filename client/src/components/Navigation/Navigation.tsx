import { NavBar } from "../NavBar/NavBar";
import { Routes, Route } from "react-router-dom";
import { Home } from "../../pages/Home/Home";
import { Checkout } from "../../pages/Checkout/Checkout";

type Props = {
  handleOpen: (state: boolean) => void;
};

export const Navigation = ({ handleOpen }: Props) => {
  return (
    <>
      <NavBar handleOpen={handleOpen} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </>
  );
};
