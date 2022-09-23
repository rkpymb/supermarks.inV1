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
        <div className={styles.MainMenu}>
          <li>Careers</li>
          <li>Courses</li>  
          <li>Interviews</li>
          <li>Placements</li>
          <li>Projects</li>
          <li>Corporate Training</li>
        </div>
        <div className={styles.spacermobile}></div>
        <div className={styles.NavLeft}>
          <div className={styles.ContactTop}>
            <div className={styles.Contact_icon}>
              <span><IoIosCall /></span>
            </div>
            <div className={styles.Contact_number}>
              <span>+91 9128439221</span>
            </div>
          </div>
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