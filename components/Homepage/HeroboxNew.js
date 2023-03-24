import React from 'react'
import styles from '../../styles/Home.module.css'
import CatList from './CatList' 
import Slider from './Slider' 
const HeroboxNew = () => {
    return (
        <div className='IndexHeroImgs'>
            <div className={styles.container}>
                <div className={styles.HomeiMG}>
                    <Slider />
                    
               </div>
                <div className={styles.HomeHeroBox_Second}>
                    <CatList/>
                </div>
            </div>
        </div>


    )
}

export default HeroboxNew
