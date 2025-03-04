import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import { FaUser, FaLock } from "react-icons/fa";

import "./Login.css";
import { useLogin } from "../../hooks/useAuth";
import useForm from "../../hooks/useForm";
import { isValidEmail } from "../../utils/validation";

const initialValues = {
  email: "",
  password: "",
};

export default function Login() {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const login = useLogin();

  const loginHandler = async ({ email, password }) => {
    if (!email) {
      return setError("Email is required!");
    } else if (!isValidEmail(email)) {
      return setError("This is not valid email format!");
    }

    if (!password) {
      return setError("Password is required!");
    } else if (password.length < 4) {
      return setError("Password must be more than 4 characters!")
    } else if (password.length > 10) {
      return setError("Password cannot exceed more than 15 characters!")
    }

    try {
      await login(email, password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  const { formValues, changeHandler, submitHandler } = useForm(
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
              type="email"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={changeHandler}
            />
            <FaUser className="icon" />
          </div>
          <div className="input-box">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formValues.password}
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
