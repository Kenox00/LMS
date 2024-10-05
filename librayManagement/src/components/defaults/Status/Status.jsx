// Status.jsx
import { useState, useEffect } from "react";
import styles from "./Status.module.css";
import bookIcon from "../../../assets/Images/status/bookIcon.png";
import totalbook from "../../../assets/Images/status/totalBooks.png";
import overdue from "../../../assets/Images/status/overdue.png";
import openedbook from "../../../assets/Images/status/openedBook.png";
import Reservation from "../../Reservation/Reservation";
import TopReaders from "../../TopReaders/TopReaders";
import Cards from "../StatusCards/Cards";

const Status = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [selectedPeriod, setSelectedPeriod] = useState("This week");

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
      year: "numeric",
      month: "short",
      day: "numeric",
      weekday: "short",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };
    return date
      .toLocaleDateString("en-US", options)
      .replace(",", "  |")
      .toUpperCase();
  };

  const handlePeriodChange = (e) => {
    setSelectedPeriod(e.target.value);
  };

  return (
    <div className={styles.maincontainer}>
      <div className={styles.dashboard}>
        <div className={styles.container}>
          <header className={styles.header}>
            <div className={styles.text}>
              <h1>
                Hello, <span className={styles.librarian}>Librarian</span>
              </h1>
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
            <Cards number="122" description="Total Visitors" icon={bookIcon} />
            <Cards number="96" description="Books Borrowed" icon={openedbook} />
            <Cards number="20" description="Books Overdue" icon={overdue} />
            <Cards number="7821" description="Total Books" icon={totalbook} />
          </div>
          <div className={styles.tables}>
            <Reservation />
            <TopReaders />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Status;