import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css'
import sign from './../../Images/Jyrgal/sign.png'
import basket from './../../Images/Emir/Basket.png'
import logo from './../../Images/Nikita/Logo.png'


const Header = () => {
    return (
        <header className={styles.wrapper}>
            <div className='container'>

                <nav>
                    <li>
                        <NavLink className={({ isActive }) => isActive ? styles.act_link : styles.link} to='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => isActive ? styles.act_link : styles.link} to='/menu'>Меню</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => isActive ? styles.act_link : styles.link} to='/promotion'>Акции</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => isActive ? styles.act_link : styles.link} to='/about'>О нас</NavLink>
                    </li>
                    <div>
                        <img src={logo} alt="" />
                    </div>
                    <li>
                        <NavLink className={({ isActive }) => isActive ? styles.act_link : styles.link} to='/contacts'>Контакты</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => isActive ? styles.act_link : styles.link} to='/sign'><img className={styles.img__vector} src={sign} alt="" />Войти</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => isActive ? styles.act_link : styles.link} to='/basket'><img src={basket} alt="" /></NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => isActive ? styles.act_link : styles.link} to='/order'>Order</NavLink>
                    </li>
                </nav>
            </div>

        </header >
    );
};

export default Header;