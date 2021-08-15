import { Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { usersAPI } from "../api/api";
import { UserType } from "../types/types";
import { updateObjectInArray } from "../utils/object-helpers";
import { AppStateType } from "./redux-store";

type FollowSuccessReturnType = {
  type: typeof FOLLOW;
  userId: number;
};
type UnfollowSuccessReturnType = {
  type: typeof UNFOLLOW;
  userId: number;
};
type SetUsersReturnType = {
  type: typeof SET_USERS;
  users: UserType[];
};
type SetCurrentPageReturnType = {
  type: typeof SET_CURRENT_PAGE;
  pageNumber: number;
};
type SetTotalUsersCountReturnType = {
  type: typeof SET_TOTAL_USERS_COUNT;
  totalUsersCount: number;
};
type ToggleIsFetchingReturnType = {
  type: typeof TOGGLE_IS_FETCHING;
  isFetching: boolean;
};
type ToggleFollowingProgressReturnType = {
  type: typeof FOLLOWING_IN_PROGRESS;
  isFetching: boolean;
  userId: number;
};
type FollowUnffollowFlowPropsType = (
  dispatch: DispatchType,
  userId: number,
  apiMethod: (id: number) => any,
  actionCreator: (id: number) => FollowSuccessReturnType | UnfollowSuccessReturnType
) => any;
type InitialStateType = typeof initialState;

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";
const FOLLOWING_IN_PROGRESS = "FOLLOWING-IN-PROGRESS";

let initialState = {
  users: [] as UserType[],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followingInProgress: [] as number[], // array of users id
};

const usersReducer = (
  state = initialState,
  action: ActionTypes
): InitialStateType => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", {
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
      };

    case UNFOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", {
          followed: false,
        }),
      };
    case SET_USERS:
      return {
        ...state,
        users: [...action.users],
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.pageNumber,
      };
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalUsersCount,
      };
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case FOLLOWING_IN_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id !== action.userId),
      };
    default:
      return state;
  }
};

// action creators
type ActionTypes =
  | FollowSuccessReturnType
  | UnfollowSuccessReturnType
  | SetUsersReturnType
  | SetCurrentPageReturnType
  | SetTotalUsersCountReturnType
  | ToggleIsFetchingReturnType
  | ToggleFollowingProgressReturnType;

export const followSuccess = (userId: number): FollowSuccessReturnType => ({
  type: FOLLOW,
  userId,
});
export const unfollowSuccess = (userId: number): UnfollowSuccessReturnType => ({
  type: UNFOLLOW,
  userId,
});
export const setUsers = (users: UserType[]): SetUsersReturnType => ({
  type: SET_USERS,
  users,
});
export const setCurrentPage = (
  pageNumber: number
): SetCurrentPageReturnType => ({
  type: SET_CURRENT_PAGE,
  pageNumber,
});
export const setTotalUsersCount = (
  totalUsersCount: number
): SetTotalUsersCountReturnType => ({
  type: SET_TOTAL_USERS_COUNT,
  totalUsersCount,
});
export const toggleIsFetching = (
  isFetching: boolean
): ToggleIsFetchingReturnType => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});
export const toggleFollowingProgress = (
  isFetching: boolean,
  userId: number
): ToggleFollowingProgressReturnType => ({
  type: FOLLOWING_IN_PROGRESS,
  isFetching,
  userId,
});

// thunks
type GetStateType = () => AppStateType;
type DispatchType = Dispatch<ActionTypes>;
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes>;

export const requestUsers =
  (
    page: number,
    pageSize: number
  ): ThunkType =>
  async (dispatch, getState) => {
    dispatch(toggleIsFetching(true));
    let data = await usersAPI.getUsers(page, pageSize);
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
    dispatch(toggleIsFetching(false));
  };
export const follow = (userId: number): ThunkType => {
  return async (dispatch) => {
    _followUnfolowFlow(
      dispatch,
      userId,
      usersAPI.follow.bind(usersAPI),
      followSuccess
    );
  };
};
export const unfollow = (userId: number): ThunkType => {
  return async (dispatch) => {
    _followUnfolowFlow(
      dispatch,
      userId,
      usersAPI.unfollow.bind(usersAPI),
      unfollowSuccess
    );
  };
};

// helpers
const _followUnfolowFlow: FollowUnffollowFlowPropsType = async (
  dispatch,
  userId,
  apiMethod,
  actionCreator
) => {
  dispatch(toggleFollowingProgress(true, userId));
  let response = await apiMethod(userId);
  if (response.data.resultCode === 0) {
    dispatch(actionCreator(userId));
  }
  dispatch(toggleFollowingProgress(false, userId));
};

export default usersReducer;
