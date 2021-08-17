import React from "react";
import { NavLink } from "react-router-dom";
import { UserType } from "../../../types/types";
import style from "./User.module.css";

type PropsType = {
  user: UserType;
  followingInProgress: number[];
  follow: (userId: number) => void;
  unfollow: (userId: number) => void;
  defaultUserPhoto: string;
};

const User: React.FC<PropsType> = ({
  user,
  followingInProgress,
  follow,
  unfollow,
  defaultUserPhoto,
}) => {
  return (
    <div key={user.id} className={style.item}>
      <NavLink to={"/profile/" + user.id}>
        <div className={style.userPhoto}>
          <img
            src={
              user.photos.small != null ? user.photos.small : defaultUserPhoto
            }
            alt="user avatar"
          />
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
        {user.followed ? (
          <button
            disabled={followingInProgress.some((id) => id === user.id)}
            className={style.button}
            onClick={() => {
              unfollow(user.id);
            }}
          >
            Unfollow
          </button>
        ) : (
          <button
            disabled={followingInProgress.some((id) => id === user.id)}
            className={style.button}
            onClick={() => {
              follow(user.id);
            }}
          >
            Follow
          </button>
        )}
      </div>
    </div>
  );
};

export default User;
