import React, { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router'
import styles from '../../styles/Home.module.css'
import ReactPlayer from 'react-player/lazy'
import { BASE_URL, AppName } from '../../Data/config'
import YouTube from '@u-wave/react-youtube';
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
            <div className={styles.LiveStreamPlayerBox} >
                <div className={styles.LiveStreamPlayerA}>
                    <ReactPlayer
                        className={styles.LiveStreamPlayerItem}
                        controls
                        playing
                        url={`https://live.supermarks.in/${VideoID}/${VideoID}.flv`} />
                </div>
                <div className={styles.LiveStreamPlayerB} >
                    ssd
                </div>
            </div>

        }



    </>
};




export default Slug;