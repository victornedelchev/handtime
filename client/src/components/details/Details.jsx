import { Link, useNavigate, useParams } from "react-router-dom";

import watchesAPI from "../../api/watches-api";
import { useOneWatch } from "../../hooks/useWatches";
import "./details.css";
import { useAuthContext } from "../../hooks/useAuthConetxt";
import { useState } from "react";
import DeleteModal from "./deleteModal/DeleteModal";
import { useCreateComment } from "../../hooks/useComments";
import useForm from "../../hooks/useForm";

export default function Details() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const { watchId } = useParams();
  const navigate = useNavigate();
  const [watch] = useOneWatch(watchId);
  const { userId } = useAuthContext();
  const createComment = useCreateComment();

  const initialValues = "";

  const newWatchComment = async (values) => {
    try {
      const newComment = await createComment(watchId, values.comment);
      console.log(values.commentues);
    } catch (error) {
      console.error(error);
    }
  };

  const { formValues, changeHandler, submitHandler } = useForm(
    initialValues,
    newWatchComment
    // async(values) => {
    //   try {
    //     const newComment = createComment(watchId, values.comment);
    //     console.log(newComment);
    //   } catch (error) {
    //     console.error(error);
    //   }
    // }
  );

  if (!watch) {
    return <div className="details-loading">Loading...</div>;
  }

  const isOwner = userId === watch._ownerId;

  const watchDeleteHandler = async () => {
    try {
      await watchesAPI.deleteWatch(watchId);
      navigate("/products");
    } catch (error) {
      console.error(error);
    }
  };

  const closeModalHandler = () => {
    setIsOpenModal(false);
  };

  return (
    <>
      {isOpenModal && (
        <DeleteModal
          name={watch.brand}
          model={watch.model}
          onClose={closeModalHandler}
          onConfirm={watchDeleteHandler}
        />
      )}
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
                    <button
                      className="btn-delete"
                      onClick={() => setIsOpenModal(true)}
                    >
                      Delete
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="comments-container">
        <h3>Comments</h3>

        <p>Loading comments...</p>
        <p className="error-message"></p>

        <div className="add-comment-section">
          <form onSubmit={submitHandler}>
            <textarea
              name="comment"
              className="comment-textarea"
              placeholder="Add a comment..."
              value={formValues.comment}
              onChange={changeHandler}
            />
            <input
              className="add-comment-button"
              value="Add Comment"
              type="submit"
            />
          </form>
        </div>
      </div>
    </>
  );
}
