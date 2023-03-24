import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import styles from '../../styles/Home.module.css'

import { BASE_URL, AppName } from '../../Data/config'

import Dailymotion from 'react-dailymotion';
const Slug = () => {
    const router = useRouter();
    const [ShowData, setShowData] = useState(false);
    const [VideoID, setVideoID] = React.useState();
    const { pageno } = router.query
    useEffect(() => {
        const Data = String(pageno);
        setVideoID(Data)
        setTimeout(() => {
            console.log(Data)
            setShowData(true)
        }, "1000")
    }, [router.query])

    return <>
        {ShowData &&
            <div className={styles.DMPlayerApp} >
                <Dailymotion
                    video={VideoID}
                    uiTheme="dark"
                    autoplay
                    className={styles.DMPlayerAppItem} 
                />
            </div>
        
        }
      
       
    </>
};




export default Slug;