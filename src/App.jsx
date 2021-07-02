import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
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

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <div className="main">
          <Header />
          <Navbar />
          <Sidebar state={sidebar}/>

          <div className="app-wrapper-content">
            <Route path="/profile" render={() => <Profile state={profilePage} />} />
            <Route path="/dialogs" render={() => <Dialogs state={dialogsPage} />} />
            <Route path="/news" render={() => <News />} />
            <Route path="/music" render={() => <Music />} />
            <Route path="/settings" render={() => <Settings />} />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
