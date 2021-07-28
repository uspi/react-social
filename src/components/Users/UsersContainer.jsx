import React from "react";
import { connect } from "react-redux"
import {
    follow,
    setCurrentPage,
    unfollow,
    toggleFollowingProgress,
    requestUsers
} from "../../redux/users-reducer"
import Users from "./Users"
import Preloader from "../common/Preloader/Preloader";
import { compose } from "redux";
import { 
    getCurrentPage, 
    getFollowingInProgress, 
    getIsFetching, 
    getPageSize, 
    getTotalUsersCount,
    getUsers,
 } from "../../redux/users-selectors";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageNumberChanged = (pageNumber) => {
        this.props.requestUsers(pageNumber, this.props.pageSize);
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
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
};

export default compose(
    connect(mapStateToProps, {
        follow,
        unfollow,
        setCurrentPage,
        toggleFollowingProgress,
        requestUsers
    })
)(UsersContainer);