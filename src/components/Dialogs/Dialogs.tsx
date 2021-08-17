import React from "react";
import s from "./Dialogs.module.css";

import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import AddMessageForm from "./AddMessageForm/AddMessageForm";
import { MapStateType } from "./DialogsContainer";
import { FormSubmitHandler } from "redux-form";

const Dialogs: React.FC<PropsType> = (props) => {
  let dialogsElements = props.dialogs.map((dialog) => (
    <DialogItem key={dialog.id} id={dialog.id} name={dialog.name} />
  ));
  let messagesElements = props.messages.map((message) => (
    <Message key={message.id} id={message.id} text={message.text} />
  ));

  let addNewMessage: FormSubmitHandler = (values: any) => {
    console.log(values.newMessageBlock)
    props.sendMessage(values.newMessageText);
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsArea}>
        <div className={s.dialogsItems}>{dialogsElements}</div>
      </div>

      <div className={s.messagesArea}>
        <div className={s.messagesItems}>{messagesElements}</div>

        <div className={s.newMessageBlock}>
          <AddMessageForm onSubmit={addNewMessage} />
        </div>
      </div>
    </div>
  );
};

export default Dialogs;

type PropsType = {
  sendMessage: (messageText: string) => void
} & MapStateType