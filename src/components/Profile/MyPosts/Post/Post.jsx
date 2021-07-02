import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://www.pngkey.com/png/full/301-3012756_login-avatar-comments-username-icons-png.png"/>
            {props.message}
            <span>like</span> {props.likesCount}
        </div>
    );
}

export default Post;