import { Dispatch } from 'redux'
import { ResponseType, ResultCodeEnum } from '../api/api'
import { usersAPI } from '../api/users-api'
import { UserType } from '../types/types'
import { updateObjectInArray } from '../utils/object-helpers'
import { InferActionsTypes, CommonThunkType } from './redux-store'

let initialState = {
  users: [] as UserType[],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followingInProgress: [] as number[], // array of users id
  filter: {
    term: '',
    friend: null as null | boolean,
  },
}

const usersReducer = (
  state = initialState,
  action: ActionsTypes
): InitialStateType => {
  switch (action.type) {
    case 'SN/USERS/FOLLOW':
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, 'id', {
          followed: true,
        }),
        // users: state.users.map((u) => {
        //   if (u.id === action.userId) {
        //     return {
        //       ...u,
        //       followed: true,
        //     };
        //   }
        //   return u;
        // }),
      }

    case 'SN/USERS/UNFOLLOW':
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, 'id', {
          followed: false,
        }),
      }
    case 'SN/USERS/SET_USERS':
      return {
        ...state,
        users: [...action.users],
      }
    case 'SN/USERS/SET_CURRENT_PAGE':
      return {
        ...state,
        currentPage: action.pageNumber,
      }
    case 'SN/USERS/SET_TOTAL_USERS_COUNT':
      return {
        ...state,
        totalUsersCount: action.totalUsersCount,
      }
    case 'SN/USERS/TOGGLE_IS_FETCHING':
      return {
        ...state,
        isFetching: action.isFetching,
      }
    case 'SN/USERS/FOLLOWING_IN_PROGRESS':
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id !== action.userId),
      }
    case 'SN/USERS/SET-FILTER':
      return {
        ...state,
        filter: action.payload.filter,
      }
    default:
      return state
  }
}

// action creators
export const actions = {
  followSuccess: (userId: number) =>
    ({
      type: 'SN/USERS/FOLLOW',
      userId,
    } as const),
  unfollowSuccess: (userId: number) =>
    ({
      type: 'SN/USERS/UNFOLLOW',
      userId,
    } as const),
  setUsers: (users: UserType[]) =>
    ({
      type: 'SN/USERS/SET_USERS',
      users,
    } as const),
  setCurrentPage: (pageNumber: number) =>
    ({
      type: 'SN/USERS/SET_CURRENT_PAGE',
      pageNumber,
    } as const),
  setTotalUsersCount: (totalUsersCount: number) =>
    ({
      type: 'SN/USERS/SET_TOTAL_USERS_COUNT',
      totalUsersCount,
    } as const),
  setFilter: (filter: FilterType) =>
    ({
      type: 'SN/USERS/SET-FILTER',
      payload: { filter },
    } as const),
  toggleIsFetching: (isFetching: boolean) =>
    ({
      type: 'SN/USERS/TOGGLE_IS_FETCHING',
      isFetching,
    } as const),
  toggleFollowingProgress: (isFetching: boolean, userId: number) =>
    ({
      type: 'SN/USERS/FOLLOWING_IN_PROGRESS',
      isFetching,
      userId,
    } as const),
}

// thunks
export const requestUsers =
  (
    page: number,
    pageSize: number,
    filter: FilterType
  ): CommonThunkType<ActionsTypes> =>
  async (dispatch, getState) => {
    dispatch(actions.toggleIsFetching(true))
    dispatch(actions.setFilter(filter))
    let data = await usersAPI.getUsers(page, pageSize, filter.term, filter.friend)

    dispatch(actions.setUsers(data.items))
    dispatch(actions.setTotalUsersCount(data.totalCount))
    dispatch(actions.toggleIsFetching(false))
  }
export const follow = (userId: number): CommonThunkType<ActionsTypes> => {
  return async (dispatch) => {
    await _followUnfolowFlow(
      dispatch,
      userId,
      usersAPI.follow.bind(usersAPI),
      actions.followSuccess
    )
  }
}
export const unfollow = (userId: number): CommonThunkType<ActionsTypes> => {
  return async (dispatch) => {
    await _followUnfolowFlow(
      dispatch,
      userId,
      usersAPI.unfollow.bind(usersAPI),
      actions.unfollowSuccess
    )
  }
}

// helpers
const _followUnfolowFlow = async (
  dispatch: Dispatch<ActionsTypes>,
  userId: number,
  apiMethod: (id: number) => Promise<ResponseType>,
  actionCreator: (id: number) => ActionsTypes
) => {
  dispatch(actions.toggleFollowingProgress(true, userId))
  let data = await apiMethod(userId)

  if (data.resultCode === ResultCodeEnum.Success) {
    dispatch(actionCreator(userId))
  }
  dispatch(actions.toggleFollowingProgress(false, userId))
}

export default usersReducer

// Types
type ActionsTypes = InferActionsTypes<typeof actions>
export type InitialStateType = typeof initialState
export type FilterType = typeof initialState.filter
