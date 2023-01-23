import React from 'react'
import styles from '../../styles/Home.module.css'
import Image from 'next/image'
const CounterBox = () => {
    return (
        <>
        

            <div className={styles.Countbox}>
                <div className={styles.CountboxItem} style={{ backgroundColor: '#efecff' }}>
                    <div className={styles.CountboxItemText}>
                        <small>Best Online
                            Tutoring</small>
                        <span>900+</span>
                    </div>
                    <div className={styles.CountboxItemImg}>
                        <Image src='https://aitechnolog.com/skillfilt/Storage/img/icons/job.webp' height={75} width={75} />
                    </div>
                </div>
                <div className={styles.CountboxItem} style={{ backgroundColor: '#fff6e9' }}>
                    <div className={styles.CountboxItemText}>
                        <small>Fully Lifetime
                            Access</small>
                        <span>800+</span>
                    </div>
                    <div className={styles.CountboxItemImg}>
                        <Image src='https://aitechnolog.com/skillfilt/Storage/img/icons/hiring.webp' height={75} width={75} />
                    </div>
                </div>
                <div className={styles.CountboxItem} style={{ backgroundColor: '#ffe9f1' }}>
                    <div className={styles.CountboxItemText}>
                        <small>Enrolled
                            Students</small>
                        <span>40K+</span>
                    </div>
                    <div className={styles.CountboxItemImg}>
                        <Image src='https://aitechnolog.com/skillfilt/Storage/img/icons/salary.webp' height={75} width={75} />
                    </div>
                </div>
                <div className={styles.CountboxItem} style={{ backgroundColor: '#dcf9fd' }}>
                    <div className={styles.CountboxItemText}>
                        <small>Courses Available</small>
                        <span>110+</span>
                    </div>
                    <div className={styles.CountboxItemImg}>
                        <Image src='https://aitechnolog.com/skillfilt/Storage/img/icons/worth.webp' height={75} width={75} />
                    </div>
                </div>
            </div>

        </>

    )
}

export default CounterBox
