import React from "react";
import { Field, reduxForm } from "redux-form";
import {
  maxLengthCreator,
  required,
} from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormsControls/FormsControls";
import s from "./MyPosts.module.css";

const maxLength = maxLengthCreator(10);

// form
const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={s.textAreaContainer}>
        <Field
          component={Textarea}
          name="newPostText"
          placeholder="Enter post text!"
          validate={[required, maxLength]}
        />
      </div>

      <div className={s.addButtons}>
        <button className={s.addPostButton}>Add post</button>
      </div>
    </form>
  );
};

// form wrapper
export const AddNewPostReduxForm = reduxForm({
  form: "newPost",
})(AddNewPostForm);
