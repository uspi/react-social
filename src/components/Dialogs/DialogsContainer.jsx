import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import {
  sendMessageCreator,
  updateNewMessageTextCreator,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const mapStateToProps = (state) => {
  return {
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
    newMessageText: state.dialogsPage.newMessageText,
    isAuth: state.auth.isAuth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageText: (text) => {
      let action = updateNewMessageTextCreator(text);
      dispatch(action);
    },
    sendMessage: () => {
      let action = sendMessageCreator();
      dispatch(action);
    },
  }
}

let AuthRedirectComponent = (props) => {
  if (!props.isAuth) {
    return <Redirect to={"/login"} />
  };

  return <Dialogs {...props} />;
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;
