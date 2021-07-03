import React from "react";
import s from "./Dialogs.module.css";

import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
  addMessageCreator,
  updateNewMessageTextCreator,
} from "../../redux/state";

const Dialogs = (props) => {
  let dialogsElements = props.state.dialogs.map((dialog) => (
    <DialogItem id={dialog.id} name={dialog.name} />
  ));
  let messagesElements = props.state.messages.map((message) => (
    <Message text={message.text} />
  ));
  let newMessageText = props.state.newMessageText;

  let onSendMessageClick = () => {
    props.dispatch(addMessageCreator());
  };
  let onNewMessageChange = (e) => {
    //let text = newMessageElement.current.value;
    let text = e.target.value;
    props.dispatch(updateNewMessageTextCreator(text));
  };

  let newMessageElement = React.createRef();

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsArea}>
        <div className={s.dialogsItems}>{dialogsElements}</div>
      </div>

      <div className={s.messagesArea}>
        <div className={s.messagesItems}>{messagesElements}</div>

        <div className={s.newMessageBlock}>
          <div className={s.textAreaContainer}>
            <textarea
              ref={newMessageElement}
              onChange={onNewMessageChange}
              value={newMessageText}
            />
          </div>
          <div>
            <button onClick={onSendMessageClick}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
