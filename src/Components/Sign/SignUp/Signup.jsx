import React from 'react';
import styles from './../Sign.module.css'

const Signup = () => {
    return (
        <div className={styles.container}>
            <div className={styles.inputs}>
                <p>Ваша электронная почта</p>
                <input className={styles.enter} type="text" placeholder='Введите ваш адрес эл. почты'/>
            </div>
            <div className={styles.inputs}>
                <p>Ваше имя</p>
                <input className={styles.enter} type="text" placeholder='Введите ваше имя'/>
            </div>
            <div className={styles.inputs}>
                <p>Ваша фамилия</p>
                <input className={styles.enter} type="text" placeholder='Введите вашу фамилию'/>
            </div>
            <div className={styles.inputs}>
                <p>Ваш телефон</p>
                <input className={styles.enter} type="text" placeholder='Введите ваш телефон'/>
            </div>
            <div className={styles.inputs}>
                <p>Ваш пароль</p>
                <input className={styles.enter} type="password" placeholder='Введите ваш пароль'/>
            </div>
            <div className={styles.inputs}>
                <p>Повторите ваш пароль</p>
                <input className={styles.enter} type="password" placeholder='Введите ваш пароль повторно'/>
            </div>
            <div className={styles.btn__wrap}>
                <button className={styles.btn}>Регистрация</button>
            </div>
        </div>
    );
};

export default Signup;