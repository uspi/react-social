import profileReducer, { addPostCreator, deletePost } from "./profile-reducer";

let state = {
  posts: [
    { id: 1, message: "My first post", likesCount: 0 },
    { id: 2, message: "Second post", likesCount: 2 },
    { id: 3, message: "My third post", likesCount: 5 },
  ],
  // ...
};

it("length of posts should be incremented", () => {
  // 1. input data
  let action = addPostCreator("new post text. dog's and cats.");

  // 2. action
  let newState = profileReducer(state, action);

  // 3. expectation
  expect (newState.posts.length).toBe(4);
});

it("message of new post should be correct", () => {
  // 1. input data
  let action = addPostCreator("new post text. dog's and cats.");

  // 2. action
  let newState = profileReducer(state, action);

  // 3. expectation
  expect (newState.posts[3].message).toBe("new post text. dog's and cats.");
});

it("length of messages after deleting should be decrement", () => {
  // 1. input data
  let action = deletePost(1);

  // 2. action
  let newState = profileReducer(state, action);

  // 3. expectation
  expect (newState.posts.length).toBe(2);
});

it("length of messages after deleting shouldn't be decrement if id is incorrect", () => {
  // 1. input data
  let action = deletePost(1000);

  // 2. action
  let newState = profileReducer(state, action);

  // 3. expectation
  expect (newState.posts.length).toBe(3);
});
