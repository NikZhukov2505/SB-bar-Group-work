import React from 'react';
import styles from './Footer.module.css'
import logo from './../../Images/Nikita/Logo2.png'
import instagram from './../../Images/Nikita/instagram.png'
import whatsapp from './../../Images/Nikita/whatsapp.png'
import facebook from './../../Images/Nikita/facebook.png'

const Footer = () => {
    return (
        <footer>
            <div className='container'>
                <div className={styles.wrapper}>
                    <div className={styles.card__footer}>
                        <img src={logo} alt="" />
                    </div>
                    <div className={styles.card__footer}>
                        <h2>Режим работы</h2>
                        <p>c 10:00 до 20:00</p>
                        <p>Сб, Вс - выходной</p>
                    </div>
                    <div className={styles.card__footer}>
                        <h2>Телефон</h2>
                        <p>+996 (0553) 577-575</p>
                        <p>+996 (0773) 577-575</p>
                    </div>
                    <div className={styles.card__footer}>
                        <h2>Адрес</h2>
                        <p>г. Бишкек, Медерова, 50/2</p>
                    </div>
                    <div className={styles.card__footer}>
                        <div>
                            <img src={instagram} alt="" />
                        </div>
                        <div>
                            <img src={whatsapp} alt="" />
                        </div>
                        <div>
                            <img src={facebook} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;