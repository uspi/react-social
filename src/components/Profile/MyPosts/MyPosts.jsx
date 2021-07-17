import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";


const MyPosts = (props) => {
  // get
  let postsElements = props.posts.map((post) => (
    <Post key={post.id} id={post.id} message={post.message} likesCount={post.likesCount} />
  ));
  
  let onAddPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  let newPostElement = React.createRef();

  let newPostPlaceholder = "Enter any text!"

  return (
    <div>
      <div className={s.textAreaLabelBlock}>
        <h3 className={s.posts_block__label}>My posts</h3>

        <div className={s.post_new_block}>
          <div className={s.textAreaContainer}>
            <textarea
              onChange={onPostChange}
              ref={newPostElement}
              value={props.newPostText}

              autoComplete="off"
              placeholder={newPostPlaceholder}
            />
          </div>

          <div className={s.addButtons}>
            <button className={s.addPostButton} onClick={onAddPost}>Add post</button>
          </div>
        </div>
      </div>

      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
