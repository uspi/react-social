const SEND_MESSAGE = "SEND-MESSAGE";

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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      let messageText = action.newMessageText;

      return {
        ...state,
        messages: [...state.messages, { id: 6, text: messageText }],
      };
    }
    default: {
      return state;
    }
  }
};

export const sendMessageCreator = (newMessageText) => ({
  type: SEND_MESSAGE,
  newMessageText
});

export default dialogsReducer;
