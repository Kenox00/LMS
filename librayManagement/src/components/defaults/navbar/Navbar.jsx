import React from 'react'
import style from './Navbar.module.css'
import Logo from '../../../assets/Images/logo.png'
import profile from '../../../assets/Images/profile.jpg'
import { Notifications, Search } from '@mui/icons-material';

const Navbar = () => {
  return (
    <div className={style.navbar}>
        <div className={style.logo}>
            <span>
             <img src={Logo} alt="logo" />        
            </span>
            <h2>DOHO Libray</h2>
        
        </div>
        <div className={style.search}>
            <input type="text" placeholder='Search' className={style.searchInput} />
            <Search className={style.searchIcon} />    
        </div>
        <div className={style.notification}>
          <Notifications className={style.notificationIcon} />
        </div>
        <div className={style.profile}>
            <span>
              <img src={profile} alt="" className={style.profileImage} />     
            </span>
         

        </div>
    </div>
  )
}

export default Navbar

