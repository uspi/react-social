import React from "react";
import s from "./Header.module.css";
import tLogo from "./../../imgs/tLogo512.png";

const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.logo}>
                <img src={tLogo} />
            </div>
        </header>
    );
}

export default Header;