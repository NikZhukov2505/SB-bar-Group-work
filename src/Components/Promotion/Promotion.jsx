import React, { useState } from 'react';
import styles from './Promotion.module.css'
import Card from './Card/Card';
import {products}  from  './Content'
import bgImg from './promImg/bg.png'

const Promotion = () => {
    
    const [product, setProduct] = useState(products)


    return (
        <section className={styles.promotion}>
            <div className={styles.bg}>              
                <div className={styles.wrapper}>
                <h2 className={styles.title} >Акции</h2>
                <Card product = {product} />
            </div>
            </div>
        </section>
    );
};

export default Promotion;