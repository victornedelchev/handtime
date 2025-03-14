import { Link, useNavigate, useParams } from "react-router-dom";

import watchesAPI from "../../api/watches-api";
import { useOneWatch } from "../../hooks/useWatches";
import "./details.css";
import { useAuthContext } from "../../hooks/useAuthConetxt";

export default function Details() {
  const { watchId } = useParams();
  const navigate = useNavigate();
  const [watch] = useOneWatch(watchId);
  const { userId } = useAuthContext();

  if (!watch) {
    return <div className="details-loading">Loading...</div>;
  }

  const isOwner = userId === watch._ownerId;

  const watchDeleteHandler = async () => {
    const isConfirmed = confirm(
      `Are you sure you want to delete ${watch.brand} ${watch.model}?`
    );
    try {
      if (isConfirmed) {
        await watchesAPI.deleteWatch(watchId);
        navigate("/products");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="details-section">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="details-image-container">
              <img
                src={watch.imageUrl}
                alt={watch.brand}
                className="details-image"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="details-content">
              <h1 className="details-title">{watch.brand}</h1>
              <h2 className="details-title">{watch.model}</h2>
              <div className="details-price">${watch.price}</div>
              <div className="details-specs">
                <h3>Specifications</h3>
                {watch.summary}
              </div>
              {isOwner && (
                <div className="details-actions">
                  <Link to={`/watches/${watchId}/edit`} className="btn-edit">
                    Edit
                  </Link>
                  <button className="btn-delete" onClick={watchDeleteHandler}>
                    Delete
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
