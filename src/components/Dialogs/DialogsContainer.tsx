import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { actions } from "../../redux/dialogs-reducer";
import { AppStateType } from "../../redux/redux-store";
import Dialogs from "./Dialogs";

const mapStateToProps = (state: AppStateType) => ({
  dialogs: state.dialogsPage.dialogs,
  messages: state.dialogsPage.messages,
});

export default compose<React.ComponentType>(
  connect(mapStateToProps, {
    sendMessage: actions.sendMessage,
  }),
  withAuthRedirect
)(Dialogs);

// Types
export type MapStateType = ReturnType<typeof mapStateToProps>
