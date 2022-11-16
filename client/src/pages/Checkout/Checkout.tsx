import React from "react";
import { Container, Row } from "react-bootstrap";
import { OrderSummary } from "../../components/OrderSummary/OrderSummary";
import { Form } from "../../FormCheckout/Form";

export const Checkout = () => {
  return (
    <Container>
      <div className="py-5 text-center">
        <h2>Último paso</h2>
        <p className="lead">
          Para finalizar tu compra, completa el sigueinte formulario
        </p>
      </div>
      <Row>
        <Form />
        <OrderSummary />
      </Row>
    </Container>
  );
};
