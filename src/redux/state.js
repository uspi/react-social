import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "My first post", likesCount: 0 },
        { id: 2, message: "Second post", likesCount: 2 },
        { id: 3, message: "My third post", likesCount: 5 },
      ],
      newPostText: "",
    },
    dialogsPage: {
      messages: [
        { id: 1, text: "Hey" },
        { id: 2, text: "Hello" },
        { id: 3, text: "Yo yo" },
      ],
      dialogs: [
        { id: 1, name: "Vano" },
        { id: 2, name: "Maksim" },
        { id: 3, name: "Olga" },
        { id: 4, name: "Andry" },
        { id: 5, name: "Dane" },
        { id: 6, name: "Kate" },
      ],
      newMessageText: "",
    },
    sidebar: {
      friends: [
        { id: 1, name: "Vano" },
        { id: 2, name: "Maksim" },
        { id: 3, name: "Olga" },
        { id: 4, name: "Andry" },
        { id: 5, name: "Dane" },
        { id: 6, name: "Kate" },
      ],
    },
  },
  _callSubscriber() {
    console.log("rerender now");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber();
  }
};

export default store;

// for global
window.store = store;
