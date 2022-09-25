import React from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import { BsFacebook, BsInstagram, BsTwitter, BsLinkedin, BsYoutube } from "react-icons/bs";
import { HiLocationMarker, HiPhone, HiOutlineMail } from "react-icons/hi";
const Footer = () => {
  return (
    <>
      <div className={styles.FooterBox}>
        <div className={styles.FooterBox_compnay}>
          <div className={styles.dataspacer}> </div>
          <Link href='/'>
            <div className={styles.logomain}>
              <img src='/img/Skillfiltlogo.png' alt='logo' />
            </div>
          </Link>
          <p>Skillfilt offers industry relevant advanced engineering courses for engineering students by partnering with industry experts.</p>
          <div className={styles.FooterBox_socialIcons}>
            <span> <BsFacebook /> </span>
            <span> <BsInstagram /> </span>
            <span> <BsTwitter /> </span>
            <span> <BsLinkedin /> </span>
            <span> <BsYoutube /> </span>
          </div>

        </div>
        <div className={styles.FooterBox_menu}>
          <h3>Our Company</h3>
          <li>News and Events</li>
          <li>Blog</li>
          <li>Industry reports</li>
          <li>Careers</li>
          <li>Terms</li>
          <li>Privacy Policy</li>
        </div>
        <div className={styles.FooterBox_address}>
          <h3>Contact us</h3>
          <div className={styles.FooterBox_address_item}>
            <span><HiLocationMarker /></span>
            <small> 3rd Floor, Valmiki Nagar, East Coast Road, Thiruvanmiyur, Chennai - 600041.</small>
          </div>
          <div className={styles.FooterBox_address_item}>
            <span><HiPhone /></span>
            <small>+91 9128439221</small>
          </div>
          <div className={styles.FooterBox_address_item}>
            <span><HiOutlineMail /></span>
            <small>info@skillfilt.com</small>
          </div>
          <div className={styles.FooterBox_address_item}>
            <span><HiOutlineMail /></span>
            <small>career@skillfilt.com</small>
          </div>


        </div>
      </div>
      <div className={styles.Bottom_menu}>
        <small>© 2022 Skillfilt Inc. All Rights Reserved.</small>
      </div>
    </>
    

  )
}

export default Footer