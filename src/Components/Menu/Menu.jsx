import React from 'react';
import styles from './Menu.module.css'
import pic from './../../Images/Meerim/dish.png'
import { useState } from 'react';

const Menu = () => {
    const [count, setCount] = useState(1);

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }

    return (
        <div>
            <div className={styles.header_bottom}>
                <div className={styles.container}>
                    <nav className={styles.header_nav}>
                        <h1>Menu</h1>

                        <ul className={styles.header_menu}>

                            <li> <a href='' className={styles.header_link}>Новинки</a></li>
                            <li> <a href='' className={styles.header_link}>Популярное</a></li>
                            <li> <a href='' className={styles.header_link}>Популярное</a></li>

                            <li> <a href='' className={styles.header_link}>Акции</a></li>
                            <li> <a href='' className={styles.header_link}>Стейки</a></li>
                            <li> <a href='' className={styles.header_link}>Гарниры</a></li>
                            <li> <a href='' className={styles.header_link}>Салаты</a></li>
                            <li> <a href='' className={styles.header_link}>Напитки</a></li>
                            <li> <a href='' className={styles.header_link}>Напитки</a></li>
                            <li> <a href='' className={styles.header_link}>Напитки</a></li>



                        </ul>


                    </nav>

                </div>

            </div>

            <div className={styles.menu}>
                <div className={styles.container}>

                    <div className={styles.menu_card}>
                        <img src={pic} alt="" />
                        <div>
                            <h2>Форель с булгуром</h2>
                            <p>Описание продукта, особенности, плюсы и минусы.  </p>
                        </div>
                        <div className={styles.card2}>
                            <h3>1000 сом</h3>
                            <div>

                                <button className={styles.btn} onClick={increment}>+</button>
                                {count}
                                <button className={styles.btn} onClick={decrement}>-</button>
                            </div>

                            <button className={styles.trash}>В Корзину</button>
                        </div>
                    </div>

                    <div className={styles.menu_card}>
                        <img src={pic} alt="" />
                        <div>
                            <h2>Форель с булгуром</h2>
                            <p>Описание продукта, особенности, плюсы и минусы.  </p>
                        </div>
                        <div className={styles.card2}>
                            <h3>1000 сом</h3>
                            <div>  <button className={styles.btn} onClick={increment}>+</button>
                                {count}
                                <button className={styles.btn} onClick={decrement}>-</button></div>


                            <button className={styles.trash}>В Корзину</button>
                        </div>
                    </div>
                    <div className={styles.menu_card}>
                        <img src={pic} alt="" />
                        <div>
                            <h2>Форель с булгуром</h2>
                            <p>Описание продукта, особенности, плюсы и минусы.  </p>
                        </div>
                        <div className={styles.card2}>
                            <h3>1000 сом</h3>
                            <div> <button className={styles.btn} onClick={increment}>+</button>
                                {count}
                                <button className={styles.btn} onClick={decrement}>-</button></div>


                            <button className={styles.trash}>В Корзину</button>
                        </div>
                    </div>
                    <div className={styles.menu_card}>
                        <img src={pic} alt="" />
                        <div>
                            <h2>Форель с булгуром</h2>
                            <p>Описание продукта, особенности, плюсы и минусы.  </p>
                        </div>
                        <div className={styles.card2}>
                            <h3>1000 сом</h3>
                            <div>
                                <button className={styles.btn} onClick={increment}>+</button>
                                {count}
                                <button className={styles.btn} onClick={decrement}>-</button>
                            </div>


                            <button className={styles.trash}>В Корзину</button>
                        </div>
                    </div>
                    <div className={styles.menu_card}>
                        <img src={pic} alt="" />
                        <div>
                            <h2>Форель с булгуром</h2>
                            <p>Описание продукта, особенности, плюсы и минусы.  </p>
                        </div>
                        <div className={styles.card2}>
                            <h3>1000 сом</h3>
                            <div> <button className={styles.btn} onClick={increment}>+</button>
                                {count}
                                <button className={styles.btn} onClick={decrement}>-</button> </div>


                            <button className={styles.trash}>В Корзину</button>
                        </div>
                    </div>
                    <div className={styles.menu_card}>
                        <img src={pic} alt="" />
                        <div>
                            <h2>Форель с булгуром</h2>
                            <p>Описание продукта, особенности, плюсы и минусы.  </p>
                        </div>
                        <div className={styles.card2}>
                            <h3>1000 сом</h3>
                            <div>
                                <button className={styles.btn} onClick={increment}>+</button>
                                {count}
                                <button className={styles.btn} onClick={decrement}>-</button> </div>

                            <button className={styles.trash}>В Корзину</button>
                        </div>
                    </div>
                    <div className={styles.menu_card}>
                        <img src={pic} alt="" />
                        <div>
                            <h2>Форель с булгуром</h2>
                            <p>Описание продукта, особенности, плюсы и минусы.  </p>
                        </div>
                        <div className={styles.card2}>
                            <h3>1000 сом</h3>
                            <div><button className={styles.btn} onClick={increment}>+</button>
                                {count}
                                <button className={styles.btn} onClick={decrement}>-</button> </div>


                            <button className={styles.trash}>В Корзину</button>
                        </div>
                    </div>
                    <div className={styles.menu_card}>
                        <img src={pic} alt="" />
                        <div>
                            <h2>Форель с булгуром</h2>
                            <p>Описание продукта, особенности, плюсы и минусы.  </p>
                        </div>
                        <div className={styles.card2}>
                            <h3>1000 сом</h3>
                            <div>
                                <button className={styles.btn} onClick={increment}>+</button>
                                {count}
                                <button className={styles.btn} onClick={decrement}>-</button>
                            </div>
                            <button className={styles.trash}>В Корзину</button>
                        </div>
                    </div>
                    <div className={styles.menu_card}>
                        <img src={pic} alt="" />
                        <div>
                            <h2>Форель с булгуром</h2>
                            <p>Описание продукта, особенности, плюсы и минусы.  </p>
                        </div>
                        <div className={styles.card2}>
                            <h3>1000 сом</h3>
                            <div className={styles.count2}>
                                <button className={styles.btn} onClick={increment}>+</button>
                                {count}
                                <button className={styles.btn} onClick={decrement}>-</button>
                            </div>


                            <button className={styles.trash}>В Корзину</button>
                        </div>


                    </div>
                    <div className={styles.down}>
                        <button className={styles.btn2}>Загрузить ещё</button>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default Menu;