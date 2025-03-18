import BASE_COMMENTS_URL from "../constants/commentsBaseUrl";
import * as requester from "./requester";

const createComment = (watchId, comment) =>
  requester.post(`${BASE_COMMENTS_URL}`, { watchId, comment });

const commentApi = {
  createComment,
};

export default commentApi;
