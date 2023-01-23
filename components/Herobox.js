import React from 'react'
import { FiChevronRight } from 'react-icons/fi';
import CounsellingForm from '../components/CounsellingForm'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import { BASE_URL, AppName } from '../Data/config'
const Herobox = () => {
    return (
        <div className='IndexHeroImg'>
            <div className={styles.container}>
                <div className={styles.herobox}>
                    <div className={styles.heroboxleft} style={{ color: 'white' }}>

                        <div>
                            <div>
                                <h1>One Destination for Complete Board Exam.</h1>
                            </div>
                        </div>
                        <div>
                            <span>{AppName} is the best of the best edu portal for aspirant those who dreams for IIT, NIT, NEET, SSC, Banking, Railways, Class 9, Class 10 and Intermediate. 😎</span>
                        </div>
                        <div style={{ height: '20px' }}> </div>
                        <div>
                            <div >
                                <Image src='https://aitechnolog.com/examapp/Storage/img/google-play-button.png' height={50} width={175} />
                            </div>
                        </div>
                    </div>
                    <div className={styles.heroboxright}>
                        <img src='./img/imgbin_school-uniform-child-student-png.png' alt='imagehero' />
                    </div>
                </div>

            </div>
        </div>
       

    )
}

export default Herobox
