const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
  posts: [
    { id: 1, message: "My first post", likesCount: 0 },
    { id: 2, message: "Second post", likesCount: 2 },
    { id: 3, message: "My third post", likesCount: 5 },
  ],
  newPostText: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      return {
        ...state,
        posts: [
          ...state.posts,
          {
            id: 5,
            message: state.newPostText,
            likesCount: 0,
          },
        ],
        newPostText: ""
      };
    }
    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newText
      };
    }
    default: {
      return state;
    }
  }
};

export default profileReducer;

export const addPostCreator = () => ({
  type: ADD_POST,
});

export const updateNewPostTextCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});
