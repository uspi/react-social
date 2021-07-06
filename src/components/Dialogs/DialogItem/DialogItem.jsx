import React from "react";
import { NavLink } from "react-router-dom";
import s from "./DialogItem.module.css";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    let name = props.name;

    return (
        <div className={s.dialogItem}>
            <div className={s.avatar}>
                <img src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/111554483/original/83d513acbc4b3716c9a474086bb633a5de3c2d74/create-social-media-avatars-in-minimalist-style.jpg" alt="user avatar" />
            </div>

            <NavLink to={path} activeClassName={s.activeLink}>{name}</NavLink>
        </div>
    );
}

export default DialogItem;