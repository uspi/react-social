import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  // get
  let postsElements = props.posts.map((post) => (
    <Post message={post.message} likesCount={post.likesCount} />
  ));
  let newPostText = props.newPostText;
  // func
  let updateNewPostText = props.updateNewPostText;

  let newPostElement = React.createRef();
  let addPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    updateNewPostText(text);
  };

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
