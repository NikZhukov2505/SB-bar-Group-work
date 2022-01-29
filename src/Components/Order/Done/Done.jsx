import React from 'react';
import styles from './../Order.module.css'
import iks from './../../../Images/Amantur/iks.png'
import foodi from './../../../Images/Amantur/foodi.png'
const Done = () => {
    return (
        <div className={styles.plach}>
            <div className={styles.klach}>
                <div className={styles.iks}>
                    <img src={iks} alt="" />
                </div>
                <div className={styles.hun}>
                    <h1>Ваш заказ оформлен!</h1>
                </div>
                <div className={styles.fife}>
                    <img src={foodi} alt="" />
                </div>
                <div className={styles.app}>
                    <h3>Приятного аппетита!</h3>
                </div>
            </div>
        </div>
    );
};

export default Done;