import Head from 'next/head'
import Link from 'next/link'

 // Defining a functional component named Layout that takes two props, children and title
const Layout = ({children, title= "Crypto Stats"}) =>{
    return(
        <div className="layout">
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header className="header">
             <Link legacyBehavior href="/" passHref>
                <a>
                    <h1 className='title'>Crypto Stats</h1>
                    <svg className="coin_logo" width="80" height="90" viewBox="0 0 80 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 27.6461C0 23.9722 1.9565 20.5286 5.1381 18.6775L34.8619 1.383C38.0191 -0.453901 41.9565 -0.468101 45.1381 1.383L74.8619 18.6775C78.0191 20.5145 80 23.9438 80 27.6461V62.235C80 65.9089 78.0435 69.3524 74.8619 71.2036L45.1381 88.498C41.9809 90.335 38.0435 90.349 34.8619 88.498L5.1381 71.2036C1.9809 69.3666 0 65.9373 0 62.235V27.6461ZM35.2152 18.7036C38.1975 20.4388 41.8249 20.4257 44.7848 18.7036L40 21.4875L35.2152 18.7036ZM60.1542 33.214L40 21.4875L19.8458 33.214V27.6461C19.8458 31.0904 18.0433 34.2628 15.0609 35.998L19.8458 33.214V56.667L15.0609 53.883C18.0208 55.6052 19.8458 58.7645 19.8458 62.235V56.667L40 68.3935L35.2152 71.1775C38.1751 69.4553 41.8025 69.4423 44.7848 71.1775L40 68.3935L60.1542 56.667V62.235C60.1542 58.7907 61.9567 55.6183 64.9391 53.883L60.1542 56.667V33.214ZM60.1542 33.214L64.9391 35.998C61.9792 34.2758 60.1542 31.1165 60.1542 27.6461V33.214Z" fill="#979797"/>
                    </svg>
                </a>
            </Link>
            </header>
            <main>{children}</main>
        </div>
        )
}

export default Layout