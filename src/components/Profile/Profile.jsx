import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  let posts = props.profilePage.posts;
  let newPostText = props.profilePage.newPostText;
  // func
  let addPost = props.addPost;
  let updateNewPostText = props.updateNewPostText;

  return (
    <div className={s.content}>
      <ProfileInfo />
      <MyPosts
        posts={posts}
        newPostText={newPostText}
        addPost={addPost}
        updateNewPostText={updateNewPostText}
      />
    </div>
  );
};

export default Profile;
