type SendMessageCreatorReturnType = {
  type: typeof SEND_MESSAGE;
  newMessageText: string;
};
type DialogType = {
  id: number;
  name: string;
};
type MessageType= {
  id: number;
  text: string;
};
export type InitialStateType = typeof initialState;

const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
  messages: [
    { id: 1, text: "Hey" },
    { id: 2, text: "Hello" },
    { id: 3, text: "Yo yo" },
  ] as MessageType[],
  dialogs: [
    { id: 1, name: "Vano" },
    { id: 2, name: "Maksim" },
    { id: 3, name: "Olga" },
    { id: 4, name: "Andry" },
    { id: 5, name: "Dane" },
    { id: 6, name: "Kate" },
  ] as DialogType[],
};

const dialogsReducer = (
  state = initialState,
  action: SendMessageCreatorReturnType
): InitialStateType => {
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

// action creators
export const sendMessageCreator = (
  newMessageText: string
): SendMessageCreatorReturnType => ({
  type: SEND_MESSAGE,
  newMessageText,
});

export default dialogsReducer;
