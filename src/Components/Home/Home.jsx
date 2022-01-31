import React from 'react';
import styles from './Home.module.css'
import Section1 from './Section1/Section1';
import About from './../AboutUS/About';
import Section2 from './Section2/Section2';
import Menu from '../Menu/Menu';

const Home = () => {
    return (
        <div className={styles.wrapper}>
            <Section1 />
            <Menu />
            <About />
            <Section2 />
        </div>
    );
};

export default Home;