import { Link } from "react-router-dom";

import "./notFound.css";

export default function NotFound() {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1 className="not-found-title">404</h1>
        <h2 className="not-found-subtitle">Page Not Found</h2>
        <p className="not-found-text">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <div className="not-found-actions">
          <Link to="/" className="btn-home">
            Go to Homepage
          </Link>
          <Link to="/products" className="btn-products">
            View Products
          </Link>
        </div>
      </div>
    </div>
  );
}
