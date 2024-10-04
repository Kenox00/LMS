import Issued from './Issued/Issued'
import Analyticis from '../Analytical/Analyticis'
import styles from './BookIssued.module.css'

const BookIssued = () => {
  return (
    <div className={styles.container}>
    <Issued/>
    <Analyticis/>
    </div>
  )
}

export default BookIssued