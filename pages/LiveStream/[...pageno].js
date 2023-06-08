import React, { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router'
import styles from '../../styles/Home.module.css'
import ReactPlayer from 'react-player'
import { BASE_URL, AppName } from '../../Data/config'
import Lottie from 'react-lottie'
import Head from 'next/head'
import * as animationData from '../../Data/Lottie/99714-go-live.json'
const Slug = () => {
    const router = useRouter();
    const [ShowData, setShowData] = useState(false);
    const [VideoID, setVideoID] = React.useState();
    const [StreamData, setStreamData] = React.useState();
    const { pageno } = router.querys
    useEffect(() => {
        const Data = String(pageno);
        setVideoID(Data)
        
        setTimeout(() => {
            GetDatabyid(Data)
           
        }, "1000")
    }, [router.query])


    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }

    const GetDatabyid = async (Livekey) => {
        const sendUMx = { Livekey: Livekey }
        const data = await fetch("/api/Live/GetStreamData", {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(sendUMx)
        }).then((a) => {
            return a.json();
        })
            .then((parsedx) => {
                console.log(parsedx)
                if (parsedx.status == true) {
                    setShowData(true)
                    setStreamData(parsedx.StreamData)
                }

            })
    }

    return <>
        <div>
            <Head>
                <title> Live Player</title>
                <meta name="viewport" content="initial-scale=1, width=device-width" />
            </Head>

    
            {ShowData &&
                <div className={styles.LiveStreamPlayerBox} >
                    <div className={styles.LiveStreamPlayerBoxA}>
                        <div className={styles.HeaderLivePlayer}>
                            <div className={styles.PlayerLogobox}>
                                <div className={styles.HeaderLivePlayerNavbarlogo}>
                                    <img src='/logo/logomainwhite.png' alt='logo' />
                                    <div className={styles.LiveStickerBoxMobile}>
                                        <span>{StreamData.statustext}</span>
                                    </div>
                                </div>
                                <div className={styles.liveStick}>
                                    <div className={styles.TitleBox}>
                                        <span>{StreamData.Title}</span>
                                    </div>
                                   
                                </div>
                            </div>

                        </div>
                        <ReactPlayer
                            className={styles.LiveStreamPlayerItem}
                            controls
                            playing
                            url={`http://localhost:8000/live/${VideoID}.flv`}
                            width='100%'
                        />

                    </div>
                    <div className={styles.LiveStreamPlayerBoxB}>
                        <p>Live Comments</p>
                    </div>
                </div>


            }
        </div>



    </>
};




export default Slug;