import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { getUserProfile } from "../../redux/profile-reducer"
import { Redirect, withRouter } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }

    this.props.getUserProfile(userId);
  }

  render() {

    return (
      <Profile profile={this.props.profile} {...this.props} />
    );
  }
};

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
  };
};


let withUrlDataContainerComponent = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, {
  getUserProfile
})(withUrlDataContainerComponent);
