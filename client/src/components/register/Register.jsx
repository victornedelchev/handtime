import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";

import "./Register.css";
import { useRegister } from "../../hooks/useAuth";
import useForm from "../../hooks/useForm";

const initialValues = { username: "", email: "", password: "", rePassword: "" };

export default function Register() {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const register = useRegister();

  const registerHandler = async (values) => {
    if (values.password !== values.rePassword) {
      return setError("Password don't match!");
    }

    try {
      await register(values.username, values.email, values.password, values.rePassword);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  const { values, changeHandler, submitHandler } = useForm(
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
              required
              value={values.username}
              onChange={changeHandler}
            />
            <FaUser className="icon" />
          </div>
          <div className="input-box">
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              value={values.email}
              onChange={changeHandler}
            />
            <FaEnvelope className="icon" />
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              name="password"
              required
              value={values.password}
              onChange={changeHandler}
            />
            <FaLock className="icon" />
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Confirm password"
              name="rePassword"
              required
              value={values.rePassword}
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
