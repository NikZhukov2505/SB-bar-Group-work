import React from 'react';
import { Link, NavLink } from 'react-router-dom';
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
                        <NavLink className={({ isActive }) => isActive ? styles.act_link : styles.link} to='/menu'>Меню</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => isActive ? styles.act_link : styles.link} to='/promotion'>Акции</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => isActive ? styles.act_link : styles.link} to='/about'>О нас</NavLink>
                    </li>
                    <div>
                        <Link to="/"><img src={logo} alt="" /></Link>
                    </div>
                    <li>
                        <NavLink className={({ isActive }) => isActive ? styles.act_link : styles.link} to='/contacts'>Контакты</NavLink>
                    </li>
                    <li className={styles.li__img}>
                        <NavLink className={({ isActive }) => isActive ? styles.act_link : styles.link} to='/sign'><img className={styles.img__vector} src={sign} alt="" /><p>Войти</p></NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => isActive ? styles.act_link : styles.link} to='/basket'><img src={basket} alt="" /></NavLink>
                    </li>
                    {/* <li>
                        <NavLink className={({ isActive }) => isActive ? styles.act_link : styles.link} to='/order'>Order</NavLink>
                    </li> */}
                </nav>
            </div>

        </header >
    );
};

export default Header;