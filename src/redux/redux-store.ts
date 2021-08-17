import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import {
  Action,
  applyMiddleware,
  combineReducers,
  compose,
  createStore,
} from "redux";
import usersReducer from "./users-reducer";
import { authReducer } from "./auth-reducer";
import thunkMiddleware, { ThunkAction } from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import appReducer from "./app-reducer";

let rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer,
  sidebar: sidebarReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer,
});

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;

/**
 * @param T an object in which values are functions.
 * Example: let actions = {
 * actionOne: (arg1) => { type: "actionType", userId: arg1},
 * actionTwo: () => { type: "actionTypeTwo"}, ...
 * }
 * @returns enumeration of return types of functions. Example: {type: string, userId: number} | {type: string} | ...
 */
export type InferActionsTypes<T> = T extends { [key: string]: (...args: any[]) => infer U } ? U : never;

/**
 * @param A action
 * @param R returned type. "Promise void" by default.
 */
export type CommonThunkType<A extends Action = Action, R = Promise<void>> = ThunkAction<
  Promise<void>,
  AppStateType,
  unknown,
  A
>;

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);
//let store = createStore(reducers, applyMiddleware(thunkMiddleware));

// @ts-ignore
window.__store__ = store;

export default store;
