import { useNavigate } from "react-router-dom";

import { useCreateWatch } from "../../hooks/useWatches";
import useForm from "../../hooks/useForm";

export default function AddWatch() {
  const navigate = useNavigate();
  const createWatch = useCreateWatch();

  const createHandler = async (values) => {
    try {
      const { _id: watchId } = await createWatch(values);
      navigate(`/watches/${watchId}/details`);
    } catch (error) {
      console.error(error);
    }
  };

  const initialValues = {
    brand: "",
    model: "",
    price: "",
    imageUrl: "",
    summary: "",
  };

  const { formValues, changeHandler, submitHandler } = useForm(
    initialValues,
    createHandler
  );

  return (
    <section className="contact_section layout_padding">
      <div className="container">
        <div className="heading_container">
          <h2>Add watch</h2>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="form_container">
              <form onSubmit={submitHandler}>
                <div>
                  <input
                    type="text"
                    name="brand"
                    placeholder="Brand"
                    value={formValues.brand}
                    onChange={changeHandler}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="model"
                    placeholder="Model"
                    value={formValues.model}
                    onChange={changeHandler}
                  />
                </div>
                <div>
                  <input
                    type="number"
                    min="1"
                    name="price"
                    placeholder="Price"
                    value={formValues.price}
                    onChange={changeHandler}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="imageUrl"
                    placeholder="Image URL"
                    value={formValues.imageUrl}
                    onChange={changeHandler}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="summary"
                    className="message-box"
                    placeholder="Summary"
                    value={formValues.summary}
                    onChange={changeHandler}
                  />
                </div>
                <div className="btn_box">
                  <button type="submit">Add</button>
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
