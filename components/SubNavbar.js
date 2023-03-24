import React from 'react'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { useRouter, Router } from 'next/router'
import styles from '../styles/Home.module.css'
import { AiOutlineLogin } from 'react-icons/ai';
import { VscAccount } from "react-icons/vsc";
import { IoIosCall } from "react-icons/io";
import { BiMenuAltLeft } from "react-icons/bi";
import Link from 'next/link';
import Dashboardmenu from './Dashboardmenu'
const Navbar = (props) => {

  const router = useRouter()
  // console.log(props.userlogData)
  useEffect(() => {
    try {
      if (localStorage.getItem('userid')) {
        const usermobnow = localStorage.getItem('userid');
        // console.log('login' + usermobnow)
      } else {
        router.push('/')
      }
    } catch (error) {
      console.error(error)
      // localStorage.clear()
    }
    // check login credential end

  }, [router.query]);

  return (
    <div className={styles.container}>
      <div className={styles.navbarBox_Sub}>
        <div className={styles.Navbar_Sub}>

          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Link href='/'>
              <div >
                <img src='/logo/dritlogomain.svg' alt='logo' width='80px' />
              </div>

            </Link>

          </div>

          <div className={styles.spacermobile}></div>
          <div className={styles.NavLeft}>

            <Link href='/Dashboard'>
              <div className={styles.ProfileTop}>
                <span><VscAccount /></span>
                <small>Logout</small>
              </div>
            </Link>
          </div>
        </div>
      </div >
    
    <Dashboardmenu/>
    </div>
   
  )
}

export default Navbar