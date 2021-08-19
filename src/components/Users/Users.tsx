import React from 'react'
import style from './Users.module.css'
import userPhoto from './../../assets/images/user-no-photo.png'
import Paginator from '../common/Paginator/Paginator'
import User from './User/User'
import { UserType } from '../../types/types'
import Preloader from '../common/Preloader/Preloader'
import { UsersSearchForm } from './UsersSearchForm'
import { FilterType } from '../../redux/users-reducer'

type PropsType = {
  pageTitle: string
  isFetching: boolean
  users: UserType[]
  totalUsersCount: number
  pageSize: number
  currentPage: number
  filter: FilterType
  followingInProgress: number[]

  onPageNumberChanged: (pageNumber: number) => void
  onFilterChanged: (filter: FilterType) => void
  follow: (userId: number) => void
  unfollow: (userId: number) => void
}

const Users: React.FC<PropsType> = React.memo(
  ({
    pageTitle,
    isFetching,
    users,
    totalUsersCount,
    pageSize,
    currentPage,
    followingInProgress,
    filter,
    onPageNumberChanged,
    onFilterChanged,
    follow,
    unfollow,
  }) => {
    let isNotFoundResult = (): boolean => {
      let filterTermDefaultValue = ''
      if (filter.term === filterTermDefaultValue) return false
      if (users.length < 1) return true

      // default
      return false
    }

    return (
      <div className={style.contentGridArea}>
        <h2 className={style.contentGridArea + ' ' + style.pageTitle}>
          {pageTitle}
        </h2>
        <UsersSearchForm onFilterChanged={onFilterChanged} />
        {!isNotFoundResult() && (
          <Paginator
            totalItemsCount={totalUsersCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageNumberChanged={onPageNumberChanged}
          />
        )}
        <div>
          {isFetching ? <Preloader /> : null}
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
          {isNotFoundResult() ? 'No matching users found' : null}
        </div>
      </div>
    )
  }
)

export default Users
