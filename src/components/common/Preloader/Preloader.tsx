import React from "react";
import preloader from "./../../../assets/images/preloader.svg";
import style from "./Preloader.module.css";

let Preloader: React.FC = (props) => {
  return (
    <div className={style.imageContainer}>
      <img src={preloader} alt="loader icon" />
    </div>
  );
};

export default Preloader;
