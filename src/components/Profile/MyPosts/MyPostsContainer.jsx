import { connect } from "react-redux";
import {
  actions
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const mapStateToProps = (state) => ({
  posts: state.profilePage.posts,
  newPostText: state.profilePage.newPostText
});

// const mapDispatchToProps = (dispatch) => {
//   return {
//     updateNewPostText: (text) => {
//       let action = updateNewPostTextCreator(text);
//       dispatch(action);
//     },
//     addPost: () => {
//       let action = addPostCreator();
//       dispatch(action);
//     }
//   }
// }

export default connect(mapStateToProps, {addPost: actions.addPost})(MyPosts);
