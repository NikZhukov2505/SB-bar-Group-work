import React from 'react';
import styles from './Basket.module.css'
import dinner from '../../Images/Emir/cartitem.png'
import recDinner from '../../Images/Emir/cartRec.png'
import { Link } from 'react-router-dom';


const Basket = () => {
    return (
        <main className={styles.main}>
            <section className={styles.cart}>
                <h1 className={styles.title}>Корзина</h1>
                <article className={styles.dinner}>
                    <img src={dinner} alt="" />
                    <div className={styles.dinnerInfo}>
                        <div className={styles.dinerTop}>
                            <h3 className={styles.dinnerName}>Форель с булгуром</h3>
                            <button className={styles.close}><span></span></button>
                        </div>
                        <div className={styles.dinnerOption}>
                            <div className={styles.dinnerQuantity}>
                                <p>Количество</p>
                                <div className={styles.quantityBtns}>
                                    <button className={styles.minus}><span></span></button>
                                    <p>2</p>
                                    <button className={styles.plus}><span></span></button>
                                </div>
                            </div>
                            <div className={styles.dinnerPrice}>
                                <p>Цена</p>
                                <strong>1000 сом</strong>
                            </div>
                            <div className={styles.dinnerSum}>
                                <p>Конечная цена</p>
                                <strong>2000 сом</strong>
                            </div>
                        </div>
                    </div>
                </article>
                <article className={styles.dinner}>
                    <img src={dinner} alt="" />
                    <div className={styles.dinnerInfo}>
                        <div className={styles.dinerTop}>
                            <h3 className={styles.dinnerName}>Форель с булгуром</h3>
                            <button className={styles.close}><span></span></button>
                        </div>
                        <div className={styles.dinnerOption}>
                            <div className={styles.dinnerQuantity}>
                                <p>Количество</p>
                                <div className={styles.quantityBtns}>
                                    <button className={styles.minus}><span></span></button>
                                    <p>2</p>
                                    <button className={styles.plus}><span></span></button>
                                </div>
                            </div>
                            <div className={styles.dinnerPrice}>
                                <p>Цена</p>
                                <strong>1000 сом</strong>
                            </div>
                            <div className={styles.dinnerSum}>
                                <p>Конечная цена</p>
                                <strong>2000 сом</strong>
                            </div>
                        </div>
                    </div>
                </article>
                <article className={styles.dinner}>
                    <img src={dinner} alt="" />
                    <div className={styles.dinnerInfo}>
                        <div className={styles.dinerTop}>
                            <h3 className={styles.dinnerName}>Форель с булгуром</h3>
                            <button className={styles.close}><span></span></button>
                        </div>
                        <div className={styles.dinnerOption}>
                            <div className={styles.dinnerQuantity}>
                                <p>Количество</p>
                                <div className={styles.quantityBtns}>
                                    <button className={styles.minus}><span></span></button>
                                    <p>2</p>
                                    <button className={styles.plus}><span></span></button>
                                </div>
                            </div>
                            <div className={styles.dinnerPrice}>
                                <p>Цена</p>
                                <strong>1000 сом</strong>
                            </div>
                            <div className={styles.dinnerSum}>
                                <p>Конечная цена</p>
                                <strong>2000 сом</strong>
                            </div>
                        </div>
                    </div>
                </article>
                <article className={styles.order}>
                    <h3 className={styles.orderTitle} >Общая стоимость: <strong> 6000 cомов</strong></h3>
                    <h3 className={styles.orderTitle} >Количество элементов: <strong> 6</strong></h3>
                    <Link to="/order"><button className={styles.orderBtn}>Оформить заказ</button></Link>
                </article>
            </section>
            <section className={styles.recommendations}>
                <h2 className={styles.recTitle}>С этим также подойдет</h2>
                <div className={styles.recList}>
                    <article className={styles.recdinner}>
                        <img src={recDinner} alt="" />
                        <h3>Форель с булгуром</h3>
                        <p>Описание продукта, особенности, плюсы и минусы. </p>
                        <div className={styles.recOptions}>
                            <strong>1000 сом</strong>
                            <button>В корзину</button>
                        </div>
                    </article>
                    <article className={styles.recdinner}>
                        <img src={recDinner} alt="" />
                        <h3>Форель с булгуром</h3>
                        <p>Описание продукта, особенности, плюсы и минусы. </p>
                        <div className={styles.recOptions}>
                            <strong>1000 сом</strong>
                            <button>В корзину</button>
                        </div>
                    </article>
                    <article className={styles.recdinner}>
                        <img src={recDinner} alt="" />
                        <h3>Форель с булгуром</h3>
                        <p>Описание продукта, особенности, плюсы и минусы. </p>
                        <div className={styles.recOptions}>
                            <strong>1000 сом</strong>
                            <button>В корзину</button>
                        </div>
                    </article>
                    <article className={styles.recdinner}>
                        <img src={recDinner} alt="" />
                        <h3>Форель с булгуром</h3>
                        <p>Описание продукта, особенности, плюсы и минусы. </p>
                        <div className={styles.recOptions}>
                            <strong>1000 сом</strong>
                            <button>В корзину</button>
                        </div>
                    </article>
                </div>
            </section>
        </main >
    );
};

export default Basket;