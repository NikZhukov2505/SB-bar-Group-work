import { Button } from '@mui/material';
import styles from '../Promotion.module.css'
import React from 'react';

const Card = ( {product}) => {
    console.log(product);
    return (
        
        <div>
        {
            product.map ( (el)=> (
                <div>

                    <div   key={el.id} className={(el.id %2 != 1) ? `${styles.change} ${styles.card} `:`${styles.card} `}>
                        <div  className={styles.cardImg}>
                            <img src={el.img} alt="" />
                        </div>
                        <div className={styles.cardContent}>
                        <h2>
                            {el.title}
                        </h2>
                         <p>
                            {el.content} 
                        </p>
                        <div className={styles.price}>
                             <span>{el.price} сом </span>
                             <span>{el.discountprice} сом</span>
                        </div>
                        <Button  className={ styles.buttons } variant="outlined">В корзину</Button>
                    </div>

                    
                    

                    
                    
                </div>

                </div>
            )  
            
            )
        }     
       </div>
       

        
        
       
    );
};

export default Card;