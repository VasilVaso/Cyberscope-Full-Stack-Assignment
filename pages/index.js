// Importing necessary components
import SearchBar from '../components/SearchBar'
import CoinList from '../components/CoinList.js'
import Layout from '../components/Layout'
import TitleBar from '../components/TitleBar'
import { useState} from 'react'
import Pagination from '../components/Pagination/Pagination'
import {paginate} from '../components/Pagination/Pagination'
import Image from 'next/image'
import image from '../images/429.png'


// Defining the Home component and passing in filteredCoins as a prop
export default function Home({filteredCoins}) {
  try{

    // Setting up state using the useState hook to manage search input and current page
    const [search, setSearch] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const pageSize = 10
    
    // Defining a handleChange function to update search state when search input changes
    const handleChange = e => {
        e.preventDefault()
        setSearch(e.target.value.toLowerCase())
        setCurrentPage(1)
    }

    // Filtering the coins based on search input and pagination
    const allCoins = filteredCoins.filter(coin =>
      coin.name.toLowerCase().includes(search.toLowerCase())
    )
    const paginatedPosts = paginate(allCoins, currentPage, pageSize);

    // Defining an onPageChange function to update the current page when pagination is changed
    const onPageChange = (page) => {
      setCurrentPage(page)
    }
    
    // Returning JSX for the Home component, including all necessary components and passing in props
    return (
      <Layout>
        <div className="coin_app">
          <SearchBar type="text" placeholder="Search" onChange={handleChange}/>
          <TitleBar/>
          <CoinList filteredCoins={paginatedPosts}/>
        </div>
        <Pagination
          items={allCoins.length}
          currentPage={currentPage}
          pageSize={pageSize}
          onPageChange={onPageChange}
        />
      </Layout>
      
    )
  }
  //Catching an error when our public API exceeds the limit of 10-30 calls/minute
  catch{
    return (
      <Layout>
        <div className="coin_app">
          <Image src={image} alt="error 429" />
        </div>
    </Layout>
      
    )
  }
}

// Exporting getServerSideProps function to fetch data from API before rendering the page 
export const getServerSideProps = async () =>{
  
  const res = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=10&sparkline=false&locale=en")
  const filteredCoins = await res.json()

  return {
    props: {
      filteredCoins  
    }
  }
}


