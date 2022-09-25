import React from 'react'
import styles from '../styles/Home.module.css'
import { FiChevronRight } from 'react-icons/fi';
const Companylist = () => {
  return (
    <div className={styles.Company_section}>
      <div className={styles.Company_section_a}>
        <h1>Placement Opportunities</h1>
        <span>Skillfilt supports you to get placed in top companies,whether you are trying to start a new career or change your existing one.</span>
        <div style={{ height: '20px' }}> </div>
        <div className={styles.Btn_icon}>
          <small>See more</small>
          <span><FiChevronRight /></span>
        </div>
        <div style={{ height: '20px' }}> </div>
      </div>
      <div className={styles.Company_section_b}>
        <div className={styles.Company_logos}>
          <div className={styles.Company_logo_item}>
            <img src='https://d2oda4j5uueq2i.cloudfront.net/myspace/769/Frame_599-removebg-preview_1649162006.png' alt='imglogo' />
          </div>
          <div className={styles.Company_logo_item}>
            <img src='https://d2oda4j5uueq2i.cloudfront.net/myspace/769/Frame_599-removebg-preview_1649162006.png' alt='imglogo' />
          </div>
          <div className={styles.Company_logo_item}>
            <img src='https://d2oda4j5uueq2i.cloudfront.net/myspace/769/Frame_599-removebg-preview_1649162006.png' alt='imglogo' />
          </div>
          <div className={styles.Company_logo_item}>
            <img src='https://d2oda4j5uueq2i.cloudfront.net/myspace/769/Frame_599-removebg-preview_1649162006.png' alt='imglogo' />
          </div>
          <div className={styles.Company_logo_item}>
            <img src='https://d2oda4j5uueq2i.cloudfront.net/myspace/769/Frame_599-removebg-preview_1649162006.png' alt='imglogo' />
          </div>
          <div className={styles.Company_logo_item}>
            <img src='https://d2oda4j5uueq2i.cloudfront.net/myspace/769/Frame_599-removebg-preview_1649162006.png' alt='imglogo' />
          </div>
          <div className={styles.Company_logo_item}>
            <img src='https://d2oda4j5uueq2i.cloudfront.net/myspace/769/Frame_599-removebg-preview_1649162006.png' alt='imglogo' />
          </div>
          <div className={styles.Company_logo_item}>
            <img src='https://d2oda4j5uueq2i.cloudfront.net/myspace/769/Frame_599-removebg-preview_1649162006.png' alt='imglogo' />
          </div>
        </div>
       
      </div>
    </div>
  )
}

export default Companylist
