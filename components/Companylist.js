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
            <img src='https://aitechnolog.com/skillfilt/Storage/img/all/byjus.png' alt='imglogo' />
          </div>
          <div className={styles.Company_logo_item}>
            <img src='https://aitechnolog.com/skillfilt/Storage/img/all/amazon.png' alt='imglogo' />
          </div>
          <div className={styles.Company_logo_item}>
            <img src='https://aitechnolog.com/skillfilt/Storage/img/all/utkarshbank.png' alt='imglogo' />
          </div>
          <div className={styles.Company_logo_item}>
            <img src='https://aitechnolog.com/skillfilt/Storage/img/all/icici.png' alt='imglogo' />
          </div>
          <div className={styles.Company_logo_item}>
            <img src='https://aitechnolog.com/skillfilt/Storage/img/all/hdfc.png' alt='imglogo' />
          </div>
          <div className={styles.Company_logo_item}>
            <img src='https://aitechnolog.com/skillfilt/Storage/img/all/dlf.png' alt='imglogo' />
          </div>
          <div className={styles.Company_logo_item}>
            <img src='https://aitechnolog.com/skillfilt/Storage/img/all/muthoot.png' alt='imglogo' />
          </div>
          <div className={styles.Company_logo_item}>
            <img src='https://aitechnolog.com/skillfilt/Storage/img/all/zomato.png' alt='imglogo' />
          </div>
          
         
        </div>
       
      </div>
    </div>
  )
}

export default Companylist
