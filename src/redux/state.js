const ADD_POST = "ADD-POST";
const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

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
    if (action.type === ADD_POST) {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      };

      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber();
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber();
    } else if (action.type === ADD_MESSAGE) {
      let newMessage = {
        id: 5,
        text: this._state.dialogsPage.newMessageText,
      };

      this._state.dialogsPage.messages.push(newMessage);
      this._state.dialogsPage.newMessageText = "";
      this._callSubscriber();
    } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
      this._state.dialogsPage.newMessageText = action.newText;
      this._callSubscriber();
    }
  },
};

export const addPostCreator = () => ({
  type: ADD_POST,
});

export const addMessageCreator = () => ({
  type: ADD_MESSAGE,
});

export const updateNewPostTextCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export const updateNewMessageTextCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newText: text,
});

export default store;

// for global
window.store = store;
