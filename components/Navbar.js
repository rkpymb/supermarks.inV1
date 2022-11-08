import React from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { AiOutlineLogin } from 'react-icons/ai';
import { VscAccount } from "react-icons/vsc";
import { IoIosCall } from "react-icons/io";
import { BiMenuAltLeft } from "react-icons/bi";
import Link from 'next/link';

const Navbar = (props) => {

  return (
    <div className={styles.navbarBox}>
      <div className={styles.Navbar}>
        <div className={styles.MobileMenuBtn}>
          <span><BiMenuAltLeft /></span>
        </div>
        <div className={styles.logo}>
          <Link href='/'>
            <div className={styles.logomain}>
              <img src='/img/Skillfiltlogo.png' alt='logo' />
            </div>
          </Link>
        </div>
       
        <div className={styles.spacermobile}></div>
        <div className={styles.NavLeft}>
          <div className={styles.MainMenu}>
            <Link href='/Courses'>
              <li>Courses</li>
            </Link>
            {/* <Link href='/Placements'>
              <li>Placements</li>
            </Link> */}
            <Link href='/Careers'>
              <li>Careers</li>
            </Link>
          </div>
          <div className={styles.ContactTop}>
            <div className={styles.Contact_icon}>
              <span><IoIosCall /></span>
            </div>
            <div className={styles.Contact_number}>
              <span>+91 9128439221</span>
            </div>
          </div>
          {!props.userlogst && (
            <Link href='Login'>
              <div className={styles.loginbtnTop}>
                <span><AiOutlineLogin /></span>
                <small>Login</small>
              </div>
            </Link>

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