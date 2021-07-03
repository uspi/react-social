import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Music from "./components/Music/Music";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Profile from "./components/Profile/Profile";
import Settings from "./components/Settings/Settings";
import Sidebar from "./components/Sidebar/Sidebar";

const App = (props) => {
  let profilePage = props.state.profilePage;
  let dialogsPage = props.state.dialogsPage;
  let sidebar = props.state.sidebar;
  // func
  let addPost = props.addPost;
  let addMessage = props.addMessage;
  let updateNewPostText = props.updateNewPostText;
  let updateNewMessageText = props.updateNewMessageText;

  return (
    <div className="app-wrapper">
      <div className="header">
        <Header />
      </div>

      <div className="app-wrapper-content">
        <Navbar />
        <Sidebar state={sidebar} />

        <Route
          path="/profile"
          render={() => (
            <Profile
              profilePage={profilePage}
              addPost={addPost}
              updateNewPostText={updateNewPostText}
            />
          )}
        />
        <Route
          path="/dialogs"
          render={() => (
            <Dialogs
              state={dialogsPage}
              addMessage={addMessage}
              updateNewMessageText={updateNewMessageText}
            />
          )}
        />
        <Route path="/news" render={() => <News />} />
        <Route path="/music" render={() => <Music />} />
        <Route path="/settings" render={() => <Settings />} />
      </div>
    </div>
  );
};

export default App;
