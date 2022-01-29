import React from 'react';
import styles from './Section2.module.css'
import news from './../../../Images/Nikita/News.png'

const Section2 = () => {
    return (
        <section className={styles.news}>
            <div className='container'>

                <div className={styles.card}>
                    <img src={news} alt="" />
                </div>

            </div>
        </section>
    );
};

export default Section2;