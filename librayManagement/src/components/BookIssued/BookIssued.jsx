import Issued from './Issued/Issued'
import styles from './BookIssued.module.css'
import Analytics from '../Home/Analytical/Analyticis'

const BookIssued = () => {
  const datasets = [
    { data: [100, 200, 300, 400, 500], borderColor: "blue" },
    { data: [150, 250, 350, 450, 550], borderColor: "pink" },
  ];
  const labels = ["Jan", "Feb", "Mar", "Apr", "May"];

  const handleButtonClick = () => {
    alert("View Analytics clicked!");
  };
  return (
    <div className={styles.container}>
    <Issued/>
    <Analytics
      datasets={datasets}
      labels={labels}
      title="Monthly Data"
      onButtonClick={handleButtonClick}
    />
    </div>
  )
}

export default BookIssued