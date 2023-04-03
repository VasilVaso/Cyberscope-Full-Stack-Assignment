import Coins from "./Coins"

//Defining the CoinList functional component which takes in a prop called "filteredCoins"
export default function CoinList({filteredCoins}){
    return (
      //Maps through the "filteredCoins" array and renders a Coins component for each coin in the array
    <>
    {filteredCoins.map(coin => {
        return ( <Coins 
          key={coin.id}
          name={coin.name}
          id={coin.id}
          price={coin.current_price}
          symbol={coin.symbol}
          high24h={coin.high_24h}
          low24h={coin.low_24h}
          priceChange={coin.price_change_percentage_24h}
          image={coin.image}
        />
        )
    })}
    </>
    )
}