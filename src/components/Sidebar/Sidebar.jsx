import React from "react";
import style from "./Sidebar.module.css";
import SidebarItem from "./SidebarItem/SidebarItem";

const Sidebar = (props) => {

    let sidebarElements = props.friends.map(e =>
        <SidebarItem key={e.id} id={e.id} name={e.name} />
    );
    return (
        <div className={style.sidebar}>
            {sidebarElements}
        </div>
    );
}

export default Sidebar;