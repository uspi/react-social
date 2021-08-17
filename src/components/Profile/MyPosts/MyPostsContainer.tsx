import { connect } from "react-redux";
import {
  actions
} from "../../../redux/profile-reducer";
import { AppStateType } from "../../../redux/redux-store";
import MyPosts from "./MyPosts";

const mapStateToProps = (state: AppStateType) => ({
  posts: state.profilePage.posts
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

export type MapStateType = ReturnType<typeof mapStateToProps>
