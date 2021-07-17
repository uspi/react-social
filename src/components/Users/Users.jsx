import React from "react";
import style from "./Users.module.css"
import userPhoto from "./../../assets/images/user-no-photo.png"
import { NavLink } from "react-router-dom";
import axios from "axios";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages = [...pages, i];
    }

    // let quantityPageButtons = 24;
    let filteredPages = [];
    for (let i = 0; i < pages.length; i++) {

        if (i > props.currentPage - 5 && i < props.currentPage + 6) {
            filteredPages = [...filteredPages, i + 1]
            continue;
        }
    }
    return (
        <div className={style.usersContainer}>
            <div className={style.paginationButtonsContainer}>
                {
                    filteredPages.map(p => (
                        <div key={p}
                            className={props.currentPage === p ?
                                style.selectedPageNumberBtn
                                : style.pageNumberBtn}
                            onClick={() => { props.onPageNumberChanged(p) }}>
                            {p}
                        </div>


                    ))
                }
            </div>
            {
                props.users.map(u => (
                    <div key={u.id} className={style.item}>
                        <NavLink to={"/profile/" + u.id}>
                            <div className={style.userPhoto}>
                                <img src={u.photos.small != null ?
                                    u.photos.small
                                    : userPhoto} alt="user avatar" />
                            </div>
                        </NavLink>
                        <div className={style.userDescription}>
                            <div>{u.name}</div>
                            <div>{u.status}</div>

                        </div>
                        <div className={style.userLocation}>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </div>
                        <div className={style.buttonContainer}>
                            {u.followed ?
                                <button disabled={props.followingInProgress.some(id => id === u.id)}
                                    className={style.button}
                                    onClick={() => {
                                        props.toggleFollowingProgress(true, u.id);
                                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                            withCredentials: true,
                                            headers: {
                                                "API-KEY": "d208ae23-b630-4cf0-abb9-16089b6de9c2"
                                            }
                                        })
                                            .then(response => {
                                                if (response.data.resultCode === 0) {
                                                    props.unfollow(u.id)
                                                }
                                                props.toggleFollowingProgress(false, u.id);
                                            });



                                    }}>Unfollow</button>
                                : <button disabled={props.followingInProgress.some(id => id === u.id)} className={style.button}
                                    onClick={() => {
                                        props.toggleFollowingProgress(true, u.id);
                                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                            withCredentials: true,
                                            headers: {
                                                "API-KEY": "d208ae23-b630-4cf0-abb9-16089b6de9c2"
                                            }
                                        })
                                            .then(response => {
                                                if (response.data.resultCode === 0) {
                                                    props.follow(u.id)
                                                }
                                                props.toggleFollowingProgress(false, u.id);
                                            });


                                    }}>Follow</button>
                            }
                        </div>
                    </div>
                ))
            }
        </div >
    );
}

export default Users;