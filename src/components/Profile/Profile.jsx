import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    let posts = props.state.posts;

    let addPost = props.addPost;

    return (
        <div className={s.content}>
            <ProfileInfo />
            <MyPosts posts={posts} addPost={addPost}/>
        </div>
    );
}

export default Profile;