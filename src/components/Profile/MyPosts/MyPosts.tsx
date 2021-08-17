import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { AddNewPostReduxForm } from "./AddNewPostForm";
import { MapStateType } from "./MyPostsContainer";

// component
const MyPosts: React.FC<PropsType> = React.memo((props) => {
  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextProps !== this.props
  //     || nextState !== this.state;
  // }
  // get
  let postsElements = [...props.posts]
    .reverse()
    .map((post) => (
      <Post
        key={post.id}
        id={post.id}
        message={post.message}
        likesCount={post.likesCount}
      />
    ));

  let onAddPost = (formData: any) => {
    console.log(formData);
    props.addPost(formData.newPostText);
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

type PropsType = {
  addPost: (newPostText: string) => void;
} & MapStateType;
