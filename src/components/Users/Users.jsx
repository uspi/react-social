import React from "react";
import style from "./Users.module.css"
import userPhoto from "./../../assets/images/user-no-photo.png"
import Paginator from "../common/Paginator/Paginator";
import User from "./User/User";

let Users = (props) => {
    return (
        <div className={style.usersContainer}>
            <Paginator
                totalItemsCount={props.totalUsersCount}
                pageSize={props.pageSize}
                currentPage={props.currentPage}
                onPageNumberChanged={props.onPageNumberChanged}
            />
            <div>
                {
                    props.users.map(u => (
                        <User
                            key={u.id}
                            user={u}
                            followingInProgress={props.followingInProgress}
                            follow={props.follow}
                            unfollow={props.unfollow}
                            userPhoto={userPhoto}
                        />
                    ))
                }
            </div>
        </div >
    );
}

export default Users;