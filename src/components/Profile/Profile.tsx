import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { PropsType } from "./ProfileInfo/ProfileInfo";

type OwnPropsType = {} & PropsType;

const Profile: React.FC<OwnPropsType> = (props) => {
  return (
    <div className={s.content}>
      <ProfileInfo
        saveProfile={props.saveProfile}
        saveUserPhoto={props.saveUserPhoto}
        isOwner={props.isOwner}
        profile={props.profile}
        status={props.status}
        updateUserStatus={props.updateUserStatus}
      />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
