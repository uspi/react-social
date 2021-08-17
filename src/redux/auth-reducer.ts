import { FormAction, stopSubmit } from "redux-form";
import { ResultCodeEnum, ResultCodeForCaptchaEnum } from "../api/api";
import { authAPI } from "../api/auth-api";
import { securityAPI } from "../api/security-api";
import { InferActionsTypes, CommonThunkType } from "./redux-store";

// const SET_USER_DATA = "auth/SET-USER-DATA";
// const GET_CAPTCHA_URL_SUCCESS = "auth/GET_CAPTCHA_URL_SUCCESS";

let initialState = {
  userId: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isAuth: false,
  isFetching: false,
  captchaUrl: null as string | null,
};

export const authReducer = (
  state = initialState,
  action: ActionsTypes
): InitialStateType => {
  switch (action.type) {
    case "SN/AUTH/SET_USER_DATA": {
      return {
        ...state,
        ...action.payload,
      };
    }

    case "SN/AUTH/GET_CAPTCHA_URL_SUCCESS": {
      return {
        ...state,
        captchaUrl: action.captchaUrl,
      };
    }

    default: {
      return state;
    }
  }
};

// Action Creators
export const actions = {
  setAuthUserData: (
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
  ) =>
    ({
      type: "SN/AUTH/SET_USER_DATA",
      payload: {
        userId,
        email,
        login,
        isAuth,
      },
    } as const),

  getCaptchaUrlSuccess: (captchaUrl: string) =>
    ({
      type: "SN/AUTH/GET_CAPTCHA_URL_SUCCESS",
      captchaUrl,
    } as const),
};

// Thunk Creators ------------------// thunk
export const getAuthUserData = (): CommonThunkType<ActionsTypes> => async (dispatch) => {
  let data = await authAPI.me();

  if (data.resultCode !== ResultCodeEnum.Success) {
    return;
  }

  let { id, login, email } = data.data;

  dispatch(actions.setAuthUserData(id, email, login, true));
};

export const login: LoginType =
  (email, password, rememberMe, captcha): CommonThunkType<ActionsTypes | FormAction> => async (dispatch) => {
    let loginData = await authAPI.login(email, password, rememberMe, captcha);

    if (loginData.resultCode !== ResultCodeEnum.Success) {
      let serverErrorMessage =
        loginData.messages.length > 0 ? loginData.messages[0] : "Some error";
      // if to many
      if (loginData.resultCode === ResultCodeForCaptchaEnum.CaptchaIsRequired) {
        // get captcha
        dispatch(getCaptchaUrl());
      }

      dispatch(
        stopSubmit("user-login", {
          _error: serverErrorMessage,
        })
      );
      return;
    }

    // login success, get user data
    dispatch(getAuthUserData());
  };

export const logout = (): CommonThunkType<ActionsTypes> => async (dispatch) => {
  let response = await authAPI.logout();
  if (response.data.resultCode !== 0) {
    return;
  }

  dispatch(actions.setAuthUserData(null, null, null, false));
};

export const getCaptchaUrl = (): CommonThunkType<ActionsTypes> => async (dispatch) => {
  let data = await securityAPI.getCaptchaUrl();
  const captchaUrl = data.url;
  dispatch(actions.getCaptchaUrlSuccess(captchaUrl));
};

// Types
type InitialStateType = typeof initialState;
type ActionsTypes = InferActionsTypes<typeof actions>;
export type LoginType = (
  email: string,
  password: string,
  rememberMe: boolean,
  captcha: string
) => any;