import React from "react";
import style from "./Header.module.css";
import tLogo from "./../../assets/images/tLogo512.png";
import { NavLink } from "react-router-dom";

const Header = (props) => {
    return (
        <div className={style.headerContainer}>
            <header className={style.header}>
                <div className={style.logo}>
                    <img src={tLogo} alt="logo of company"/>
                </div>
                <div className={style.loginBlock}>
                    {props.isAuth ? 
                    <div>{props.login} <button onClick={props.logout}>Log Out</button></div> 
                    : <NavLink to={"/login"}>Login</NavLink>}
                    
                </div>
            </header>       
        </div>
    );
}

export default Header;