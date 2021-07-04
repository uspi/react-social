const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      let newMessage = {
        id: 5,
        text: state.newMessageText,
      };

      state.messages.push(newMessage);
      state.newMessageText = "";
      break;
    }
    case UPDATE_NEW_MESSAGE_TEXT: {
      state.newMessageText = action.newText;
      break;
    }
    default: {
    }
  }

  return state;
};

export const addMessageCreator = () => ({
  type: ADD_MESSAGE,
});

export const updateNewMessageTextCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newText: text,
});

export default dialogsReducer;
