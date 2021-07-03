import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElements = props.posts.map(post =>
        <Post message={post.message} likesCount={post.likesCount} />
    );

    let posts = props.posts;

    let postsElements = props.posts.map(post => 
        <Post message={post.message} likesCount={post.likesCount} />    
    );

    return (
        <div>
            <h3 className={s.posts_block__label}>
                My posts
            </h3>
            <div className={s.post_new_block}>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>

            </div>

            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;