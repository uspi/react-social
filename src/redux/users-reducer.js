import { usersAPI } from "../api/api";
import { updateObjectInArray } from "../utils/object-helpers";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";
const FOLLOWING_IN_PROGRESS = "FOLLOWING-IN-PROGRESS";

let initialState = {
  users: [],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
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
export const followSuccess = (userId) => ({ type: FOLLOW, userId });
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (pageNumber) => ({
  type: SET_CURRENT_PAGE,
  pageNumber,
});
export const setTotalUsersCount = (totalUsersCount) => ({
  type: SET_TOTAL_USERS_COUNT,
  totalUsersCount,
});
export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});
export const toggleFollowingProgress = (isFetching, userId) => ({
  type: FOLLOWING_IN_PROGRESS,
  isFetching,
  userId,
});

// thunks
export const requestUsers = (page, pageSize) => async (dispatch) => {
  dispatch(toggleIsFetching(true));
  let data = await usersAPI.getUsers(page, pageSize);
  dispatch(setUsers(data.items));
  dispatch(setTotalUsersCount(data.totalCount));
  dispatch(toggleIsFetching(false));
};
export const follow = (userId) => {
  return async (dispatch) => {
    followUnfolowFlow(
      dispatch,
      userId,
      usersAPI.follow.bind(usersAPI),
      followSuccess
    );
  };
};
export const unfollow = (userId) => {
  return async (dispatch) => {
    followUnfolowFlow(
      dispatch,
      userId,
      usersAPI.unfollow.bind(usersAPI),
      unfollowSuccess
    );
  };
};

// helpers
const followUnfolowFlow = async (
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
