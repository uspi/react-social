import React from "react";
import style from "./Sidebar.module.css";
import SidebarItem from "./SidebarItem/SidebarItem";

const Sidebar = (props) => {
    let state = props.store.getState();

    let sidebarElements = state.sidebar.friends.map(e => <SidebarItem id={e.id} name={e.name} />);
    return (
        <div className={style.sidebar}>
            {sidebarElements}
        </div>
    );
}

export default Sidebar;