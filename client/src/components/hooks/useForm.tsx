import { ChangeEvent, useState } from "react";
// import { Customer } from "../../types/typeApp";

export const useForm = <T extends Object>(initialState: T) => {
  const [formValues, setFormValues] = useState(initialState);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const resetValues = () => {
    setFormValues(initialState);
  };

  return {
    ...formValues,
    handleInputChange,
    resetValues,
  };
};
