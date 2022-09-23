import React from 'react'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import { FiChevronRight } from "react-icons/fi";
const Testserieshome = () => {
  return (
      <div className={styles.Testserieshome}>
          
         
          <div className={styles.TitlebtnBox} >
              <span style={{ color: '#3c4852', fontWeight: '500' }}>Test Series for You, Take a change 😎 </span>
              <div className={styles.Btn_icon} style={{ backgroundColor: 'white', color: '#3c4852' }}>
                  <small>view all</small>
                  <span><FiChevronRight /></span>
              </div>
          </div>
          <div className={styles.TestItemBox}>
             
              <div className={styles.TestItem}>
                  <div
                      style={{
                          position: "relative",
                          width: "100%",
                          height: "200px",
                      }}
                  >
                      <Image src="/img/testcover.jpg" alt="Vercel Logo" layout='fill' objectFit='contain' />
                  </div>
                  <div className={styles.TestText}>
                      <div className={styles.TestTexttitlebox}>
                          <span>Live Test BSEB 12th</span>
                          <small>BSEB , Class 10th</small>
                      </div>
                  
                      <div className={styles.Testfooter}>
                          <span>FREE</span>
                          <div className={styles.Btn_icon}>
                              <small>Participate</small>
                              <span><FiChevronRight /></span>
                          </div>
                      </div>
                      
                  </div>

              </div>
              <div className={styles.TestItem}>
                  <div
                      style={{
                          position: "relative",
                          width: "100%",
                          height: "200px",
                      }}
                  >
                      <Image src="/img/testcover.jpg" alt="Vercel Logo" layout='fill' objectFit='contain' />
                  </div>
                  <div className={styles.TestText}>
                      <div className={styles.TestTexttitlebox}>
                          <span>Live Test BSEB 12th</span>
                          <small>BSEB , Class 10th</small>
                      </div>
                  
                      <div className={styles.Testfooter}>
                          <span>FREE</span>
                          <div className={styles.Btn_icon}>
                              <small>Participate</small>
                              <span><FiChevronRight /></span>
                          </div>
                      </div>
                      
                  </div>

              </div>
              <div className={styles.TestItem}>
                  <div
                      style={{
                          position: "relative",
                          width: "100%",
                          height: "200px",
                      }}
                  >
                      <Image src="/img/testcover.jpg" alt="Vercel Logo" layout='fill' objectFit='contain' />
                  </div>
                  <div className={styles.TestText}>
                      <div className={styles.TestTexttitlebox}>
                          <span>Live Test BSEB 12th</span>
                          <small>BSEB , Class 10th</small>
                      </div>
                  
                      <div className={styles.Testfooter}>
                          <span>FREE</span>
                          <div className={styles.Btn_icon}>
                              <small>Participate</small>
                              <span><FiChevronRight /></span>
                          </div>
                      </div>
                      
                  </div>

              </div>
              <div className={styles.TestItem}>
                  <div
                      style={{
                          position: "relative",
                          width: "100%",
                          height: "200px",
                      }}
                  >
                      <Image src="/img/testcover.jpg" alt="Vercel Logo" layout='fill' objectFit='contain' />
                  </div>
                  <div className={styles.TestText}>
                      <div className={styles.TestTexttitlebox}>
                          <span>Live Test BSEB 12th</span>
                          <small>BSEB , Class 10th</small>
                      </div>
                  
                      <div className={styles.Testfooter}>
                          <span>FREE</span>
                          <div className={styles.Btn_icon}>
                              <small>Participate</small>
                              <span><FiChevronRight /></span>
                          </div>
                      </div>
                      
                  </div>

              </div>
             
              

          </div>
         
      </div>
  )
}

export default Testserieshome
