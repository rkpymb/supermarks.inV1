import React from 'react'
import { FiChevronRight } from 'react-icons/fi';
import CounsellingForm from '../components/CounsellingForm'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
const Herobox = () => {
    return (
        <>
            <div className={styles.herobox}>
                <div className={styles.heroboxleft}>
                    <h1>One Destination for
                        Complete <span className={styles.Skillfiltname}>Board Exam.</span> </h1>
                    <span>Board Test is the best of the best edu portal for aspirant those who dreams for IIT, NIT, NEET, SSC, Banking, Railways, Class 9, Class 10 and Intermediate. 😎</span>
                    <div style={{ height: '20px' }}> </div>
                    <CounsellingForm />
                   
                </div>
                <div className={styles.heroboxright}>
                    <img src='./side-1.png' alt='imagehero'/>
                </div>
            </div>
         

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

export default Herobox
