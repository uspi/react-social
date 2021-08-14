import { stopSubmit } from "redux-form";
import { authAPI, securityAPI } from "../api/api";


type SetAuthUserDataPropsType = (
  userId: number | null,
  email: string | null,
  login: string | null,
  isAuth: boolean
) => any;
type SetAuthUserDataReturnType = {
  type: typeof SET_USER_DATA;
  payload: SetAuthUserDataPayloadType;
};
type SetAuthUserDataPayloadType = {
  userId: number | null;
  email: string | null;
  login: string | null;
  isAuth: boolean;
};

type GetCaptchaUrlSuccessReturnType = {
  type: typeof GET_CAPTCHA_URL_SUCCESS;
  captchaUrl: string;
};

type InitialStateType = {
  userId: number | null;
  email: string | null;
  login: string | null;
  isAuth: boolean;
  isFetching: boolean;
  captchaUrl: string | null;
};

type LoginPropsType = (
  email: string,
  password: string,
  rememberMe: boolean,
  captcha: string
) => any;


const SET_USER_DATA = "auth/SET-USER-DATA";
const GET_CAPTCHA_URL_SUCCESS = "auth/GET_CAPTCHA_URL_SUCCESS";

let initialState: InitialStateType = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  isFetching: false,
  captchaUrl: null,
};

export const authReducer = (
  state = initialState,
  action: GetCaptchaUrlSuccessReturnType | SetAuthUserDataReturnType
): InitialStateType => {
  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...state,
        ...action.payload,
      };
    }

    case GET_CAPTCHA_URL_SUCCESS: {
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
export const setAuthUserData: SetAuthUserDataPropsType = (
  userId,
  email,
  login,
  isAuth
): SetAuthUserDataReturnType => ({
  type: SET_USER_DATA,
  payload: {
    userId,
    email,
    login,
    isAuth,
  },
});

export const getCaptchaUrlSuccess = (
  captchaUrl: string
): GetCaptchaUrlSuccessReturnType => ({
  type: GET_CAPTCHA_URL_SUCCESS,
  captchaUrl,
});

// Thunk Creators ------------------// thunk
export const getAuthUserData = () => async (dispatch: any) => {
  let response = await authAPI.me();

  if (response.data.resultCode !== 0) {
    return;
  }

  let { id, login, email } = response.data.data;

  dispatch(setAuthUserData(id, email, login, true));
};

export const login: LoginPropsType =
  (email, password, rememberMe, captcha) => async (dispatch: any) => {
    let response = await authAPI.login(email, password, rememberMe, captcha);

    if (response.data.resultCode !== 0) {
      let serverErrorMessage =
        response.data.messages.length > 0
          ? response.data.messages[0]
          : "Some error";
      // if to many
      if (response.data.resultCode === 10) {
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

export const logout = () => async (dispatch: any) => {
  let response = await authAPI.logout();
  if (response.data.resultCode !== 0) {
    return;
  }

  dispatch(setAuthUserData(null, null, null, false));
};

export const getCaptchaUrl = () => async (dispatch: any) => {
  let response = await securityAPI.getCaptchaUrl();
  const captchaUrl = response.data.url;
  dispatch(getCaptchaUrlSuccess(captchaUrl));
};

// export {
//   InitialStateType,
//   authReducer,
//   getAuthUserData,
//   setAuthUserData,
//   getCaptchaUrlSuccess,
//   login,
//   logout,
//   getCaptchaUrl,
// };

// export default authReducer;
