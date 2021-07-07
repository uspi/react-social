import React from "react";
import style from "./Header.module.css";
import tLogo from "./../../assets/images/tLogo512.png";

const Header = () => {
    return (
        <div className={style.headerContainer}>
            <header className={style.header}>
                <div className={style.logo}>
                    <img src={tLogo} alt="logo of company"/>
                </div>
            </header>
        </div>
    );
}

export default Header;