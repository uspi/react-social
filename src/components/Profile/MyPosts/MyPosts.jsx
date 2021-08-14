import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../../utils/validators/validators";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { Textarea } from "./../../common/FormsControls/FormsControls"

const maxLength = maxLengthCreator(10);

// form
const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={s.textAreaContainer}>
        <Field component={Textarea} name="newPostText" placeholder="Enter post text!"
          validate={[required, maxLength]} />
      </div>

      <div className={s.addButtons}>
        <button className={s.addPostButton}>Add post</button>
      </div>
    </form>
  );
}

// form wrapper
const AddNewPostReduxForm = reduxForm({
  form: "newPost"
})(AddNewPostForm)

// component
const MyPosts = React.memo(props => {

  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextProps !== this.props
  //     || nextState !== this.state;
  // }
  // get
  let postsElements = [...props.posts]
    .reverse()
    .map((post) => (
      <Post key={post.id} id={post.id} message={post.message} likesCount={post.likesCount} />
    ));

  let onAddPost = (formData) => {
    console.log(formData);
    props.addPostCreator(formData.newPostText);
  };


  return (
    <div>
      <div className={s.textAreaLabelBlock}>
        <h3 className={s.posts_block__label}>My posts</h3>

        <div className={s.post_new_block}>
          <AddNewPostReduxForm onSubmit={onAddPost} />
        </div>
      </div>

      <div className={s.posts}>{postsElements}</div>
    </div>
  );
});

export default MyPosts;
