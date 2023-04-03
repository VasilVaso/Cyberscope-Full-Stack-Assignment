import styles from './TitleBar.module.css'

const TitleBar = () => {
  return (
    <div className={styles.row}>
        <div className={styles.title}>Name</div>
        <div className={styles.title}>Symbol</div>
        <div className={styles.title}>Price Now</div>
        <div className={styles.title}>Highest Today</div>
        <div className={styles.title}>Lowest Today</div>
        <div className={styles.title}>Change Today</div>
    </div>
  )
}

export default TitleBar