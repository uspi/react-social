import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { getUserProfile, getUserStatus, updateUserStatus } from "../../redux/profile-reducer"
import { withRouter } from "react-router-dom";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    // get id from url address
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorizedUserId;
      if(!userId) {
        this.props.history.push("/login");
      }
    }

    this.props.getUserProfile(userId);
    this.props.getUserStatus(userId);
  }  

  render() {

    return (
      <Profile
        profile={this.props.profile}
        {...this.props}
        status={this.props.status}
        updateUserStatus={this.props.updateUserStatus}
      />
    );
  }
};

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
  };
};

export default compose(
  connect(mapStateToProps, {
    getUserProfile, getUserStatus, updateUserStatus
  }),
  withRouter,
  // withAuthRedirect
)(ProfileContainer);
