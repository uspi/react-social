import React from "react";
import styles from "./AddMessageForm.module.css";
import { maxLengthCreator, required } from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormsControls/FormsControls";
import { Field, reduxForm } from "redux-form";

const maxLength = maxLengthCreator(50);

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={styles.textAreaContainer}>
        <Field component={Textarea} validate={[required, maxLength]} name="newMessageText"
          placeholder="Enter some text" />
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  );
}

export default reduxForm({
  form: "dialog-add-message-form"
})(AddMessageForm)