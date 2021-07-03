import { rerenderEntireTree } from "../render";

let state = {
  profilePage: {
    posts: [
      { id: 1, message: "My first post", likesCount: 0 },
      { id: 2, message: "Second post", likesCount: 2 },
      { id: 3, message: "My third post", likesCount: 5 },
    ],
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
};

export let addPost = (postMessage) => {
  let newPost = {
    id: 5,
    message: postMessage,
    likesCount: 0
  };

  state.profilePage.posts.push(newPost);
  rerenderEntireTree(state);
}


export default state;
