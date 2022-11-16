import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { Badge, Container, Nav, Navbar } from "react-bootstrap";
import { getTotalItems } from "../../helpers/calculate";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

type Props = {
  handleOpen: (state: boolean) => void;
};

export const NavBar = ({ handleOpen }: Props) => {
  const { cartItems } = useContext(CartContext);

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Link to="/" className="navbar-brand">
          Ecommerce
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/" className="navbar-brand">
              Home
            </Link>
          </Nav>
        </Navbar.Collapse>
        <FontAwesomeIcon
          icon={faShoppingCart}
          color="white"
          size="2x"
          style={{ cursor: "pointer" }}
          onClick={() => handleOpen(true)}
        />
        <Badge bg="secondary">{getTotalItems(cartItems)}</Badge>
      </Container>
    </Navbar>
  );
};
