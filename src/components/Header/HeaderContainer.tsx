import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { logout } from "../../redux/auth-reducer";
import { AppStateType } from "../../redux/redux-store";

class HeaderContainer extends React.Component<PropsType> {
  render() {
    return (
      <Header
        isAuth={this.props.isAuth}
        login={this.props.login}
        logout={this.props.logout}
      />
    );
  }
}

const mapStateToProps = (state: AppStateType) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default connect(mapStateToProps, {
  logout,
})(HeaderContainer);

// Types
type PropsType = { logout: () => void } & MapStateType;
type MapStateType = ReturnType<typeof mapStateToProps>;
