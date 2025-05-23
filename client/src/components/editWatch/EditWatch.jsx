import { useState } from "react";

import { useNavigate, useParams } from "react-router-dom";

import { toast } from "react-toastify";

import { useOneWatch } from "../../hooks/useWatches";
import useForm from "../../hooks/useForm";
import watchesAPI from "../../api/watches-api";
import EditModal from "./editModal/EditModal";

const initialValues = {
  brand: "",
  model: "",
  price: "",
  imageUrl: "",
  summary: "",
};

export default function EditWatch() {
  const [error, setError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pendingValues, setPendingValues] = useState({});
  const { watchId } = useParams();
  const [watch] = useOneWatch(watchId);
  const navigate = useNavigate();

  const editHandler = async (values) => {
    if (!values.brand) {
      return setError("Brand is required!");
    } else if (values.brand.length < 3) {
      return setError("Brand must be more than 2 characters!");
    } else if (values.brand.length > 30) {
      return setError("Brand cannot exceed more than 30 characters!");
    }

    if (!values.model) {
      return setError("Model is required!");
    } else if (values.model.length < 3) {
      return setError("Model must be more than 2 characters!");
    } else if (values.model.length > 60) {
      return setError("Model cannot exceed more than 60 characters!");
    }

    if (!values.price) {
      return setError("Price is required!");
    } else if (Number(values.price) < 0) {
      return setError("Price cannot be negative number!");
    }

    if (!values.imageUrl) {
      return setError("Image URL is required!");
    }

    if (!values.summary) {
      return setError("Summary is required!");
    } else if (values.summary.length < 10) {
      return setError("Summary must be more than 10 characters!");
    } else if (values.summary.length > 1000) {
      return setError("Summary cannot exceed more than 1000 characters!");
    }

    setPendingValues(values);
    setIsModalOpen(true);
  };

  const confirmEditHandler = async () => {
    try {
      await watchesAPI.editWatch(watchId, pendingValues);
      toast.success(`${pendingValues?.brand} ${pendingValues?.model} edited successfully!`);
      navigate(`/watches/${watchId}/details`);
    } catch (error) {
      console.error(error);
      toast.error("Failed to edit watch. Please try again.");
    } finally {
      setIsModalOpen(false);
    }
  };

  const { formValues, changeHandler, submitHandler } = useForm(
    Object.assign(initialValues, watch),
    editHandler
  );

  return (
    <>
      <section className="contact_section layout_padding">
        <div className="container">
          <div className="heading_container">
            <h2>Edit watch</h2>
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
                    <textarea
                      type="text"
                      name="summary"
                      className="message-box"
                      placeholder="Summary"
                      value={formValues.summary}
                      onChange={changeHandler}
                    ></textarea>
                  </div>
                  {error && (
                    <p
                      style={{
                        color: "red",
                        paddingBottom: "30px",
                        margin: "auto",
                        textAlign: "center",
                        fontWeight: "bold",
                      }}
                    >
                      <span>{error}</span>
                    </p>
                  )}
                  <div className="btn_box">
                    <button type="submit">Edit watch</button>
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
      {isModalOpen && (
        <EditModal
          brand={pendingValues?.brand}
          model={pendingValues?.model}
          onClose={() => setIsModalOpen(false)}
          onConfirm={confirmEditHandler}
        />
      )}
    </>
  );
}
