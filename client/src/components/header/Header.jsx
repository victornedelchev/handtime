import { useContext } from "react";

import { Link } from "react-router-dom";

import { AuthContext } from "../../contexts/authContext";

export default function Header() {
  const { username, isAuthenticated } = useContext(AuthContext);

  return (
    <header className="header_section">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg custom_nav-container ">
          <Link className="navbar-brand" to="/">
            <span>HandTime</span>
          </Link>

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
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                    <Link className="nav-link" to="/products">
                      Products
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/client">
                      Testimonial
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/about">
                      {" "}
                      About
                    </Link>
                  </li>
              {isAuthenticated ? (
                <>

                  <li className="nav-item">
                    <Link className="nav-link" to="/add-watch">
                      Add Watch
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/logout">
                      {" "}
                      Logout
                    </Link>
                  </li>
                  <li style={{color: "#8019c8"}}>Welcome {username}</li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">
                      {" "}
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/register">
                      {" "}
                      Register
                    </Link>
                  </li>
                  <li style={{color: "#8019c8"}}>WELCOME GUESTS</li>
                </>
              )}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
