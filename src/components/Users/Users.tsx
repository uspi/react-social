import React from "react";
import style from "./Users.module.css";
import userPhoto from "./../../assets/images/user-no-photo.png";
import Paginator from "../common/Paginator/Paginator";
import User from "./User/User";
import { UserType } from "../../types/types";

type PropsType = {
  pageTitle: string,
  isFetching: boolean
  users: UserType[];
  totalUsersCount: number;
  pageSize: number;
  currentPage: number;
  onPageNumberChanged: (pageNumber: number) => void;
  followingInProgress: number[];
  follow: (userId: number) => void;
  unfollow: (userId: number) => void;
};

const Users: React.FC<PropsType> = ({
  pageTitle,
  isFetching,
  users,
  totalUsersCount,
  pageSize,
  currentPage,
  onPageNumberChanged,
  followingInProgress,
  follow,
  unfollow,
}) => {
  return (
    <div className={style.contentGridArea}>
      <h2 className={style.contentGridArea + " " + style.pageTitle}>{pageTitle}</h2>
      <Paginator
        totalItemsCount={totalUsersCount}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageNumberChanged={onPageNumberChanged}
      />
      <div>
        {users.map((u) => (
          <User
            key={u.id}
            user={u}
            followingInProgress={followingInProgress}
            follow={follow}
            unfollow={unfollow}
            defaultUserPhoto={userPhoto}
          />
        ))}
      </div>
    </div>
  );
};

export default Users;
