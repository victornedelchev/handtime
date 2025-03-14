import { useState } from "react";

function useForm(initialValues, submitCallback) {
  const [formValues, setFormValues] = useState(initialValues);

  const changeHandler = (e) => {
    setFormValues((pervState) => ({
      ...pervState,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = async (e) => {
    try {
      e.preventDefault();
      submitCallback(formValues);
      setFormValues(initialValues);
    } catch (error) {
      console.error(error);
    }
  };

  return {
    formValues,
    changeHandler,
    submitHandler,
  };
}

export default useForm;
