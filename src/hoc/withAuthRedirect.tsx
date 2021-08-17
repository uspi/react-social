import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { AppStateType } from "../redux/redux-store";

let mapStateToPropsForRedirect = (state: AppStateType) => ({
  isAuth: state.auth.isAuth,
});

type MapStateType = ReturnType<typeof mapStateToPropsForRedirect>;

export const withAuthRedirect = <WCP,>(
  WrappedComponent: React.ComponentType<WCP>
) => {
  const RedirectComponent: React.FC<MapStateType> = (props) => {
    let { isAuth, ...restProps } = props;

    if (!isAuth) {
      return <Redirect to="login" />;
    }

    return <WrappedComponent {...(restProps as WCP)} />;
  };

  return connect<MapStateType, {}, WCP, AppStateType>(
    mapStateToPropsForRedirect
  )(RedirectComponent);
};
