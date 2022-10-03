import React from 'react'
import { FiChevronRight } from 'react-icons/fi';
import CounsellingForm from '../components/CounsellingForm'
import styles from '../styles/Home.module.css'
const Herobox = () => {
    return (
        <>
            <div className={styles.herobox}>
                <div className={styles.heroboxleft}>
                    <h1>One Destination for
                        Get your Dream Job </h1>
                    <span>Take a Free Careers Counseling</span>
                    <div style={{ height: '20px' }}> </div>
                    <CounsellingForm />
                   
                </div>
                <div className={styles.heroboxright}>
                    <img src='/img/girlhero.png' alt='imagehero' />
                </div>
            </div>
            <div className={styles.HeroCountBox}>
                <div className={styles.herobox_counter}>
                    <div className={styles.herobox_counter_item}>
                        <img src='/img/trophy.png' alt='imagehero' width='50px' />
                        <span>Job Guarantee*</span>
                    </div>
                    <div className={styles.herobox_counter_item}>
                        <img src='/img/testd.png' alt='imagehero' width='50px' />
                        <span>Career Mentoring and Interview Prepration</span>
                    </div>
                    <div className={styles.herobox_counter_item}>
                        <img src='/img/analysis.png' alt='imagehero' width='50px' />
                        <span>Maximum Salary hike*</span>
                    </div>
                    <div className={styles.herobox_counter_item}>
                        <img src='/img/shield.png' alt='imagehero' width='50px' />
                        <span>200+ Hiring Partners</span>
                    </div>

                </div>
            </div>

        </>

    )
}

export default Herobox
