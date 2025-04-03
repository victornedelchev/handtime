import { useState } from "react";
import Location from "../location/Location";
import description from "../../constants/aboutDescription";

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
                  <p>{description}</p>
                ) : (
                  <p>{description.substring(0, 137) + "..."}</p>
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
