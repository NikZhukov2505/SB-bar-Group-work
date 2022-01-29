import React from 'react';
import styles from './Contacts.module.css'
// import network from "../../Images/Jyrgal/network.png";
import map from "../../Images/Jyrgal/map.png";
import instagram from './../../Images/Jyrgal/logonetwork/instagran.png'
import whatsapp from './../../Images/Jyrgal/logonetwork/whatsappp.png'
import facebook from './../../Images/Jyrgal/logonetwork/facebook.png'




const Contacts = () => {
    return (
        <div className={styles.contacts}>
            <div className={styles.container}>
                <h1>Контакты</h1>

                <div className={styles.innerContainer}>

                    <div className={styles.leftBlock}>
                        <div>
                            <h4 >Режим работы</h4>
                            <p>c 10:00 до 20:00</p>
                            <p>Сб, Вс - выходной</p>
                        </div>
                        <div className={styles.contacts}>
                            <h4>Телефон</h4>
                            <p>+996 (0553) 577-575</p>
                            <p>+996 (0773) 577-575</p>
                        </div>
                        <div className={styles.contacts}>
                            <h4>Адрес</h4>
                            <p>г. Бишкек, Медерова, 50/2</p>

                        </div>
                        <div className={styles.logo_network}>
                            <img className={styles.network__insta} src={instagram} alt="" />
                            <img className={styles.network} src={whatsapp} alt="" />
                            <img className={styles.network} src={facebook} alt="" />
                        </div>

                    </div>

                    <div className={styles.rightBlock}>
                        <img className={styles.image} src={map} alt="" />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Contacts;