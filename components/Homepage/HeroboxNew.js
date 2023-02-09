import React from 'react'
import styles from '../../styles/Home.module.css'
import CatList from './CatList' 
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
