import styles from './Pagination.module.css'

// Define Pagination component as a function that receives props
const Pagination = ({ items, pageSize, currentPage, onPageChange}) => {
    
    // Calculate the number of pages based on the items and page size
    const pagesCount = Math.ceil(items / pageSize)
    
    // If there is only one page, do not display the pagination
    if (pagesCount === 1) return null

    // Create an array of page numbers to display in the pagination
    const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);

  return (
    <div className={styles.container}>
     <ul className={styles.pagination}>
      {/* Rendering a list of page numbers as clickable links */}
       {pages.map((page) => (
         <li
           key={page}
           className={
             page === currentPage ? styles.pageItemActive : styles.pageItem
           }
         >
           <a className={styles.pageLink} onClick={() => onPageChange(page)}>
             {page}
           </a>
         </li>
       ))}
     </ul>
   </div>
  )
}

export default Pagination

// Export the paginate function that receives items, page number and page size and returns a sliced array of items
export const paginate = (items, pageNumber, pageSize) => {
  const startIndex = (pageNumber - 1) * pageSize;
  return items.slice(startIndex, startIndex + pageSize);
 };