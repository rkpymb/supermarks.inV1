import { useState, useEffect, useContext } from 'react';
import Image from 'next/image'
import CheckloginContext from '../context/auth/CheckloginContext'
import styles from '../styles/Home.module.css'
import { AiOutlineLogin } from 'react-icons/ai';
import { VscAccount } from "react-icons/vsc";
import { IoIosCall } from "react-icons/io";
import { GrPowerShutdown } from "react-icons/gr";
import Link from 'next/link';

const Navbar = (props) => {
  const Contextdata = useContext(CheckloginContext)
  return (
    <div className={styles.navbarBox}>
      <div className={styles.Navbar}>
       
        <div className={styles.logo}>
          <Link href='/'>
            <div className={styles.logomain}>
              <img src='/logomain.png' alt='logo' />
            </div>
          </Link>
        </div>
       
        <div className={styles.spacermobile}></div>
        <div className={styles.NavLeft}>
          {/* <div className={styles.MainMenu}>
            
            <Link href='/Tests'>
              <li>Tests Series</li>
            </Link>
          </div> */}
      
          {!Contextdata.IsLogin && (
            <Link href='Login'>
              <div className={styles.loginbtnTop}>
                <span><AiOutlineLogin /></span>
                <small>Login</small>
              </div>
            </Link>

          )}
          {Contextdata.IsLogin && (
           
            <div className={styles.loginbtnTop} onClick={props.LogutNow}>
                <span><GrPowerShutdown /></span>
                <small>Logout</small>
              </div>
            

          )}
         

        </div>
      </div>
    </div >
  )
}

export default Navbar