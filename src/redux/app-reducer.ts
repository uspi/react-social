import { getAuthUserData } from "./auth-reducer";

type InitializationSuccessfulType = {
  type: typeof INITIALIZATION_SUCCESSFUL;
};
export type InitialStateType = {
  initialized: boolean;
  globalError: any;
};

const INITIALIZATION_SUCCESSFUL = "app/INITIALIZATION-SUCCESSFUL";

let initialState: InitialStateType = {
  initialized: false,
  globalError: null,
};

const appReducer = (state = initialState, action: any): InitialStateType => {
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
export const initializationSuccessful = (): InitializationSuccessfulType => ({
  type: INITIALIZATION_SUCCESSFUL,
});

// Thunk Creators
export const initializeApp = () => (dispatch: any) => {
  Promise.all([dispatch(getAuthUserData())]).then(() => {
    dispatch(initializationSuccessful());
  });
};

export default appReducer;
