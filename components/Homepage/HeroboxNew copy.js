import React from 'react'
import styles from '../../styles/Home.module.css'
import CatList from './CatList' 
const HeroboxNew = () => {
    return (
        <div className='IndexHeroImgs'>
            <div className={styles.container}>
                <div className={styles.HomeiMG}>
                    <img src={'https://api.driteducation.com/Storage/img/Posters/homep1.jpg'}/>
               </div>
                <div className={styles.HomeHeroBox_Second}>
                    <CatList/>
                </div>
            </div>
        </div>


    )
}

export default HeroboxNew
