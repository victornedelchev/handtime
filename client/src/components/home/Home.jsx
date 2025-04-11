import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="hero_area">
        <section className="slider_section ">
          <div className="slider_bg_box">
            <img src="images/slider-bg.jpg" alt="slider picture" />
          </div>
          <div
            id="customCarousel1"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="container ">
                  <div className="row">
                    <div className="col-md-7">
                      <div className="detail-box">
                        <h1>Stylish Watches</h1>
                        <p>
                          See world time in your local time zone. You can also
                          set alarms and timers for different time zones.
                        </p>
                        <div className="btn-box">
                          <Link to="/world-clock" className="btn1">
                            World Clock
                          </Link>
                          <Link to="/about" className="btn2">
                            About Us
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="container ">
                  <div className="row">
                    <div className="col-md-7">
                      <div className="detail-box">
                        <h1>Stylish Watches</h1>
                        <p>
                          Our watches are designed to be both stylish and
                          functional. Whether you're dressing up for a special
                          occasion or just want to add a touch of elegance to
                          your everyday look, we have the perfect watch for you.
                        </p>
                        <div className="btn-box">
                          <Link to="/all-watches" className="btn1">
                            All Watches
                          </Link>
                          <Link to="/about" className="btn2">
                            About Us
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="container ">
                  <div className="row">
                    <div className="col-md-7">
                      <div className="detail-box">
                        <h1>Stylish Watches</h1>
                        <p>
                          See our latest collection of watches. We have a wide
                          range of styles and designs to choose from, so you're
                          sure to find the perfect watch for you.
                        </p>
                        <div className="btn-box">
                          <Link to="/newly-added-watches" className="btn1">
                            Newly Added
                          </Link>
                          <Link to="/about" className="btn2">
                            About Us
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="container ">
                  <div className="row">
                    <div className="col-md-7">
                      <div className="detail-box">
                        <h1>Stylish Watches</h1>
                        <p>
                          Follow us on social media to stay updated on our
                          latest collections. We love to see how you style our
                          watches, so don't forget to tag us in your photos!
                        </p>
                        <div className="btn-box">
                          <Link to="/info" className="btn1">
                            Info
                          </Link>
                          <Link to="/about" className="btn2">
                            About Us
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ol className="carousel-indicators">
              <li
                data-target="#customCarousel1"
                data-slide-to="0"
                className="active"
              ></li>
              <li data-target="#customCarousel1" data-slide-to="1"></li>
              <li data-target="#customCarousel1" data-slide-to="2"></li>
              <li data-target="#customCarousel1" data-slide-to="3"></li>
            </ol>
          </div>
        </section>
      </div>
      <section className="service_section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 col-lg-3">
              <div className="box ">
                <div className="img-box">
                  <img src="images/feature-1.png" alt="" />
                </div>
                <div className="detail-box">
                  <h5>Fast Delivery</h5>
                  <p>variations of passages of Lorem Ipsum available</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="box ">
                <div className="img-box">
                  <img src="images/feature-2.png" alt="" />
                </div>
                <div className="detail-box">
                  <h5>Free Shiping</h5>
                  <p>variations of passages of Lorem Ipsum available</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="box ">
                <div className="img-box">
                  <img src="images/feature-3.png" alt="" />
                </div>
                <div className="detail-box">
                  <h5>Best Quality</h5>
                  <p>variations of passages of Lorem Ipsum available</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="box ">
                <div className="img-box">
                  <img src="images/feature-4.png" alt="" />
                </div>
                <div className="detail-box">
                  <h5>24x7 Customer support</h5>
                  <p>variations of passages of Lorem Ipsum available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
