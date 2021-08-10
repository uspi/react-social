import React from "react";
import { BrowserRouter, Route, withRouter } from "react-router-dom";
import "./App.css";
import { connect, Provider } from "react-redux";
import { initializeApp } from "./redux/app-reducer"
import { compose } from "redux";
import store from "./redux/redux-store";

import Login from "./components/Login/Login";
import Music from "./components/Music/Music";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";

import SidebarContainer from "./components/Sidebar/SidebarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import Preloader from "./components/common/Preloader/Preloader";
import HeaderContainer from "./components/Header/HeaderContainer";
import { withSuspense } from "./hoc/withSuspense";

const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }

    return (

      <div className="app-wrapper">
        <div className="header">
          <HeaderContainer />
        </div>

        <div className="app-wrapper-content">
          <Navbar />
          <SidebarContainer store={this.props.store} />

          <Route
            path="/profile/:userId?"
            render={() => (
              <React.Suspense fallback={<div className="content-area">Loading...</div>}>
                <ProfileContainer />
              </React.Suspense>
            )}
          />
          <Route
            path="/dialogs"
            render={() => (
              <React.Suspense fallback={<div className="content-area">Loading...</div>}>
                <DialogsContainer />
              </React.Suspense>
            )}
          />
          <Route path="/news" render={() => <News />} />
          <Route path="/music" render={() => <Music />} />
          <Route path="/users" render={() => <UsersContainer />} />
          <Route path="/settings" render={() => <Settings />} />

          <Route path="/login" render={() => <Login />} />
        </div>
      </div>

    );
  }
};

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
})

// container
let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, {
    initializeApp
  }),
)(App);

// browser-router => store-provider => container
let MainApp = (props) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  );
}

export default MainApp;