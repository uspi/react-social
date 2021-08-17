import React from "react";
import style from "./ProfileDescriptionContact.module.css";

type PropsType = {
  contactTitle: string;
  contactValue: string;
};

const ProfileDescriptionContact: React.FC<PropsType> = ({
  contactTitle,
  contactValue,
}) => {
  return (
    <div className={style.flexContainer_row}>
      <b>{contactTitle}:&nbsp;</b>
      <div>{contactValue}</div>
    </div>
  );
};

export { ProfileDescriptionContact };
