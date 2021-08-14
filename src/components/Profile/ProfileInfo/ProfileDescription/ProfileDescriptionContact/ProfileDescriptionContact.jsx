import React from "react";
import style from "./ProfileDescriptionContact.module.css";

const ProfileDescriptionContact = ({ contactTitle, contactValue }) => {
    return (
        <div className={style.flexContainer_row}>
            <b>{contactTitle}:&nbsp;</b>
            <div>{contactValue}</div>
        </div>
    );
}

export {
    ProfileDescriptionContact
}