import React from 'react'
import { FiChevronRight } from 'react-icons/fi';
import styles from '../styles/Home.module.css'
const Herobox = () => {
    return (
        <>
            <div className={styles.herobox}>
                <div className={styles.heroboxleft}>
                    <h1>One Destination for
                        Complete Board Exam Preparation</h1>
                    <span>Take a Free Test to analyze your preparation</span>
                    <div style={{ height: '30px' }}> </div>
                    <div className={styles.Btn_icon}>
                        <small>Take a Free Test Today</small>
                        <span><FiChevronRight /></span>
                    </div>
                </div>
                <div className={styles.heroboxright}>
                    <img src='/img/img3.png' alt='imagehero' />
                </div>
            </div>
            <div className={styles.herobox_counter}>
                <div className={styles.herobox_counter_item}>
                    <img src='/img/trophy.png' alt='imagehero' width='50px' />
                    <span>All India
                        Rank</span>
                </div>
                <div className={styles.herobox_counter_item}>
                    <img src='/img/testd.png' alt='imagehero' width='50px' />
                    <span>Latest Exam
                        Patterns</span>
                </div>
                <div className={styles.herobox_counter_item}>
                    <img src='/img/analysis.png' alt='imagehero' width='50px' />
                    <span>Performance Analysis</span>
                </div>
                <div className={styles.herobox_counter_item}>
                    <img src='/img/shield.png' alt='imagehero' width='50px' />
                    <span>Personal Assistance</span>
                </div>

            </div>

        </>

    )
}

export default Herobox
