export default function WatchListItem({ watch }) {
  return (
    <div className="box">
      <div className="box-content">
        <div className="img-box">
          <img src={watch.imageUrl} alt={watch.brand} />
        </div>
        <div className="detail-box">
          <div className="text">
            <h6>{watch.brand}</h6>
            <h5>
              <span>$</span> {watch.price}
            </h5>
          </div>
          <div className="like">
            <h6>Like</h6>
            <div className="star_container">
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="btn-box">
        <a href="">Details</a>
      </div>
    </div>
  );
}
