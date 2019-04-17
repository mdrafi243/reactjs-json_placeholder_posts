import * as actionTypes from "./actionTypes";
import Axios from "axios";

let axios = Axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  headers: {
    "Cache-Control": "no-cache, no-store"
  }
});

export const fetchPosts = () => {
  return dispatch => {
    return axios
      .get("posts")
      .then(response => {
        console.log(response.data);
        dispatch(fetchPostsSuccess(response.data));
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const fetchPostsSuccess = posts => {
  return {
    type: actionTypes.FETCH_POSTS_SUCCESS,
    posts
  };
};

export const clearPosts = () => {
  return {
    type: actionTypes.CLEAR_POSTS
  };
};

export const fetchPost = id => {
  console.log(id);
  return dispatch => {
    return axios
      .get("posts/" + id)
      .then(response => {
        console.log(response.data);
        dispatch(fetchPostSuccess(response.data));
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const fetchPostSuccess = post => {
  return {
    type: actionTypes.FETCH_POST_SUCCESS,
    post
  };
};
