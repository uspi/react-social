const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const profileReducer = (state, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0,
      };

      state.posts.push(newPost);
      state.newPostText = "";
      break;
    }
    case UPDATE_NEW_POST_TEXT: {
      state.newPostText = action.newText;
      break;
    }
    default: {
    }
  }
  return state;
};

export default profileReducer;

export const addPostCreator = () => ({
  type: ADD_POST,
});

export const updateNewPostTextCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});
