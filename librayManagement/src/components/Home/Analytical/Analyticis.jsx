import styles from './Analyticis.module.css'

const Analyticis = () => {
  const reservationData = [
    { id: '001', bookName: '1984', author: 'George Orwell', status: 'Pending' },
    { id: '002', bookName: 'To Kill a Mockingbird', author: 'Harper Lee', status: 'Expired' },
  ];

  return (
    <div className={styles.tableContainer}>
      <div className={styles.text}>
        <h3>Reservation</h3>
        <button>view more</button>
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>User ID</th>
            <th>Book Name</th>
            <th>Author</th>
            <th>Reservation status</th>
          </tr>
        </thead>
        <tbody>
          {reservationData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.bookName}</td>
              <td>{item.author}</td>
              <td>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Analyticis
