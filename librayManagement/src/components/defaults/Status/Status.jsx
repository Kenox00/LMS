// Status.jsx
import {useState, useEffect } from 'react';
import styles from './Status.module.css';
import bookIcon from '../../../assets/Images/status/bookIcon.png';
import totalbook from '../../../assets/Images/status/totalBooks.png'
import overdue from '../../../assets/Images/status/overdue.png'
import openedbook from '../../../assets/Images/status/openedBook.png'




const Status = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [selectedPeriod, setSelectedPeriod] = useState('This week');
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const formatDate = (date) => {
    const options = { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric', 
      weekday: 'short',
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true
    };
    return date.toLocaleDateString('en-US', options).replace(',', '  |').toUpperCase();
  };

  const handlePeriodChange = (e) => {
    setSelectedPeriod(e.target.value);
  };

  return (
    <div className={styles.dashboard}>
      <div className = {styles.container}>
      <header className={styles.header}>
        <div className={styles.text}>
          <h1>Hello, <span className={styles.librarian}>Librarian</span></h1>
        <p className={styles.date}>{formatDate(currentDateTime)}</p>
        </div>
        
          <div className={styles.dropdown}>
            <select value={selectedPeriod} onChange={handlePeriodChange}>
              <option value="This week">This week</option>
              <option value="2 weeks">2 weeks</option>
              <option value="This month">This month</option>
            </select>
          </div>
      </header>
      <div className={styles.stats}>
        <div className={styles.statCard}>
          
          <div className={styles.statInfo}>
            <h2>122</h2>
            <p>Total Visitors</p>
          </div>
          <div className={styles.statIcon}>
            <img src={bookIcon}/>
          </div>
        </div>
        <div className={styles.statCard}>
          
          <div className={styles.statInfo}>
            <h2>96</h2>
            <p>Books Borrowed</p>
          </div>
          <div className={styles.statIcon}>
            <img src={openedbook}/>
          </div>
        </div>
        <div className={styles.statCard}>
         
          <div className={styles.statInfo}>
            <h2>20</h2>
            <p>Books Overdue</p>
          </div> 
          <div className={styles.statIcon}>
            <img src= {overdue}/>
          </div>
        </div>
        <div className={styles.statCard}>
          
          <div className={styles.statInfo}>
            <h2>7821</h2>
            <p>Total Books</p>
          </div>
          <div className={styles.statIcon}>
            <img src={totalbook}/>
          </div>
        </div>
      </div>
      <div className={styles.tables}>
        <div className={styles.tableContainer}>
          <h3>Reservations</h3>
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
              <tr>
                <td>001</td>
                <td>1984</td>
                <td>George Orwell</td>
                <td>Pending</td>
              </tr>
              <tr>
                <td>002</td>
                <td>To Kill a Mockingbird</td>
                <td>Harper Lee</td>
                <td>Expired</td>
              </tr>
            </tbody>
          </table>
          <a href="#" className={styles.viewMore}>View More</a>
        </div>
        <div className={styles.tableContainer}>
          <h3>Top Readers</h3>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Rank</th>
                <th>User Name</th>
                <th>Books Read</th>
                <th>Books Borrowed</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>001</td>
                <td>John Doe</td>
                <td>12</td>
                <td>15</td>
              </tr>
              <tr>
                <td>002</td>
                <td>Jane Smith</td>
                <td>11</td>
                <td>13</td>
              </tr>
            </tbody>
          </table>
          <a href="#" className={styles.viewMore}>View More</a>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Status;