import React from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import { ShortAbout, AppName, SocialHandles, Contactinfo, DomainURL } from '../Data/config'
import { BsFacebook, BsInstagram, BsTwitter, BsLinkedin, BsYoutube } from "react-icons/bs";
import { HiLocationMarker, HiPhone, HiOutlineMail } from "react-icons/hi";
const Footer = () => {
  return (
    <>
      <div className={styles.FooterBox}>
        <div className={styles.FooterBox_compnay}>
          <div className={styles.dataspacer}> </div>
          <Link href='/' style={{ textDecoration: 'none' }}>
            <div className={styles.logomain}>
              <img src='/logo/dritlogomain.svg' alt='logo' className={styles.NavLogo} />
            </div>
          </Link>
          <p>{AppName} {ShortAbout}</p>
          <div className={styles.FooterBox_socialIcons}>
            <a href={SocialHandles.Facebook} target='_blank' rel="noreferrer">
              <span> <BsFacebook /> </span>
            </a>
            <a href={SocialHandles.Instagram} target='_blank' rel="noreferrer">
              <span> <BsInstagram /> </span>
            </a>
            <a href={SocialHandles.Twitter} target='_blank' rel="noreferrer">
              <span> <BsTwitter /> </span>
            </a>
            <a href={SocialHandles.Linkedin} target='_blank' rel="noreferrer">
              <span> <BsLinkedin /> </span>
            </a>
            {/* <a href='/' target='_blank'>
              <span> <BsYoutube /> </span>
            </a> */}
          </div>

        </div>
        <div className={styles.FooterBox_menu}>
          <h3>Important Links</h3>
          <Link href='/AllCourses' style={{ textDecoration: 'none',color:'white' }}>
            <li>Courses </li>
          </Link>
          <Link href='/Dashboard' style={{ textDecoration: 'none',color:'white' }}>
            <li>My Dashboard </li>
          </Link>
          <Link href='/Aboutus' style={{ textDecoration: 'none',color:'white' }}>
            <li>About us </li>
          </Link>
          <Link href='/Contact' style={{ textDecoration: 'none',color:'white' }}>
            <li>Contact us </li>
          </Link>
          <Link href='/Privacypolicy' style={{ textDecoration: 'none',color:'white' }}>
            <li>Privacy Policy </li>
          </Link>
          <Link href='/TermsConsitions' style={{ textDecoration: 'none',color:'white' }}>
            <li>Terms & Conditions </li>
          </Link>
          <Link href='/Pricing' style={{ textDecoration: 'none',color:'white' }}>
            <li>Pricing </li>
          </Link>
          <Link href='/RefundPolicy' style={{ textDecoration: 'none',color:'white' }}>
            <li>Refund Policy </li>
          </Link>
          <Link href='/ShippingandDelivery' style={{ textDecoration: 'none',color:'white' }}>
            <li>Shipping and Delivery </li>
          </Link>
         
        </div>
        <div className={styles.FooterBox_menu}>
          <h3>Institute Links</h3>
          
          <Link href='https://erp.driteducation.com/students/login' style={{ textDecoration: 'none',color:'white' }}>
            <li>Student Login </li>
          </Link>
          <Link href='https://erp.driteducation.com/centers/login' style={{ textDecoration: 'none',color:'white' }}>
            <li>Center Login </li>
          </Link>
          <Link href='https://erp.driteducation.com/verification/studentdocsverification' style={{ textDecoration: 'none',color:'white' }}>
            <li>Certificate Verification </li>
          </Link>
          <Link href='https://erp.driteducation.com/verification/centerverification' style={{ textDecoration: 'none',color:'white' }}>
            <li>Branch Verification </li>
          </Link>
          
        </div>
        <div className={styles.FooterBox_address}>
          <h3>Contact us</h3>
          <div className={styles.FooterBox_address_item}>
            <span><HiLocationMarker /></span>
            <small> {Contactinfo.MainAddress}</small>
          </div>
          <div className={styles.FooterBox_address_item}>
            <span><HiPhone /></span>
            <small>{Contactinfo.MainMobile}</small>
          </div>
          <div className={styles.FooterBox_address_item}>
            <span><HiOutlineMail /></span>
            <small>{Contactinfo.ContactEmail}</small>
          </div>
          


        </div>
      </div>
      <div className={styles.Bottom_menu}>
        <small>© 2022 {DomainURL} All Rights Reserved.</small>
      </div>
    </>
    

  )
}

export default Footer