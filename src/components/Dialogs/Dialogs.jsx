import React from "react";
import s from "./Dialogs.module.css";

import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
  addMessageCreator,
  updateNewMessageTextCreator,
} from "../../redux/dialogs-reducer";

const Dialogs = (props) => {
  let dialogsElements = props.dialogs.map((dialog) => (
    <DialogItem id={dialog.id} name={dialog.name} />
  ));
  let messagesElements = props.messages.map((message) => (
    <Message text={message.text} />
  ));

  let onSendMessageClick = () => {
    props.sendMessage();
  };

  let onNewMessageChange = (e) => {
    let text = e.target.value;
    props.updateNewMessageText(text);
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
              value={props.newMessageText}
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
