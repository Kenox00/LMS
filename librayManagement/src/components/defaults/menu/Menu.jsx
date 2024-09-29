
import style from "./Menu.module.css";
import { FaClipboardList, FaBookDead, FaClock, FaSignOutAlt } from 'react-icons/fa'; // Added logout icon
import home from "../../../assets/Images/Menu/home.png"
import books from "../../../assets/Images/Menu/books.png";
import overdue from "../../../assets/Images/Menu/overdue.png";
import reservation from "../../../assets/Images/Menu/reservation.png";

const Menu = () => {
  return (
    <div className={style.menu}>
      <div className={style.menuWrapper}>
        <div className={style.menuItems}>
           <img src={home} alt="home" />
          <span>
            <h3><a href="">Home</a> </h3>
          </span>
        </div>
        <div className={style.menuItems}>
         <img src={books} alt="books" />
          <span>
          <h3><a href="">Books</a> </h3>
          </span>
        </div>
        <div className={style.menuItems}>
         <img src={overdue} alt="overdue" />
          <span>
          <h3><a href="">Overdue Books</a> </h3>
          </span>
        </div>
        <div className={style.menuItems}>
        <img src={reservation} alt="reservation" />
          <span>
          <h3><a href="">Reservation</a> </h3>
          </span>
        </div>
      </div>
      
    
      <div className={style.menuLogout}>
        <FaSignOutAlt color="#ff0000" size={20} /> 
        <span>
          <h3>Log Out</h3>
        </span>
      </div>
    </div>
  );
};

export default Menu;
