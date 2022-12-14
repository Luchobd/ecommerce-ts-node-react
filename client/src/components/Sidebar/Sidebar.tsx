import { Offcanvas } from "react-bootstrap";
import { Cart } from "../Cart/Cart";

type Props = {
  handleClose: (state: boolean) => void;
};

export const Sidebar = ({ handleClose }: Props) => {
  return (
    <>
      <Offcanvas
        show={true}
        onHide={() => handleClose(false)}
        placement={"end"}
        scroll={true}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Carrito de compras</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Cart />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
