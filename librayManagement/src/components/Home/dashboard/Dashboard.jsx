// import React from 'react'
import style from './Dashboard.module.css'
import Status from '../../defaults/Status/Status'
import TopChoices from '../Topchoices/TopChoices'
import Overdue from '../Overdue/Overdue'
import BookIssued from '../../BookIssued/BookIssued'


const Dashboard = () => {
  return (
  <div className={style.dashboard}>
        <Status className={style.status}/>
        <TopChoices/>
        <Overdue/>
        <BookIssued/>
  </div>
  )
}

export default Dashboard