import React from 'react'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import { FiChevronRight } from "react-icons/fi";
const Categorieshome = () => {
  return (<>
    <div className={styles.categoryslider}>
      <div className={styles.categoryslider_boxA}>
        <img src='/img/featureimg1.png' alt='imagehero' />
      </div>
      <div className={styles.categoryslider_boxB}>
        <div className={styles.categoryslider_Text}>
          <span>Choose Your Class or Board</span>
          <small>Get exam-ready with concepts, questions and study notes as per the latest pattern</small>
        </div>
        <div style={{ height: '30px' }}> </div>
        <div className={styles.TitlebtnBox} >
          <span>Choose from Boards :</span>
          <div className={styles.Btn_icon} style={{ backgroundColor: 'white', color: '#3c4852' }}>
            <small>view all</small>
            <span><FiChevronRight /></span>
          </div>
        </div>
        <div className={styles.categoryItemBox}>
          <div className={styles.categoryItem}>
            <div className={styles.catItemImg}>
              <Image src="/img/bseb.jpg" alt="Vercel Logo" width={30} height={30} />
            </div>
            <div className={styles.catItemText}>
              <span>Bihar Board</span>
            </div>

          </div>
          <div className={styles.categoryItem}>
            <div className={styles.catItemImg}>
              <Image src="/img/bseb.jpg" alt="Vercel Logo" width={30} height={30} />
            </div>
            <div className={styles.catItemText}>
              <span>Bihar Board</span>
            </div>

          </div>
          <div className={styles.categoryItem}>
            <div className={styles.catItemImg}>
              <Image src="/img/bseb.jpg" alt="Vercel Logo" width={30} height={30} />
            </div>
            <div className={styles.catItemText}>
              <span>Bihar Board</span>
            </div>

          </div>
          <div className={styles.categoryItem}>
            <div className={styles.catItemImg}>
              <Image src="/img/bseb.jpg" alt="Vercel Logo" width={30} height={30} />
            </div>
            <div className={styles.catItemText}>
              <span>Bihar Board</span>
            </div>

          </div>

        </div>
        <div style={{ height: '30px' }}> </div>
        <div className={styles.TitlebtnBox} >
          <span>Choose from Classes :</span>
          <div className={styles.Btn_icon} style={{ backgroundColor: 'white', color: '#3c4852' }}>
            <small>view all</small>
            <span><FiChevronRight /></span>
          </div>
        </div>
        <div className={styles.categoryItemBox}>
          <div className={styles.categoryItem}>
            <div className={styles.catItemImg}>
              <Image src="/img/bseb.jpg" alt="Vercel Logo" width={30} height={30} />
            </div>
            <div className={styles.catItemText}>
              <span>Bihar Board</span>
            </div>

          </div>
          <div className={styles.categoryItem}>
            <div className={styles.catItemImg}>
              <Image src="/img/bseb.jpg" alt="Vercel Logo" width={30} height={30} />
            </div>
            <div className={styles.catItemText}>
              <span>Bihar Board</span>
            </div>

          </div>
          <div className={styles.categoryItem}>
            <div className={styles.catItemImg}>
              <Image src="/img/bseb.jpg" alt="Vercel Logo" width={30} height={30} />
            </div>
            <div className={styles.catItemText}>
              <span>Bihar Board</span>
            </div>

          </div>
          <div className={styles.categoryItem}>
            <div className={styles.catItemImg}>
              <Image src="/img/bseb.jpg" alt="Vercel Logo" width={30} height={30} />
            </div>
            <div className={styles.catItemText}>
              <span>Bihar Board</span>
            </div>

          </div>

        </div>
      </div>
    </div>
  </>
  )
}

export default Categorieshome