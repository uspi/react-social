import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

    // let posts = [
    //     { id: 1, message: "My first post", likesCount: 0},
    //     { id: 2, message: "Second post", likesCount: 2},
    //     { id: 3, message: "My third post", likesCount: 5},
    // ]

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