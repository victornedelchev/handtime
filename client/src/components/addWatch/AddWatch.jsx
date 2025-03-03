export default function AddWatch() {
  return (
    <section className="contact_section layout_padding">
      <div className="container">
        <div className="heading_container">
          <h2>Add watch</h2>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="form_container">
              <form action="">
                <div>
                  <input type="text" name="brand" placeholder="Brand" />
                </div>
                <div>
                  <input type="text" name="model" placeholder="Model" />
                </div>
                <div>
                  <input type="number" name="price" placeholder="Price" />
                </div>
                <div>
                  <input type="price" name="imageUrl" placeholder="Image URL" />
                </div>
                <div>
                  <input
                    type="text"
                    name="summary"
                    className="message-box"
                    placeholder="Summary"
                  />
                </div>
                <div className="btn_box">
                  <button>SEND</button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-6 ">
            <div className="map_container">
              <div className="map">
                <div id="googleMap"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
