import React from 'react'
import { FiChevronRight } from 'react-icons/fi';
import CounsellingForm from './CounsellingForm'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import { BASE_URL } from '../Data/config'
import CatList from './Homepage/CatList' 
const HeroboxNew = () => {
    return (
        <div className='IndexHeroImgs'>
            <div className={styles.container}>
                <div className={styles.HomeiMG}>
                    <img src={'https://vmkt.vedantu.com/prod/Ankt/NEET-1224x414_Top_Homepage_Dweb_18-Jan.webp'}/>
               </div>
                <div className={styles.HomeHeroBox_Second}>
                    <CatList/>

                 
                </div>
            </div>
        </div>


    )
}

export default HeroboxNew
