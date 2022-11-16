import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { CartContext } from "../components/context/CartContext";
import { useForm } from "../components/hooks/useForm";
import { Customer } from "../types/typeApp";

const initialState = {
  name: "",
  lastname: "",
  email: "",
  address: "",
};

export const Form = () => {
  const { cartItems, dispatch } = useContext(CartContext);

  const { name, lastname, email, address, handleInputChange, resetValues } =
    useForm<Customer>(initialState);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Enviado al Server");

    resetValues();

    dispatch({
      payload: [],
      type: "CLEAR",
    });
  };

  return (
    <div className="col-md-7 col-lg-8">
      <h4 className="mb-3">Checkout</h4>
      <form autoComplete="off" onSubmit={(e) => handleSubmit(e)}>
        <div className="row g-3">
          <div className="col-sm-6">
            <label htmlFor="name" className="form-label">
              Nombres
            </label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={name}
              id="name"
              placeholder="Nombres..."
              onChange={(e) => handleInputChange(e)}
            />
          </div>

          <div className="col-sm-6">
            <label htmlFor="lastname" className="form-label">
              Apellidos
            </label>
            <input
              type="text"
              className="form-control"
              name="lastname"
              value={lastname}
              id="lastname"
              placeholder="Apellidos..."
              onChange={(e) => handleInputChange(e)}
            />
          </div>

          <div className="col-12">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={email}
              id="email"
              placeholder="Email..."
              onChange={(e) => handleInputChange(e)}
            />
          </div>

          <div className="col-12">
            <label htmlFor="address" className="form-label">
              Dirección
            </label>
            <input
              type="text"
              className="form-control"
              name="address"
              value={address}
              id="address"
              placeholder="Dirección..."
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </div>
        <button className="w-100 btn btn-primary mt-4" type="submit">
          Procesar Orden
        </button>
      </form>
    </div>
  );
};
