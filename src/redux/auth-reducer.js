import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api";

const SET_USER_DATA = "auth/SET-USER-DATA";

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  isFetching: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...state,
        ...action.payload,
      };
    }

    default: {
      return state;
    }
  }
};

// Action Creators
export const setAuthUserData = (userId, email, login, isAuth = false) => {
  return {
    type: SET_USER_DATA,
    payload: {
      userId,
      email,
      login,
      isAuth,
    },
  };
};

// Thunk Creators ------------------// thunk
export const getAuthUserData = () => async (dispatch) => {
  let response = await authAPI.me();

  if (response.data.resultCode !== 0) {
    return;
  }

  let { id, login, email } = response.data.data;

  dispatch(setAuthUserData(id, email, login, true));
};

export const login = (email, password, rememberMe) => async (dispatch) => {
  let response = await authAPI.login(email, password, rememberMe);
  if (response.data.resultCode !== 0) {
    let serverErrorMessage =
      response.data.messages.length > 0
        ? response.data.messages[0]
        : "Some error";

    dispatch(
      stopSubmit("user-login", {
        _error: serverErrorMessage,
      })
    );
    return;
  }

  dispatch(getAuthUserData());
};

export const logout = () => async (dispatch) => {
  let response = await authAPI.logout();
  if (response.data.resultCode !== 0) {
    return;
  }

  dispatch(setAuthUserData(null, null, null, false));
};

export default authReducer;
