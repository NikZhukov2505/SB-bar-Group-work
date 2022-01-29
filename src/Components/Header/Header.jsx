import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css'
import sign from './../../Images/Jyrgal/sign.png'
import basket from './../../Images/Emir/Basket.png'


const Header = () => {
    return (
        <header>
            <li>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/menu'>Меню</NavLink>
                <NavLink to='/promotion'>Акции</NavLink>
                <NavLink to='/about'>О нас</NavLink>
                <NavLink to='/contacts'>Контакты</NavLink>
                <NavLink to='/sign'><img src={sign} alt="" />Войти</NavLink>
                <NavLink to='/basket'><img src={basket} alt="" /></NavLink>
                <NavLink to='/order'>Order</NavLink>

            </li>
        </header>
    );
};

export default Header;