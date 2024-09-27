// import React from 'react'
import style from './Dashboard.module.css'
import Status from '../defaults/Status/Status'


const Dashboard = () => {
  return (
  <div className={style.dashboard}>
        <Status className={style.status}/>
  </div>
  )
}

export default Dashboard