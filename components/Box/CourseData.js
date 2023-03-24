import React from 'react'
import styles from '../../styles/Home.module.css'
const CourseData = ({ CourseHtml }) => {
    // console.log(CourseHtml)
  return (
      <div>
          <span dangerouslySetInnerHTML={{ __html: CourseHtml }}>
          </span>
      
    </div>
  )
}

export default CourseData
