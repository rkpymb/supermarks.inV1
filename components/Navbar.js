import React from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { AiOutlineLogin } from 'react-icons/ai';
import { VscAccount } from "react-icons/vsc";
import Link from 'next/link';

const Navbar = (props) => {

  return (
    <div className={styles.navbarBox}>
      <div className={styles.Navbar}>
        <div className={styles.logo}>
          <Link href='/'>
            <div className={styles.logomain}>
              <img src='/img/Skillfiltlogo.png' alt='logo' />
            </div>
          </Link>
       
      </div>
      <div className={styles.MainMenu}>
        <li>Test Series</li>
        <li>Courses</li>
        <li>Study Materials</li>
        <li>Books</li>
      </div>
      <div className={styles.NavLeft}>
        {!props.userlogst && (
          <div className={styles.loginbtnTop} onClick={props.handleOpen}>
            <span><AiOutlineLogin /></span>
            <small>Login</small>
          </div>

        )}
        {props.userlogst && (
          <Link href='/Dashboard'>
            <div className={styles.ProfileTop}>
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