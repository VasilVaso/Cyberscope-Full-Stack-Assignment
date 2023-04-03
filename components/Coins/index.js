import React from 'react'
import styles from './Coins.module.css'
import Link from 'next/link'

// Destructuring props to display information about a coin
const Coins = ({name, symbol, price, high24h, low24h, priceChange ,id, image}) => {
  return (
    // Rendering a link to the page of a particular coin
   <Link legacyBehavior href='/coin/[id]' as={`/coin/${id}`}>
       <a>
        <div className={styles.coin_container}>
            <div className={styles.coin_row}>
                    <div className={styles.coin}>
                        <img src={image} alt={name} className={styles.coin_img}/>
                        <h1 className={styles.coin_h1}>{name}</h1>
                        <p className={styles.coin_symbol}>{symbol}</p>
                    </div>
                    <div className={styles.coin_data}>
                        <p className={styles.coins_price}>${price.toFixed(5).replace(/\.?0+$/, '')}</p>
                        <p className= {styles.highest24}>${high24h.toFixed(5).replace(/\.?0+$/, '')}</p>
                        <p className= {styles.lowest24}>${low24h.toFixed(5).replace(/\.?0+$/, '')}</p>
                        {/* Displaying the price change percentage in green or red depending on whether it's positive or negative */}
                        {priceChange < 0 ? (
                            <p className={styles.coin_percent_red}>{priceChange.toFixed(2)}%</p>
                        ):(
                            <p className={styles.coin_percent_green}>{priceChange.toFixed(2)}%</p>
                        )}
                    </div>
            </div>

        </div>
       </a> 
   </Link>
  )
}

export default Coins

