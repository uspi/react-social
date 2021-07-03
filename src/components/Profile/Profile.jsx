import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  let posts = props.state.posts;
  let newPostText = props.state.newPostText;

  let dispatch = props.dispatch;

  return (
    <div className={s.content}>
      <ProfileInfo />
      <MyPosts
        dispatch={dispatch}
        posts={posts}
        newPostText={newPostText}
      />
    </div>
  );
};

export default Profile;
