import { combineReducers } from "redux";
import { postsReducer, singlePostReducer } from "./postReducer";

export default combineReducers({
  posts: postsReducer,
  post: singlePostReducer
});
