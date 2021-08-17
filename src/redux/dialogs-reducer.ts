import { InferActionsTypes } from "./redux-store";

//const SEND_MESSAGE = "SEND-MESSAGE";

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
  action: ActionsType
): InitialStateType => {
  switch (action.type) {
    case "SN/DIALOGS/SEND_MESSAGE": {
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
export const actions = {
  sendMessage: (
    newMessageText: string
  ) => ({
    type: "SN/DIALOGS/SEND_MESSAGE",
    newMessageText,
  } as const)
}


export default dialogsReducer;

// Types
type DialogType = {
  id: number;
  name: string;
};
type MessageType= {
  id: number;
  text: string;
};
export type InitialStateType = typeof initialState;
export type ActionsType = InferActionsTypes<typeof actions>