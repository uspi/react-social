import React from "react";
import { PostType } from "../../../../types/types";
import s from "./Post.module.css";

const Post: React.FC<PostType> = React.memo((props) => {
    return (
        <div className={s.item}>
            <div className={s.avatar}>
                <img src="https://www.pngkey.com/png/full/301-3012756_login-avatar-comments-username-icons-png.png" alt="user avatar"/>
            </div>
            <div>
                {props.message}
            </div>
            <div className={s.likesCounter}>
                likes {props.likesCount}
            </div>

        </div>
    );
});

export default Post;