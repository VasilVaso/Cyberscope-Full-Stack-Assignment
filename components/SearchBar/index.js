import styles from './Search.module.css'

//The rest parameter allows passing any additional props to the input field that are not explicitly defined in the component.
const SearchBar = ({...rest}) => {
  return (
    <div className={styles.coin_search}>
      <input className={styles.coin_input} {...rest}/>
    </div>
  )
}

export default SearchBar