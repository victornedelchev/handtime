import { useState } from "react";

function useForm(initialValues, submitCallback) {
  const [formValues, setFormValues] = useState(initialValues);

  const changeHandler = (e) => {
    setFormValues((pervState) => ({
      ...pervState,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    submitCallback(formValues);
  };

  return {
    formValues,
    changeHandler,
    submitHandler,
  };
}

export default useForm;
