const initialState = {
  posts: [],
  loginModal: {
    open: false,
  },
};

export const reducer = (state = initialState, action) => {
  if (action.type === "ADD_POST") {
    return {
      ...state,
      posts: state.posts.concat(action.payload)
    };
  }

  return state;
};
