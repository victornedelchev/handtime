import { useEffect, useState } from "react";
import commentApi from "../api/comments-api";

function useCreateComment() {
  const createCommentHandler = (watchId, comment) =>
    commentApi.createComment(watchId, comment);
  return createCommentHandler;
}

function useGetAllComments(watchId) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const result = await commentApi.getAllComments(watchId);
        setComments(result);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [watchId]);

  return [comments, setComments];
}

export { useCreateComment, useGetAllComments };
