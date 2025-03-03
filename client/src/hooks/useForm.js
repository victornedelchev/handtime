import { useState } from "react";

function useForm(initialValues, submitCallback) {
  const [values, setValues] = useState(initialValues);

  const changeHandler = (e) => {
    setValues((pervState) => ({
      ...pervState,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    submitCallback(values);
  };

  return {
    values,
    changeHandler,
    submitHandler,
  };
}

export default useForm;
