import React, { useState, useEffect ,useCallback} from 'react';
import { useRouter } from 'next/router'
import styles from '../../styles/Home.module.css'

import { BASE_URL, AppName } from '../../Data/config'
import YouTube from '@u-wave/react-youtube';
const Slug = () => {
    const router = useRouter();
    const [ShowData, setShowData] = useState(false);
    const [VideoID, setVideoID] = React.useState();
    const { pageno } = router.query
    const [videoIndex, setVideoIndex] = useState();
    const [suggestedQuality, setSuggestedQuality] = useState('auto');
    const [volume, setVolume] = useState(1);
    const [paused, setPaused] = useState(false);

    const qualities = ['auto', '240', '380', '480', '720', '1080', '1440', '2160'];
   
    const handlePause = useCallback((event) => {
        setPaused(event.target.checked);
    }, []);

    const handlePlayerPause = useCallback(() => {
        setPaused(true);
    }, []);

    const handlePlayerPlay = useCallback(() => {
        setPaused(false);
    }, []);
    const handleplayv = useCallback(() => {
        setPaused(false);
    }, []);

    const handleVolume = useCallback((event) => {
        setVolume(parseFloat(event.target.value));
    }, []);

    const handleQuality = useCallback((event) => {
        setSuggestedQuality(qualities[event.target.selectedIndex]);
        console.log(qualities[event.target.selectedIndex]);
    }, []);
    useEffect(() => {
        const Data = String(pageno);
        setVideoID(Data)
        setTimeout(() => {
            console.log(Data)
            setShowData(true)
            setPaused(false);
        }, "1000")
    }, [router.query])


    return <>
        {ShowData &&
            <div className={styles.Box} >
                <div className="col s4">

                    <h5>
                        Paused
                    </h5>
                    <p>
                        <label htmlFor="paused">
                            <input
                                type="checkbox"
                                id="paused"
                                checked={paused}
                                onChange={handlePause}
                            />
                            <span>Paused</span>
                        </label>
                    </p>
                    <h5>
                        play video
                    </h5>
                    <p>
                        <label htmlFor="paused">
                            <input
                                type="checkbox"
                                id="paused"
                                checked={paused}
                                onChange={handleplayv}
                            />
                            <span>play now</span>
                        </label>
                    </p>
                    <h5>
                        Volume
                    </h5>
                    <input
                        type="range"
                        value={volume}
                        min={0}
                        max={1}
                        step={0.01}
                        onChange={handleVolume}
                    />
                    <h5>
                        Quality
                    </h5>
                    <select className="browser-default" onChange={handleQuality}>
                        {qualities.map((quality) => (
                            <option key={quality} value={quality}>
                                {quality}
                            </option>
                        ))}
                    </select>
                </div>
                <div className={styles.DMPlayerApp} >
                   
                    <YouTube
                        video={VideoID}
                        width={640}
                        height={480}
                        className={styles.DMPlayerAppItem}
                        autoplay
                        controls={false}
                        suggestedQuality={suggestedQuality}
                        volume={volume}
                        paused={paused}
                        onPause={handlePlayerPause}
                        onPlaying={handlePlayerPlay}
                        onReady={handleplayv}


                    />
                </div>

            </div>
           
        
        }
      
       
    </>
};




export default Slug;