import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    let posts = props.state.posts;

    return (
        <div className={s.content}>
            <ProfileInfo />
            <MyPosts posts={posts} />
        </div>
    );
}

export default Profile;