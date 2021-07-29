import { getAuthUserData } from "./auth-reducer";

const INITIALIZATION_SUCCESSFUL = "INITIALIZATION-SUCCESSFUL";

let initialState = {
  initialized: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZATION_SUCCESSFUL: {
      return {
        ...state,
        initialized: true,
      };
    }

    default: {
      return state;
    }
  }
};

// Action Creators
export const initializationSuccessful = () => ({
  type: INITIALIZATION_SUCCESSFUL,
});

// Thunk Creators
export const initializeApp = () => (dispatch) => {
  Promise.all([
    dispatch(getAuthUserData())
  ]).then(() => {
    dispatch(initializationSuccessful());
  });
};

export default appReducer;
