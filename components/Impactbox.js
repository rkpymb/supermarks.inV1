import React from 'react'
import styles from '../styles/Home.module.css'
import Placementsliders from './Placementsliders'
const Impactbox = () => {
  return (
    <div>
      <div className={styles.dataspacer}> </div>
      <div className={styles.centeritem} >
        <div><h1 style={{ margin: '0' }}>Meet our Scholars</h1></div>
        <div> <span><span className={styles.Skillfiltname}>SKILLFILT</span> has helped candidates secure over 60 crore worth of jobs in top companies</span></div>
        <div> </div>

      </div>
      <Placementsliders/>

    </div>
  )
}

export default Impactbox