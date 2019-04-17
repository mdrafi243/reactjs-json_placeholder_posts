import * as actionType from "../actions/actionTypes";

export const postsReducer = (state = [], action) => {
  switch (action.type) {
    case actionType.FETCH_POSTS_SUCCESS:
      return action.posts;
    case actionType.CLEAR_POSTS:
      return [];
    default:
      return state;
  }
};

export const singlePostReducer = (state = {}, action) => {
  switch (action.type) {
    case actionType.FETCH_POST_SUCCESS:
      return action.post;
    default:
      return state;
  }
};
