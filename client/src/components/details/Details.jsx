import { Link, useNavigate, useParams } from "react-router-dom";

import watchesAPI from "../../api/watches-api";
import { useOneWatch } from "../../hooks/useWatches";
import "./details.css";
import { useAuthContext } from "../../hooks/useAuthConetxt";
import { useState } from "react";
import DeleteModal from "./deleteModal/DeleteModal";
import { useCreateComment, useGetAllComments } from "../../hooks/useComments";
import useForm from "../../hooks/useForm";
import dateFormatter from "../../utils/dateFormatter";

export default function Details() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const { watchId } = useParams();
  const navigate = useNavigate();
  const [watch] = useOneWatch(watchId);
  const { userId, username } = useAuthContext();
  const createComment = useCreateComment();
  const [comments, setComments] = useGetAllComments(watchId);
  const [error, setError] = useState("");

  const initialValues = {
    comment: "",
  };

  const newWatchComment = async (values) => {
    if (!values.comment) {
      return setError("Comment is required!");
    } else if (values.comment.length < 3) {
      return setError("Comment must be at least 3 characters long!");
    }

    try {
      const newWatchComment = await createComment(watchId, values.comment);

      setComments((prevComment) => [
        ...prevComment,
        { ...newWatchComment, author: { username } },
      ]);
    } catch (error) {
      console.error(error);
    }
  };

  const { formValues, changeHandler, submitHandler } = useForm(
    initialValues,
    newWatchComment
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
      {comments.length > 0 ? (
        <ul className="comment-list">
          {comments.map((comment) => (
            <li key={comment._id} className="comment-item">
              <p className="comment-text">{comment.comment}</p>
              <p className="comment-meta">
                By: {comment.author.username} -{" "}
                {dateFormatter(comment._createdOn)}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No comments yet.</p>
      )}
      {}
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
            {error && (
              <p
                style={{
                  color: "red",
                  padding: "5px",
                  margin: "auto",
                  textAlign: "center",
                }}
              >
                <span>{error}</span>
              </p>
            )}
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
