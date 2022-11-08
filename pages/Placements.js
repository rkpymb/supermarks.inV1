import React from 'react'
import styles from '../styles/Home.module.css'
import Caterorieshome from '../components/Caterorieshome'
import CourseHomelist from '../components/CourseHomelist'
const Placements = () => {
  return (
      <>
          <div className={styles.container}>
              <div style={{ height: '30px' }}> </div>
              <Caterorieshome />
              <CourseHomelist />
              <div style={{ height: '100px' }}> </div>
          </div>
          
    </>
  )
}

export default Placements
