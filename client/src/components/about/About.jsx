import { useState } from "react";
import Location from "../location/Location";

export default function About() {
  const [readMore, setReadMore] = useState(false);
  const toggleReadMore = () => setReadMore(!readMore);
  return (
    <>
      <section className="about_section layout_padding">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <div className="img_container">
                <div className="img-box b1">
                  <img src="images/a-1.jpg" alt="" />
                </div>
                <div className="img-box b2">
                  <img src="images/a-2.jpg" alt="" />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="detail-box">
                <h2>About This App</h2>
                {readMore ? (
                  <p>
                    This is an application for lovers and admirers of
                    wristwatches. Here you can browse watches added by other
                    users, as well as add comments about them. After
                    registering, you have the opportunity to add an unlimited
                    number of watches that you like.
                  </p>
                ) : (
                  <p>
                    This is an application for lovers and admirers of
                    wristwatches. Here you can browse watches added by other
                    users, as well as add comments...
                  </p>
                )}
                <button onClick={toggleReadMore}>
                  {readMore ? "Read Less" : "Read More"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Location />
    </>
  );
}
