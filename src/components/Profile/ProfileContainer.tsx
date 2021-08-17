import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { getUserProfile, getUserStatus, updateUserStatus, 
  saveUserPhoto, saveProfile } from "../../redux/profile-reducer"
import { RouteComponentProps, withRouter } from "react-router-dom";
import { compose } from "redux";
import { AppStateType } from "../../redux/redux-store";
import { ProfileType } from "../../types/types";

type PropsType = {
  getUserProfile: (userId: number) => void 
  getUserStatus: (userId: number) => void 
  updateUserStatus: (statusText: string) => void
  saveUserPhoto: (file: File) => void
  saveProfile: (profile: ProfileType) => void
} & MapStateType & RouteComponentProps<PathParamsType>

type PathParamsType = {
  userId: string
}

class ProfileContainer extends React.Component<PropsType> {
  componentDidMount() {
    this.refreshProfile();
  }

  componentDidUpdate(prevProps: PropsType, prevState: PropsType) {
    //let userId = this.getUserIdFromUrl() || this.getAuthorizedUserId();

    // without state
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      //if (prevState.userId !== userId) {
      this.refreshProfile();
    }
  }

  refreshProfile = () => {
    let userId: number | null = +this.getUserIdFromUrl() || this.getAuthorizedUserId();
    
    if (userId) {
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
    // unauthorized. TODO: replace push with redirect
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

let mapStateToProps = (state: AppStateType) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
  };
};

export default compose<React.ComponentType>(
  connect(mapStateToProps, {
    getUserProfile, getUserStatus, updateUserStatus, saveUserPhoto,
    saveProfile
  }),
  withRouter,
  // withAuthRedirect
)(ProfileContainer);

type MapStateType = ReturnType<typeof mapStateToProps>
