import React from "react";
import style from "./Sidebar.module.css";
import SidebarItem from "./SidebarItem/SidebarItem";

const Sidebar = (props) => {

    // let sidebar = props.state.sidebar;

    let sidebarElements = props.state.friends.map(e => <SidebarItem id={e.id} name={e.name} />);
    return (
        <div className={style.sidebar}>
            {sidebarElements}
        </div>
    );
}

export default Sidebar;