import React from "react";
import { Route, withRouter } from "react-router-dom";
import "./App.css";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import Music from "./components/Music/Music";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Settings from "./components/Settings/Settings";
import SidebarContainer from "./components/Sidebar/SidebarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import { connect } from "react-redux";
import { initializeApp } from "./redux/app-reducer"
import { compose } from "redux";
import Preloader from "./components/common/Preloader/Preloader";

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
              <ProfileContainer />
            )}
          />
          <Route
            path="/dialogs"
            render={() => (
              <DialogsContainer />
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

export default compose(
  withRouter,
  connect(mapStateToProps, {
    initializeApp
  }),
)(App);
