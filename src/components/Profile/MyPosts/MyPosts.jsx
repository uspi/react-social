import React from "react";
import { addPostCreator, updateNewPostTextCreator } from "../../../redux/profile-reducer";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";


const MyPosts = (props) => {
  // get
  let postsElements = props.posts.map((post) => (
    <Post message={post.message} likesCount={post.likesCount} />
  ));
  let newPostText = props.newPostText;

  
  let addPost = () => {
    props.dispatch(addPostCreator());
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(updateNewPostTextCreator(text));
  };

  let newPostElement = React.createRef();

  return (
    <div>
      <div className={s.textAreaLabelBlock}>
        <h3 className={s.posts_block__label}>My posts</h3>

        <div className={s.post_new_block}>
          <div className={s.textAreaContainer}>
            <textarea
              onChange={onPostChange}
              ref={newPostElement}
              value={newPostText}
            />
          </div>

          <div>
            <button onClick={addPost}>Add post</button>
          </div>
        </div>
      </div>

      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
