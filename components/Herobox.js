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
                    <h1>Kickstart your dream career with <span className={styles.Skillfiltname}>Skillfilt.</span> </h1>
                    <span>Learn industry-relevant skills and crack the Relevel test to work at India’s finest companies,Take a Free Careers Counseling 😎</span>
                    <div style={{ height: '20px' }}> </div>
                    <CounsellingForm />
                   
                </div>
                <div className={styles.heroboxright}>
                    <img src='https://aitechnolog.com/skillfilt/Storage/img/all/skillfiltheroimg.gif' alt='imagehero'/>
                </div>
            </div>
         

            <div className={styles.Countbox}>
                <div className={styles.CountboxItem} style={{ backgroundColor: '#efecff' }}>
                    <div className={styles.CountboxItemText}>
                        <small>Jobs delivered</small>
                        <span>900+</span>
                    </div>
                    <div className={styles.CountboxItemImg}>
                        <Image src='https://aitechnolog.com/skillfilt/Storage/img/icons/job.webp' height={75} width={75} />
                    </div>
                </div>
                <div className={styles.CountboxItem} style={{ backgroundColor: '#fff6e9' }}>
                    <div className={styles.CountboxItemText}>
                        <small>Companies hiring</small>
                        <span>800+</span>
                    </div>
                    <div className={styles.CountboxItemImg}>
                        <Image src='https://aitechnolog.com/skillfilt/Storage/img/icons/hiring.webp' height={75} width={75} />
                    </div>
                </div>
                <div className={styles.CountboxItem} style={{ backgroundColor: '#ffe9f1' }}>
                    <div className={styles.CountboxItemText}>
                        <small>Highest salary</small>
                        <span>40L</span>
                    </div>
                    <div className={styles.CountboxItemImg}>
                        <Image src='https://aitechnolog.com/skillfilt/Storage/img/icons/salary.webp' height={75} width={75} />
                    </div>
                </div>
                <div className={styles.CountboxItem} style={{ backgroundColor: '#dcf9fd' }}>
                    <div className={styles.CountboxItemText}>
                        <small>Job interviews</small>
                        <span>11,000+</span>
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
