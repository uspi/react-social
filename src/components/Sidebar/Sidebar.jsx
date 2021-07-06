import React from "react";
import StoreContext from "../../StoreContext";
import style from "./Sidebar.module.css";
import SidebarItem from "./SidebarItem/SidebarItem";

const Sidebar = (props) => {
    // let state = props.store.getState();

    // let sidebarElements = state.sidebar.friends.map(e => <SidebarItem id={e.id} name={e.name} />);
    let sidebarElements = props.friends.map(e =>
        <SidebarItem key={e.id} id={e.id} name={e.name} />
    );
    return (
        <StoreContext.Consumer>{
            (store) => {
                let state = store.getState();

                let sidebarElements =
                    state.sidebar.friends.map(e =>
                        <SidebarItem id={e.id} name={e.name} />
                    );
                return (
                    <div className={style.sidebar}>
                        {sidebarElements}
                    </div>
                );
            }
        }
        </StoreContext.Consumer>
    );
}

export default Sidebar;