import React from 'react';
import { NavLink } from 'react-router-dom';
import style from "./User.module.css"

const User = ({
    user,
    followingInProgress,
    follow,
    unfollow,
    userPhoto
}) => {
    return (
        <div key={user.id} className={style.item}>
            <NavLink to={"/profile/" + user.id}>
                <div className={style.userPhoto}>
                    <img src={user.photos.small != null ?
                        user.photos.small
                        : userPhoto} alt="user avatar" />
                </div>
            </NavLink>
            <div className={style.userDescription}>
                <div>{user.name}</div>
                <div>{user.status}</div>

            </div>
            <div className={style.userLocation}>
                <div>{"u.location.country"}</div>
                <div>{"u.location.city"}</div>
            </div>
            <div className={style.buttonContainer}>
                {user.followed ?
                    <button disabled={followingInProgress.some(id => id === user.id)}
                        className={style.button}
                        onClick={() => { unfollow(user.id); }}
                    >Unfollow</button>
                    : <button disabled={followingInProgress.some(id => id === user.id)} className={style.button}
                        onClick={() => { follow(user.id); }}
                    >Follow</button>
                }
            </div>
        </div>
    );
}

export default User;