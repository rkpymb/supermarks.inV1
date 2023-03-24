import { useState, useEffect } from 'react'
import Head from 'next/head'
import Skeleton from '@mui/material/Skeleton';
import styles from '../../styles/Home.module.css'
import { useRouter } from 'next/router'


import Link from 'next/link'

const Mytest = ({ ID, QTitle }) => {
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter()
    const [Retdata, setRetdata] = useState([]);
    

    useEffect(() => {
        GetData()

    }, [router.query]);
    const GetData = async () => {
        const userid = { QTitle: QTitle }
        const data = fetch("/api/TS/Leaderboard", {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(userid)
        }).then((a) => {
            return a.json();
        })
            .then((parsedAtemptlist) => {
                console.log(parsedAtemptlist)
                setRetdata(parsedAtemptlist.FinalData)

                setIsLoading(false);

            })
    };
    return (
        <>

            <div>
                {isLoading &&
                    <div>
                        <div style={{ marginTop: '15px' }}>
                            <Skeleton variant="rectangular" height={100} />
                        </div>
                        <div style={{ marginTop: '15px' }}>
                            <Skeleton variant="rectangular" height={100} />
                        </div>
                        <div style={{ marginTop: '15px' }}>
                            <Skeleton variant="rectangular" height={100} />
                        </div>
                        <div style={{ marginTop: '15px' }}>
                            <Skeleton variant="rectangular" height={100} />
                        </div>
                        <div style={{ marginTop: '15px' }}>
                            <Skeleton variant="rectangular" height={100} />
                        </div>
                    </div>
                }
                {!isLoading &&
                    <div>
                        {Retdata.map((item) => {
                            return <div className={styles.LeaderboardlistBox} key={item.id}>
                                <div className={styles.LeaderboardlistBoxA} key={item.id}>
                                    <div className={styles.LeaderboardlistBoxADp} key={item.id}>

                                    </div>
                                    <div className={styles.LeaderboardlistBoxAText} key={item.id}>
                                        <div className={styles.RankBox}>
                                            <span style={{color:'white'}}>{item.Rank}</span>
                                        </div>
                                        <div> <span>{item.username}</span></div>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <div>
                                                <small>Marks :</small>
                                                <small> {item.FinalScore}</small>,
                                            </div>
                                            <div>
                                                <small>Taken Time :</small>
                                                <small> {item.takenTime}</small>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className={styles.LeaderboardlistBoxB} key={item.id}>
                                    <small>#{item.AttID}</small>
                                </div>
                            </div>
                        }

                        )}
                    </div>
                }
            </div>
        </>
    )
}

export default Mytest
