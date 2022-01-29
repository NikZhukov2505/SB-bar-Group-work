import React from 'react';
import styles from "../Sign.module.css";
import logocenter from "../../../Images/Jyrgal/logocenter.png";

const Signin = () => {
    return (
        <div>

            <div className={styles.container}>
                <div className={styles.inputs}>
                    <div>
                        <p>Ваша электронная почта</p>
                        <input className={`${styles.enter} ${styles.enter1}`} type="text"
                               placeholder='Введите ваш адрес эл. почты'/>
                    </div>
                    <div>
                        <p>Ваш пароль</p>
                        <input className={styles.enter} type="text" placeholder='Введите ваш пароль'/>
                    </div>
                </div>
                <div className={styles.remember}>
                    <div className={styles.check__remember}>
                        <input className={styles.box} type="checkbox" id="check"/>
                        <label htmlFor="check"><p className={styles.box__text}>Запомнить меня</p></label>
                    </div>
                    <div>
                        <p className={styles.box__text1}>Забыли пароль?</p>
                    </div>
                </div>
                <div className={styles.btn__wrap}>
                    <button className={styles.btn}>Войти</button>
                </div>
            </div>
        </div>
    );
};

export default Signin;