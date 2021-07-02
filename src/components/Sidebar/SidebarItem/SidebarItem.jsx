import React from "react";
import style from "./SidebarItem.module.css";

const SidebarItem = (props) => {

    // let friends = props.state.friends;
    // let avatars = props.state.avatars;

    let id = props.id;
    let name = props.name;

    return (
        <div className={style.sidebarItem}>
            <div className={style.avatar}>
                <img  src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/111554483/original/83d513acbc4b3716c9a474086bb633a5de3c2d74/create-social-media-avatars-in-minimalist-style.jpg"/>
            </div>
            
            <div>
                {name}
            </div>
        </div>
    );
}

export default SidebarItem;