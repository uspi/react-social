const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initialState = {
  messages: [
    { id: 1, text: "Hey" },
    { id: 2, text: "Hello" },
    { id: 3, text: "Yo yo" },
  ],
  dialogs: [
    { id: 1, name: "Vano" },
    { id: 2, name: "Maksim" },
    { id: 3, name: "Olga" },
    { id: 4, name: "Andry" },
    { id: 5, name: "Dane" },
    { id: 6, name: "Kate" },
  ],
  newMessageText: "",
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_TEXT: {
      return {
        ...state,
        newMessageText: action.newText,
      };
    }
    case SEND_MESSAGE: {
      let messageText = state.newMessageText;

      return {
        ...state,
        messages: [...state.messages, { id: 6, text: messageText }],
        newMessageText: "",
      };
    }
    default: {
      return state;
    }
  }
};

export const sendMessageCreator = () => ({
  type: SEND_MESSAGE,
});

export const updateNewMessageTextCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newText: text,
});

export default dialogsReducer;
