import { useContext } from "react";

import { Link, NavLink } from "react-router-dom";

import { AuthContext } from "../../contexts/authContext";
import DigitalClock from "../digitalClock/DigitalClock";
import Weather from "../weather/Weather";

export default function Header() {
  const { username, isAuthenticated } = useContext(AuthContext);

  const linkClass = ({ isActive }) => {
    return isActive ? "nav-link active" : "nav-link";
  };

  return (
    <header className="header_section">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg custom_nav-container ">
          <Link className="navbar-brand" to="/">
            <span>HandTime</span>
          </Link>

          <DigitalClock />

          <Weather />

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className=""> </span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav  ">
              <li className="nav-item">
                <NavLink className={linkClass} to="/world-clock">
                  World Clock
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={linkClass} to="/products">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={linkClass} to="/client">
                  Testimonial
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={linkClass} to="/about">
                  {" "}
                  About
                </NavLink>
              </li>
              {isAuthenticated ? (
                <>
                  <li className="nav-item">
                    <NavLink className={linkClass} to="/watches/add-watch">
                      Add Watch
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className={linkClass} to="/logout">
                      {" "}
                      Logout
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className={linkClass} to="/user-profile">
                      {" "}
                      Profile
                    </NavLink>
                  </li>
                  <li
                    style={{
                      color: "#8019c8",
                      marginLeft: "20px",
                      fontWeight: "bold",
                    }}
                  >
                    WELCOME {username.toUpperCase()}
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <NavLink className={linkClass} to="/login">
                      {" "}
                      Login
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className={linkClass} to="/register">
                      {" "}
                      Register
                    </NavLink>
                  </li>
                  <li style={{ color: "#8019c8", marginLeft: "20px" }}>
                    WELCOME GUESTS
                  </li>
                </>
              )}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
