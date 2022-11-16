import { ListProducts } from "../../components/ListProducts/ListProducts";
import { Container } from "react-bootstrap";
import "./styles.css";

export const Home = () => {
  return (
    <Container className="mt-3 home">
      <ListProducts />
    </Container>
  );
};
