import React from 'react';
import styles from './Section1.module.css'
import slider from './../../../Images/Nikita/slider.png'

const Section1 = () => {
    return (
        <div className='container'>
            <div className={styles.slider}>
                <img src={slider} alt="" />
            </div>
        </div>
    );
};

export default Section1;