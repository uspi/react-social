import { FormAction, stopSubmit } from "redux-form";
import { profileAPI } from "../api/profile-api";
import { PhotosType, PostType, ProfileType } from "../types/types";
import { CommonThunkType, InferActionsTypes } from "./redux-store";

// const ADD_POST = "ADD-POST";
// const SET_USER_PROFILE = "SET-USER-PROFILE";
// const SET_USER_STATUS = "SET-USER-STATUS";
// const DELETE_POST = "DELETE-POST";
// const SAVE_PHOTO_SUCCESS = "SAVE-PHOTO-SUCCESS";

let initialState = {
  posts: [
    { id: 1, message: "My first post", likesCount: 0 },
    { id: 2, message: "Second post", likesCount: 2 },
    { id: 3, message: "My third post", likesCount: 5 },
  ] as PostType[],
  profile: null as ProfileType | null,
  status: "",
};

const profileReducer = (
  state = initialState,
  action: ActionsType
): InitialStateType => {
  switch (action.type) {
    case "SN/PROFILE/ADD_POST": {
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
    case "SN/PROFILE/SET_USER_PROFILE": {
      return {
        ...state,
        profile: action.profile,
      };
    }
    case "SN/PROFILE/SET_USER_STATUS": {
      return {
        ...state,
        status: action.status,
      };
    }
    case "SN/PROFILE/DELETE_POST": {
      return {
        ...state,
        posts: state.posts.filter((p) => p.id !== action.postId),
      };
    }

    case "SN/PROFILE/SAVE_PHOTO_SUCCESS": {
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

export const actions = {
  addPost: (newPostText: string) =>
    ({
      type: "SN/PROFILE/ADD_POST",
      newPostText,
    } as const),

  setUserProfile: (profile: ProfileType) =>
    ({
      type: "SN/PROFILE/SET_USER_PROFILE",
      profile,
    } as const),

  setUserStatus: (status: string) =>
    ({
      type: "SN/PROFILE/SET_USER_STATUS",
      status,
    } as const),

  deletePost: (postId: number) =>
    ({
      type: "SN/PROFILE/DELETE_POST",
      postId,
    } as const),

  saveUserPhotoSuccess: (photos: PhotosType) =>
    ({
      type: "SN/PROFILE/SAVE_PHOTO_SUCCESS",
      photos,
    } as const),
};

export const getUserProfile =
  (userId: number): CommonThunkType<ActionsType> =>
  async (dispatch) => {
    let data = await profileAPI.getProfile(userId);
    dispatch(actions.setUserProfile(data));
  };

export const getUserStatus = (userId: number): CommonThunkType<ActionsType> => async (dispatch) => {
  let data = await profileAPI.getStatus(userId);
  if (data) {
    dispatch(actions.setUserStatus(data));
  } else {
    // if status null
    dispatch(actions.setUserStatus(""));
  }
};

export const updateUserStatus = (status: string): CommonThunkType<ActionsType> => async (dispatch) => {
  try {
    let data = await profileAPI.updateStatus(status);
    if (data.resultCode === 0) {
      dispatch(actions.setUserStatus(status));
    }
  } catch (e) {
    throw e;
  }
};

export const saveUserPhoto = (file: File): CommonThunkType<ActionsType> => async (dispatch) => {
  let data = await profileAPI.saveUserPhoto(file);
  if (data.resultCode === 0) {
    dispatch(actions.saveUserPhotoSuccess(data.data.photos));
  }
};

// actionsType for reducer actions,form action for stopSubmit, redux
export const saveProfile =
  (profile: ProfileType): CommonThunkType<ActionsType | FormAction> => async (dispatch, getState) => {
    const userId = getState().auth.userId
    const data = await profileAPI.saveProfile(profile);

    if(!userId) throw new Error("user id can't be null")

    if (data.resultCode === 0) {
      dispatch(getUserProfile(userId));
    } else {
      let serverErrorMessage =
        data.messages.length > 0 ? data.messages[0] : "Some error";

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

// Types
type ActionsType = InferActionsTypes<typeof actions>;
export type InitialStateType = typeof initialState;
