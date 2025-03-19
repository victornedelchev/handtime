import BASE_COMMENTS_URL from "../constants/commentsBaseUrl";
import * as requester from "./requester";

const createComment = (watchId, comment) =>
  requester.post(`${BASE_COMMENTS_URL}`, { watchId, comment });

const getAllComments = (watchId) => {
  const params = new URLSearchParams({
    where: `watchId="${watchId}"`,
    load: `author=_ownerId:users`,
  });

  try {
    return requester.get(`${BASE_COMMENTS_URL}?${params.toString()}`);
  } catch (error) {
    console.error(error);
  }
};

const commentApi = {
  createComment,
  getAllComments,
};

export default commentApi;
