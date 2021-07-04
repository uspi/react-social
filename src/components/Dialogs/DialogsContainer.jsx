import React from "react";
import {
  addMessageCreator,
  updateNewMessageTextCreator,
} from "../../redux/dialogs-reducer";

import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
  let state = props.store.getState();

  let onSendMessageClick = () => {
    props.store.dispatch(addMessageCreator());
  };
  let onNewMessageChange = (text) => {
    props.store.dispatch(updateNewMessageTextCreator(text));
  };

  return (
    <Dialogs
      updateNewMessageText={onNewMessageChange}
      sendMessage={onSendMessageClick}
      newMessageText={state.dialogsPage.newMessageText}
      dialogs={state.dialogsPage.dialogs}
      messages={state.dialogsPage.messages}
    />
  );
};

export default DialogsContainer;
