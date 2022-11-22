import { useState, useEffect, useContext } from 'react';
import Image from 'next/image'
import CheckloginContext from '../context/auth/CheckloginContext'
import styles from '../styles/Home.module.css'
import { AiOutlineLogin } from 'react-icons/ai';
import { VscAccount } from "react-icons/vsc";
import { IoIosCall } from "react-icons/io";
import { BiMenuAltLeft } from "react-icons/bi";
import Link from 'next/link';

const Navbar = (props) => {
  const Contextdata = useContext(CheckloginContext)
  return (
    <div className={styles.navbarBox}>
      <div className={styles.Navbar}>
        <div className={styles.MobileMenuBtn}>
          <span><BiMenuAltLeft /></span>
        </div>
        <div className={styles.logo}>
          <Link href='/'>
            <div className={styles.logomain}>
              <img src='/logonew.png' alt='logo' />
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
          <div className={styles.ContactTop}>
            <div className={styles.Contact_icon}>
              <span><IoIosCall /></span>
            </div>
            <div className={styles.Contact_number}>
              
              <span>+91 9661113102</span>
            </div>
          </div>
          {!Contextdata.IsLogin && (
            <Link href='Login'>
              <div className={styles.loginbtnTop}>
                <span><AiOutlineLogin /></span>
                <small>Login</small>
              </div>
            </Link>

          )}
          {Contextdata.IsLogin && (
            <Link href='Dashboard'>
              <div className={styles.loginbtnTop}>
                <span><VscAccount /></span>
                <small>Dashboard</small>
              </div>
            </Link>

          )}
         

        </div>
      </div>
    </div >
  )
}

export default Navbar