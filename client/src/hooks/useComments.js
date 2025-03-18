import commentApi from "../api/comments-api";

function useCreateComment() {
  const createCommentHandler = (watchId, comment) => {
    commentApi.createComment(watchId, comment);
  };

  return createCommentHandler;
}

export { useCreateComment };
