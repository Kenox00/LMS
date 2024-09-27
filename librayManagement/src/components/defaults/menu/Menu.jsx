import React from "react";
import style from "./Menu.module.css";
import { FaClipboardList, FaBookDead, FaClock, FaSignOutAlt } from 'react-icons/fa'; // Added logout icon

const Menu = () => {
  return (
    <div className={style.menu}>
      <div className={style.menuWrapper}>
        <div className={style.menuItems}>
          <span>
            <h3>Dashboard</h3>
          </span>
        </div>
        <div className={style.menuItems}>
          <FaClipboardList color="#ff00ff" size={20} />
          <span>
            <h3>Categories</h3>
          </span>
        </div>
        <div className={style.menuItems}>
          <FaBookDead color="#ff00ff" size={20} />
          <span>
            <h3>Books Overdue</h3>
          </span>
        </div>
        <div className={style.menuItems}>
          <FaClock color="#ff00ff" size={20} />
          <span>
            <h3>Reservations</h3>
          </span>
        </div>
      </div>
      
      {/* Added icon for the logout button */}
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
