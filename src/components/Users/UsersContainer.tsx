import React from 'react'
import { connect } from 'react-redux'
import {
  follow,
  unfollow,
  requestUsers,
  FilterType,
} from '../../redux/users-reducer'
import { actions } from '../../redux/users-reducer'
import Users from './Users'
import { compose } from 'redux'
import {
  getCurrentPage,
  getFollowingInProgress,
  getIsFetching,
  getPageSize,
  getTotalUsersCount,
  getUsers,
} from '../../redux/users-selectors'
import { UserType } from '../../types/types'
import { AppStateType } from '../../redux/redux-store'

class UsersContainer extends React.Component<PropsType> {
  componentDidMount() {
    const { currentPage, pageSize, filter } = this.props
    this.props.requestUsers(currentPage, pageSize, filter)
  }

  onPageNumberChanged = (pageNumber: number) => {
    const { pageSize, filter } = this.props
    this.props.requestUsers(pageNumber, pageSize, filter)
    this.props.setCurrentPage(pageNumber)
  }

  onFilterChanged = (filter: FilterType) => {
    const { pageSize } = this.props
    // TODO: move filter logic to separate reducer
    this.props.setCurrentPage(1)
    this.props.requestUsers(1, pageSize, filter)
  }

  render() {
    return (
      <>
        <Users
          pageTitle="Users"
          isFetching={this.props.isFetching}
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageNumberChanged={this.onPageNumberChanged}
          onFilterChanged={this.onFilterChanged}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          followingInProgress={this.props.followingInProgress}
          filter={this.props.filter}
        />
      </>
    )
  }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
    filter: state.usersPage.filter,
  }
}

const setCurrentPage = actions.setCurrentPage
export default compose(
  connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(
    mapStateToProps,
    {
      follow,
      unfollow,
      setCurrentPage,
      requestUsers,
    }
  )
)(UsersContainer)

// Types
export type MapStatePropsType = {
  currentPage: number
  pageSize: number
  isFetching: boolean
  totalUsersCount: number
  users: UserType[]
  followingInProgress: number[]
  filter: FilterType
}
type MapDispatchPropsType = {
  follow: (userId: number) => void
  unfollow: (userId: number) => void
  requestUsers: (
    currentPage: number,
    pageSize: number,
    filter: FilterType
  ) => void
  setCurrentPage: (pageNumber: number) => any
}
type OwnPropsType = {
  pageTitle: string
}

type PropsType = OwnPropsType & MapStatePropsType & MapDispatchPropsType
