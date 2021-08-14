import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { getUserProfile, getUserStatus, updateUserStatus, 
  saveUserPhoto, saveProfile } from "../../redux/profile-reducer"
import { withRouter } from "react-router-dom";
import { compose } from "redux";

class ProfileContainer extends React.Component {


  componentDidMount() {
    this.refreshProfile();
  }

  componentDidUpdate(prevProps, prevState) {
    //let userId = this.getUserIdFromUrl() || this.getAuthorizedUserId();

    // without state
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      //if (prevState.userId !== userId) {
      this.refreshProfile();
    }
  }

  refreshProfile = () => {
    let userId = this.getUserIdFromUrl() || this.getAuthorizedUserId();
    let isLoginRedirect = !userId;

    if (!isLoginRedirect) {


      this.props.getUserProfile(userId);
      this.props.getUserStatus(userId);
    } else {
      this.redirectOnAuthorization();
    }
  }

  getUserIdFromUrl = () => {
    // get id from url address
    return this.props.match.params.userId;
  }

  getAuthorizedUserId = () => {
    // in my profile
    return this.props.authorizedUserId;
  }

  redirectOnAuthorization = () => {
    // unauthorized
    this.props.history.push("/login");
  }

  render() {

    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
        isOwner={!this.props.match.params.userId}
        status={this.props.status}
        updateUserStatus={this.props.updateUserStatus}
        saveUserPhoto={this.props.saveUserPhoto}
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
    getUserProfile, getUserStatus, updateUserStatus, saveUserPhoto,
    saveProfile
  }),
  withRouter,
  // withAuthRedirect
)(ProfileContainer);
