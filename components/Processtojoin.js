import React from 'react'
import styles from '../styles/Home.module.css'
import { FiChevronRight } from 'react-icons/fi';
const Processtojoin = () => {
    return (
        <div className={styles.Processtojoin}>
            <h1>How to get there?</h1>
            <div className={styles.ProcessItemBox}>
                <div className={styles.ProcessItem}>
                    <img src='img/presentation.png' />
                    <span>Enroll</span>
                    <small>Enroll in a PG program, it takes 8 to 12 months to complete it.</small>
                </div>
                <div className={styles.ProcessItem}>
                    <img src='img/computer.png' />
                    <span>Learn</span>
                    <small>Learn from pre-recorded videos and get support when you are stuck.</small>
                </div>
                <div className={styles.ProcessItem}>
                    <img src='img/speech.png' />
                    <span>Finish</span>
                    <small>Build your Skill-Lync profile by completing the projects.</small>
                </div>
                <div className={styles.ProcessItem}>
                    <img src='img/job.png' />
                    <span>Get Hired</span>
                    <small>Complete the course, pass the assessments & get the interviews!</small>
                </div>
            </div>
        </div>
    )
}

export default Processtojoin
