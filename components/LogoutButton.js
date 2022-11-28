import React from 'react'
import { FiLogOut } from "react-icons/fi";
import styles from '../styles/Home.module.css'
const LogoutButton = () => {

    const LogutNow = () => {
        console.log("Logout click")
        // localStorage.clear();
    };

  return (
      <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'left', alignItems: 'center', margin: '5px' }}>
          <div className={styles.loginbtnTop} style={{ backgroundColor: 'red' }} onClick={LogutNow()}>
              <span><FiLogOut /></span>
              <small>Logout</small>
          </div>
      </div>
  )
}

export default LogoutButton
