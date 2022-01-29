import React, { useState } from 'react';
import styles from './Sign.module.css'
import logocenter from './../../Images/Jyrgal/logocenter.png'
import network from './../../Images/Jyrgal/network.png'
import Signin from "./Signin/Signin";
import Signup from "./SignUp/Signup";
import { NavLink } from "react-router-dom";

const Sign = () => {
    const [type, setType] = useState(true)
    return (
        <div className={styles.sign}>
            <div className={styles.logo}>
                <img src={logocenter} alt="" />
            </div>
            <div className={styles.container}>
                <div className={styles.sighAndRegis}>
                    <NavLink className={({ isActive }) => isActive ? styles.act_link : styles.link} to={'/sign'}><h1 onClick={() => { setType(true) }}>Вход</h1></NavLink>

                    <NavLink className={({ isActive }) => isActive ? styles.act_link : styles.link} to={'/sign'}><h1 onClick={() => { setType(false) }}>Регистрация</h1></NavLink>

                </div>
                {
                    type === true ? <Signin /> : <Signup />
                }
            </div>

        </div>
    );
};

export default Sign;