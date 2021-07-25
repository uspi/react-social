import React from "react";
import { Field, reduxForm } from "redux-form";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

// form
const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={s.textAreaContainer}>
        <Field component={"textarea"} name="newPostText" placeholder="Enter post text!" />
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
const MyPosts = (props) => {
  // get
  let postsElements = props.posts.map((post) => (
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
};

export default MyPosts;
