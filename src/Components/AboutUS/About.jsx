import React from 'react';
import styles from './About.module.css'
import fone from './../../Images/Nikita/fone.png'

const About = () => {
    return (
        <div className='container'>
            <section className={styles.about}>
                <h2 className={styles.text}>О нас</h2>
                <div className={styles.wrapper}>
                    <div className={styles.card}>
                        <img src={fone} alt="" />
                    </div>
                    <div className={styles.card}>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                    </div>
                </div>
            </section>


        </div >
    );
};

export default About;