import React from "react";
import { connect } from "react-redux"
import {
    follow,
    setCurrentPage,
    unfollow,
    toggleFollowingProgress,
    getUsers
} from "../../redux/users-reducer"
import Users from "./Users"
import Preloader from "../common/Preloader/Preloader";
import { compose } from "redux";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageNumberChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
        this.props.setCurrentPage(pageNumber)
    }

    render() {
        return (
            <>
                {this.props.isFetching ?
                    <Preloader />
                    : <Users
                        totalUsersCount={this.props.totalUsersCount}
                        pageSize={this.props.pageSize}
                        currentPage={this.props.currentPage}
                        onPageNumberChanged={this.onPageNumberChanged}
                        users={this.props.users}
                        follow={this.props.follow}
                        unfollow={this.props.unfollow}

                        followingInProgress={this.props.followingInProgress}
                    />
                }

            </>
        )
    }
};

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
};

export default compose( 
    connect(mapStateToProps, {
        follow,
        unfollow,
        setCurrentPage,
        toggleFollowingProgress,
        getUsers
    })
)(UsersContainer);