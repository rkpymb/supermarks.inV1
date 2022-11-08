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
          <p>Skillfilt offers industry-relevant advanced courses for finding your dream job.</p>
          <div className={styles.FooterBox_socialIcons}>
            <a href='https://www.facebook.com/Skillfilt' target='_blank' rel="noreferrer">
              <span> <BsFacebook /> </span>
            </a>
            <a href='https://www.instagram.com/Skillfilt' target='_blank' rel="noreferrer">
              <span> <BsInstagram /> </span>
            </a>
            <a href='https://twitter.com/skillfilt' target='_blank' rel="noreferrer">
              <span> <BsTwitter /> </span>
            </a>
            <a href='https://www.linkedin.com/skillfilt' target='_blank' rel="noreferrer">
              <span> <BsLinkedin /> </span>
            </a>
            {/* <a href='/' target='_blank'>
              <span> <BsYoutube /> </span>
            </a> */}
          </div>

        </div>
        <div className={styles.FooterBox_menu}>
          <h3>Our Company</h3>
          {/* <li>News and Events</li> */}
          {/* <li>Blog</li> */}
          {/* <li>Industry reports</li> */}
          <Link href='/Careers'>
            <li>Careers <small>( We are Hiring )</small></li>
          </Link>
          <Link href='/Terms'>
            <li>Terms</li>
          </Link>
          <Link href='/PrivacyPolicy'>
            <li>Privacy Policy</li>
          </Link>
          
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
        <small>© 2022 skillfilt.com All Rights Reserved.</small>
      </div>
    </>
    

  )
}

export default Footer