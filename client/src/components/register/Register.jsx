import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";

import "./Register.css";
import { useRegister } from "../../hooks/useAuth";
import useForm from "../../hooks/useForm";
import { isValidEmail } from "../../utils/validation";

const initialValues = { username: "", email: "", password: "", rePassword: "" };

export default function Register() {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const register = useRegister();

  const registerHandler = async (values) => {
    if (values.password !== values.rePassword) {
      return setError("Password don't match!");
    }

    if (!values.username) {
      return setError("Username is required!");
    } else if (values.username.length < 3) {
      return setError("Username must be more than 2 characters!")
    } else if (values.username.length > 15) {
      return setError("Username cannot exceed more than 15 characters!")
    }

    if (!values.email) {
      return setError("Email is required!");
    } else if (!isValidEmail(values.email)) {
      return setError("This is not valid email format!");
    } 

    if (!values.password) {
      return setError("Password is required!");
    } else if (values.password.length < 4) {
      return setError("Password must be more than 4 characters!")
    } else if (values.password.length > 15) {
      return setError("Password cannot exceed more than 15 characters!")
    }

    if (!values.rePassword) {
      return setError("Confirm Password is required!");
    } else if (values.rePassword.length < 4) {
      return setError("Confirm Password must be more than 4 characters!")
    } else if (values.rePassword.length > 15) {
      return setError("Confirm Password exceed more than 15 characters!")
    }
    
    try {
      await register(
        values.username,
        values.email,
        values.password,
        values.rePassword
      );
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  const { formValues, changeHandler, submitHandler } = useForm(
    initialValues,
    registerHandler
  );

  return (
    <div className="wrapper">
      <div className="form-box register">
        <form onSubmit={submitHandler}>
          <h1>Registration</h1>
          <div className="input-box">
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formValues.username}
              onChange={changeHandler}
            />
            <FaUser className="icon" />
          </div>
          <div className="input-box">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={changeHandler}
            />
            <FaEnvelope className="icon" />
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={formValues.password}
              onChange={changeHandler}
            />
            <FaLock className="icon" />
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Confirm password"
              name="rePassword"
              value={formValues.rePassword}
              onChange={changeHandler}
            />
            <FaLock className="icon" />
          </div>
          {error && (
            <p
              style={{
                color: "red",
                paddingBottom: "30px",
                margin: "auto",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              <span>{error}</span>
            </p>
          )}
          <button type="submit">Register</button>
          <div className="register-link">
            <p>
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
