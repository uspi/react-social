import { getAuthUserData } from "./auth-reducer";
import { InferActionsTypes } from "./redux-store";

// const INITIALIZATION_SUCCESSFUL = "SN/APP/INITIALIZATION-SUCCESSFUL";

let initialState = {
  initialized: false,
};
export type InitialStateType = typeof initialState;

const appReducer = (state = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case "SN/APP/INITIALIZATION-SUCCESSFUL": {
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
export const actions = {
  initializationSuccessful: () => ({
    type: "SN/APP/INITIALIZATION-SUCCESSFUL",
  } as const)
}
type ActionsType = InferActionsTypes<typeof actions>

// Thunk Creators
export const initializeApp = () => (dispatch: any) => {
  Promise.all([dispatch(getAuthUserData())]).then(() => {
    dispatch(actions.initializationSuccessful());
  });
};

export default appReducer;
