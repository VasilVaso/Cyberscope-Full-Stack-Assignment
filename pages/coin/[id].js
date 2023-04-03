import Layout from '../../components/Layout'
import styles from './Coin.module.css'

const Coin = ({coin}) => {
     // Removing any HTML tags from the description text using a regular expression
    const text = coin.description.en
    const cleanText = text.replace(/<.*?>/g, '')
    
  return (
    <Layout>
      <div className={styles.coin_page}>
        <div className={styles.coin_container}>
            <img src={coin.image.large} alt={coin.name} className={styles.coin_image}/>
            <h1 className={styles.coin_name}>{coin.name}</h1>
            
            <table className={styles.price_change}>
                <tbody>
                <tr>
                    <td>Current price:</td>
                    <td>{coin.market_data.current_price.usd.toFixed(5).replace(/\.?0+$/, '')}$</td>
                </tr>
                <tr>
                    <td>Highest price today:</td>
                    <td>{coin.market_data.high_24h.usd.toFixed(5).replace(/\.?0+$/, '')}$</td>
                </tr>
                <tr>
                    <td>Lowest price today:</td>
                    <td>{coin.market_data.low_24h.usd.toFixed(5).replace(/\.?0+$/, '')}$</td>
                </tr>
                <tr>
                    <td>Last 24 hours:</td>
                    <td>{coin.market_data.price_change_percentage_24h.toFixed(2)}%</td>
                </tr>
                <tr>
                    <td>Last 7 days:</td>
                    <td>{coin.market_data.price_change_percentage_7d.toFixed(2)}%</td>
                </tr>
                <tr>
                    <td>Last 14 days:</td>
                    <td>{coin.market_data.price_change_percentage_14d.toFixed(2)}%</td>
                </tr>
                <tr>
                    <td>Last 30 days:</td>
                    <td>{coin.market_data.price_change_percentage_30d.toFixed(2)}%</td>
                </tr>
                <tr>
                    <td>Last 1 month:</td>
                    <td>{coin.market_data.price_change_percentage_60d.toFixed(2)}%</td>
                </tr>
                <tr>
                    <td>Last 2 months:</td>
                    <td>{coin.market_data.price_change_percentage_200d.toFixed(2)}%</td>
                </tr>
                <tr>
                    <td>Last 1 year:</td>
                    <td>{coin.market_data.price_change_percentage_1y.toFixed(2)}%</td>
                </tr>
                </tbody>
            </table>
        </div>
        <div className={styles.description}>
            <h1 className={styles.coin_description}>Coin Description</h1>
            <p className={styles.text}>{cleanText}</p>
         </div>
      </div>
      
    </Layout>
  )
}

export default Coin;

// Defining an async function that fetches data from the Coingecko API and returns it as props
export async function getServerSideProps(context) {

    // Extracting the 'id' query parameter from the context object
    const {id} = context.query

    const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`)

    const data =await res.json()

    return{
        props: {
            coin: data
        }
    }
}