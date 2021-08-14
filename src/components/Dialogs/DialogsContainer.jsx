import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import {
  sendMessageCreator,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const mapStateToProps = (state) => {
  return {
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
    newMessageText: state.dialogsPage.newMessageText
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     sendMessage: (newMessageText) => {
//       let action = sendMessageCreator(newMessageText);
//       dispatch(action);
//     },
//   }
// }

export default compose(
  connect(mapStateToProps, {
    sendMessage: sendMessageCreator
  }),
  withAuthRedirect
)(Dialogs);