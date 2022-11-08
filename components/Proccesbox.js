import React from 'react'
import styles from '../styles/Home.module.css'

const Proccesbox = () => {
    return (
        <div className={styles.container}>
            <div className={styles.dataspacer}> </div>
            <div className={styles.centeritem} >
                <div><h1 style={{ margin: '0' }}>How to get your dream job</h1></div>
                <div> <span><span className={styles.Skillfiltname}>SKILLFILT</span>PROCESS</span></div>
            </div>
            <div className={styles.dataspacer}> </div>
            <div className={styles.ProccesboxItembox}>
                <div className={styles.ProccesboxRightItems}>
                    <div className={styles.ProccesboxRightItemsfooter}>
                        <div className={styles.Proccesnumber}>
                            <span>1</span>
                        </div>
                        <div className={styles.Proccestitle}>
                            <span >Enroll in a industry-relevant skills Program</span>
                            
                        </div>
                    </div>
                    <img src='https://aitechnolog.com/skillfilt/Storage/img/all/110067-ebook-bookstore.gif' alt='img' />
                </div>
                <div className={styles.ProccesboxRightItems}>
                    <div className={styles.ProccesboxRightItemsfooter}>
                        <div className={styles.Proccesnumber}>
                            <span>2</span>
                        </div>
                        <div className={styles.Proccestitle}>
                            <span >Study live from the best educators & Finish </span>
                            
                        </div>
                    </div>
                    <img src='https://aitechnolog.com/skillfilt/Storage/img/all/110085-online-counseling.gif' alt='img' />
                </div>
                <div className={styles.ProccesboxRightItems}>
                    <div className={styles.ProccesboxRightItemsfooter}>
                        <div className={styles.Proccesnumber}>
                            <span>3</span>
                        </div>
                        <div className={styles.Proccestitle}>
                            <span>Get Hired ,Unlock your dream companies</span>
                            
                        </div>
                    </div>
                    <img src='https://aitechnolog.com/skillfilt/Storage/img/all/110076-group-class.gif' alt='img' />
                </div>
            </div>
            <div className={styles.dataspacer}> </div>
        </div>


    )
}

export default Proccesbox
