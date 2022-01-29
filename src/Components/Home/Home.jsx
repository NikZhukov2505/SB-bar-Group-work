import React from 'react';
import styles from './Home.module.css'
import Section1 from './Section1/Section1';
import About from './../AboutUS/About';
import Section2 from './Section2/Section2';

const Home = () => {
    return (
        <div className={styles.wrapper}>
            <Section1 />

            <About />
            <Section2 />
        </div>
    );
};

export default Home;