import { stopSubmit } from "redux-form";
import { profileAPI, usersAPI } from "../api/api";
import { PhotosType, PostType, ProfileType } from "../types/types";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_USER_STATUS = "SET-USER-STATUS";
const DELETE_POST = "DELETE-POST";
const SAVE_PHOTO_SUCCESS = "SAVE-PHOTO-SUCCESS";



let initialState = {
  posts: [
    { id: 1, message: "My first post", likesCount: 0 },
    { id: 2, message: "Second post", likesCount: 2 },
    { id: 3, message: "My third post", likesCount: 5 },
  ] as PostType[],
  profile: null as ProfileType | null,
  status: "",
};

export type InitialStateType = typeof initialState;

const profileReducer = (
  state = initialState,
  action: any
): InitialStateType => {
  switch (action.type) {
    case ADD_POST: {
      return {
        ...state,
        posts: [
          ...state.posts,
          {
            id: 5,
            message: action.newPostText,
            likesCount: 0,
          },
        ],
      };
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      };
    }
    case SET_USER_STATUS: {
      return {
        ...state,
        status: action.status,
      };
    }
    case DELETE_POST: {
      return {
        ...state,
        posts: state.posts.filter((p) => p.id !== action.postId),
      };
    }

    case SAVE_PHOTO_SUCCESS: {
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos } as ProfileType,
      };
    }
    default: {
      return state;
    }
  }
};

export default profileReducer;

// action creators
type AddPostCreatorReturnType = {
  type: typeof ADD_POST;
  newPostText: string;
};
export const addPostCreator = (
  newPostText: string
): AddPostCreatorReturnType => ({
  type: ADD_POST,
  newPostText,
});

type SetUserProfileReturnType = {
  type: typeof SET_USER_PROFILE;
  profile: ProfileType;
};
export const setUserProfile = (
  profile: ProfileType
): SetUserProfileReturnType => ({
  type: SET_USER_PROFILE,
  profile,
});

type SetUserStatusReturnType = {
  type: typeof SET_USER_STATUS;
  status: string;
};
export const setUserStatus = (status: string): SetUserStatusReturnType => ({
  type: SET_USER_STATUS,
  status,
});

type DeletePostReturnType = {
  type: typeof DELETE_POST;
  postId: number;
};
export const deletePost = (postId: number): DeletePostReturnType => ({
  type: DELETE_POST,
  postId,
});

type SaveUserPhotoSuccessReturnType = {
  type: typeof SAVE_PHOTO_SUCCESS;
  photos: PhotosType;
};
export const saveUserPhotoSuccess = (
  photos: PhotosType
): SaveUserPhotoSuccessReturnType => ({
  type: SAVE_PHOTO_SUCCESS,
  photos,
});

// thunks
export const getUserProfile = (userId: number) => async (dispatch: any) => {
  let response = await usersAPI.getProfile(userId);
  dispatch(setUserProfile(response.data));
};

export const getUserStatus = (userId: number) => async (dispatch: any) => {
  let response = await profileAPI.getStatus(userId);
  if (response.data) {
    dispatch(setUserStatus(response.data));
  } else {
    // if status null
    dispatch(setUserStatus(""));
  }
};

export const updateUserStatus = (status: string) => async (dispatch: any) => {
  try {
    let response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
      dispatch(setUserStatus(status));
    }
  } catch (e) {
    throw e;
  }
};

export const saveUserPhoto = (file: any) => async (dispatch: any) => {
  let response = await profileAPI.saveUserPhoto(file);
  if (response.data.resultCode === 0) {
    dispatch(saveUserPhotoSuccess(response.data.data.photos));
  }
};

export const saveProfile = (profile: ProfileType) => async (dispatch: any, getState: any) => {
  let response = await profileAPI.saveProfile(profile);
  if (response.data.resultCode === 0) {
    dispatch(getUserProfile(getState().auth.userId));
  } else {
    let serverErrorMessage =
      response.data.messages.length > 0
        ? response.data.messages[0]
        : "Some error";

    dispatch(
      stopSubmit("edit-profile-description", {
        _error: serverErrorMessage,
      })
    );

    return Promise.reject(serverErrorMessage);

    // for one item
    // dispatch(
    //   stopSubmit("edit-profile-description", {
    //     "contacts": {"facebook": serverErrorMessage},
    //   })
    // );
  }
};
