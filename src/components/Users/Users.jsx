import React from "react";
import style from "./Users.module.css"
import * as axios from "axios";
import userPhoto from "./../../assets/images/user-no-photo.png"

class Users extends React.Component {

    componentDidMount() {
        this.getUsers(this.props.currentPage, this.props.pageSize);
    }

    getUsers = (pageNumber, pageSize) => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setUsersTotalCount(response.data.totalCount);
            });
    }

    onPageNumberChanged = (n) => {
        this.props.setCurrentPage(n)
        this.getUsers(n, this.props.pageSize);
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages = [...pages, i];
        }

        return (
            <div className={style.usersContainer}>
                <div>
                    {
                        pages.map(p => (
                            <span
                                className={this.props.currentPage === p ?
                                    style.selectedPageNumberBtn
                                    : style.pageNumberBtn}
                                onClick={() => { this.onPageNumberChanged(p)}}
                            >
                                {p}
                            </span>
                        ))
                    }
                    {/* <span>1</span>
                    <span className={style.selectedPage}>2</span>
                    <span>3</span>
                    <span>4</span>
                    <span>5</span> */}
                </div>
                {
                    this.props.users.map(u => (
                        <div key={u.id} className={style.item}>
                            <div className={style.userPhoto}>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="user avatar" />
                            </div>
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
                                    <button className={style.button}
                                        onClick={() => { this.props.unfollow(u.id) }}>Unfollow</button>
                                    : <button className={style.button}
                                        onClick={() => { this.props.follow(u.id) }}>Follow</button>
                                }
                            </div>
                        </div>
                    ))
                }
            </div >
        )
    }
}

export default Users;