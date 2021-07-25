import React from "react";
import s from "./Dialogs.module.css";

import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Field, reduxForm } from "redux-form";

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={s.textAreaContainer}>
        <Field component={"textarea"} name="newMessageText" placeholder="Enter some text" />
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  );
}

const AddMessageReduxForm = reduxForm({
  form: "dialogAddmessage"
})(AddMessageForm)

const Dialogs = (props) => {
  let dialogsElements = props.dialogs.map((dialog) => (
    <DialogItem key={dialog.id} id={dialog.id} name={dialog.name} />
  ));
  let messagesElements = props.messages.map((message) => (
    <Message key={message.id} id={message.id} text={message.text} />
  ));

  let addNewMessage = (formData) => {
    console.log(formData)
    props.sendMessage(formData.newMessageText);
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsArea}>
        <div className={s.dialogsItems}>{dialogsElements}</div>
      </div>

      <div className={s.messagesArea}>
        <div className={s.messagesItems}>{messagesElements}</div>

        <div className={s.newMessageBlock}>
          <AddMessageReduxForm onSubmit={addNewMessage} />
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
