import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import { FaUser, FaLock } from "react-icons/fa";

import "./Login.css";
import { useLogin } from "../../hooks/useAuth";
import useForm from "../../hooks/useForm";

const initialValues = {
  email: "",
  password: "",
};

export default function Login() {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const login = useLogin();

  const loginHandler = async ({ email, password }) => {
    try {
      await login(email, password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  const { values, changeHandler, submitHandler } = useForm(
    initialValues,
    loginHandler
  );

  return (
    <div className="wrapper">
      <div className="form-box login">
        <form onSubmit={submitHandler}>
          <h1>Login</h1>
          <div className="input-box">
            <input
              type="text"
              name="email"
              placeholder="Email"
              required
              value={values.email}
              onChange={changeHandler}
            />
            <FaUser className="icon" />
          </div>
          <div className="input-box">
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              value={values.password}
              onChange={changeHandler}
            />
            <FaLock className="icon" />
          </div>
          {error && (
            <p
              style={{
                color: "red",
                padding: "5px",
                margin: "auto",
                textAlign: "center",
              }}
            >
              <span>{error}</span>
            </p>
          )}
          <div className="remember-forgot">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <a href="#">Forgot password</a>
          </div>

          <button type="submit">Login</button>
          <div className="register-link">
            <p>
              Don't have an account? <Link to="/register">Register</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
