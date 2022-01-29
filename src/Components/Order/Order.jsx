import React, { useState } from 'react';
import styles from './Order.module.css'
import iks from './../../Images/Amantur/iks.png'
import Done from './Done/Done';

const Order = () => {

    const [page, setPage] = useState(true)


    return (
        <div className={styles.order}>
            {
                page
                    ?
                    <div className={styles.order_wrapper}>
                        <div className={styles.folder}>
                            <img src={iks} alt="" />
                        </div>
                        <div className={styles.top}>
                            <h1> Оформление заказа </h1>
                        </div>
                        <div className={styles.name} >
                            <h3 >Ваше имя</h3>
                            <input type="text" id={styles.coc} placeholder='Введите ваше имя' />
                        </div>

                        <div className={styles.phone}>
                            <h3>Введите ваш телефон</h3>
                            <input type="text" id={styles.pipe} placeholder='Введите ваш телефон' />
                        </div>

                        <div className={styles.check}>
                            <div className={styles.p}>
                                <h3>Тип заказа:</h3>
                            </div>
                            <div className={styles.f}>
                                <input type="checkbox" /><span>Доставка</span>

                                <input type="checkbox" /><span>Самовывоз</span>
                            </div>
                        </div>
                        <div className={styles.adress}>

                            <div className={styles.arr}>
                                <h3> Ваш адрес</h3>
                                <input type="text" id={styles.array} placeholder='Введите ваш адрес' />
                            </div>
                            <div className={styles.home}>
                                <h3> Ваш дом</h3>
                                <input type="text" id={styles.homes} placeholder='Введите ваш дом' />
                            </div>

                        </div>
                        <div className={styles.podez}>
                            <div className={styles.user}>
                                <h3> Ваш подъезд</h3>
                                <input type=" text" id={styles.pods_1} placeholder='Введите ваш подъезд' />
                            </div>
                            <div className={styles.username}>
                                <h3>  Номер вашей квартиры</h3>
                                <input type="text" id={styles.pods_2} placeholder='Введите номер квартиры' />
                            </div>
                        </div>
                        <div className={styles.com}>
                            <h3>   Комментарий к заказу</h3>
                            <input type="text" id={styles.comment} placeholder='Введите ваш комментарий' />
                        </div>
                        <div className={styles.promo}>
                            <h3> Промокод</h3>
                            <input type="text" id={styles.promocod} placeholder='Введите промокод' />
                        </div>

                        <div className={styles.many}>
                            <div>
                                <h3>Оплата:</h3>
                            </div>
                            <div className={styles.radio}>
                                <input type="checkbox" /> <span>Картой</span>
                                <input type="checkbox" />   <span>Наличными</span>

                            </div>
                        </div>

                        <div className={styles.didle}>
                            <div className={styles.lord_1}>
                                <h3>Номер карты</h3>
                                <input type="text" id={styles.card_1} placeholder='0000 0000 0000 0000' />
                            </div>

                            <div className={styles.lord_2}>
                                <h3>CVV</h3>
                                <input type="text" id={styles.card_2} placeholder='000' />
                            </div>
                            <div className={styles.lord_3}>

                                <h3> Срок действия</h3>
                                <input type="text" id={styles.card_3} placeholder='ММ/ГГ' />

                            </div>

                        </div>
                        <div className={styles.kart_1}>
                            <h3> Держатель карты </h3>
                            <input type="text" id={styles.kart_2} placeholder='Введите имя и фамилию' />
                        </div>
                        <div className={styles.many_1}>
                            <h3>Итоговая стоимость:</h3>   <h2>6000 сомов</h2>
                        </div>

                        <div className={styles.zakaz}>

                            <button onClick={() => setPage(false)}>Заказать</button>

                        </div>




                    </div >
                    :

                    <Done />
            }

        </div>);
};

export default Order;