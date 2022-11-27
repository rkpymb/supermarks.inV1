import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import styles from '../../styles/Home.module.css'
import Head from 'next/head'
import Skeleton from '@mui/material/Skeleton';
import SecondHeader from '../../components/SecondHeader'
import AttemptResultTab from '../../components/AttemptResultTab'
import Image from 'next/image'
const Slug = (props) => {
    // console.log(props.myBlog.data.pid)
    const router = useRouter();
    const [ID, setID] = useState(props.ID);
    const [SendText, setSendText] = useState('Attempt Result : ' + props.ID);
    const [isLoading, setIsLoading] = useState(true);
    const [Retdata, setRetdata] = useState([]);
    const [RetdataAll, setRetdataAll] = useState([]);
    useEffect(() => {
        try {
            if (localStorage.getItem('userid')) {
                const TestID = { ID }
                const data = fetch("/api/GetAttemptResult", {
                    method: "POST",
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(TestID)
                }).then((a) => {
                    return a.json();
                })
                    .then((parsedUser) => {
                        console.log(parsedUser)
                        setRetdataAll(parsedUser)
                        setRetdata(parsedUser.pdata)
                        setIsLoading(false)
                    })

            } else {

            }
        } catch (error) {
            console.error(error)


        }
        // check login credential end

    }, [router.query]);
    return <div>
        <Head>
            <title>{props.ID} : Attempt Result</title>
        </Head>
        <SecondHeader Title={SendText} />
        <div className={styles.container}>
            <div className={styles.DashboardBox}>
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
                        <div className={styles.Welcomeuserbox}>
                            <span> {Retdata.Title}</span>
                        </div>
                        <div style={{ height: '30px' }}> </div>
                        <div className={styles.ResultBox}>
                            <div className={styles.ShadowBox}>
                                <div>
                                    <span style={{ fontWeight: '500' }}> Overall Performance Summary</span>
                               </div>
                                <div className={styles.Countbox}>
                                    
                                    <div className={styles.CountboxItem} style={{ backgroundColor: '#fff6e9' }}>
                                        <div className={styles.CountboxItemText}>
                                            <small>Score</small>
                                            <span>{RetdataAll.FinalScore}<span style={{ fontSize: '18px' }}>/{RetdataAll.Totalmarks}</span></span>
                                        </div>
                                        <div className={styles.CountboxItemImg}>
                                            <Image src='https://aitechnolog.com/skillfilt/Storage/img/icons/hiring.webp' height={75} width={75} />
                                        </div>
                                    </div>
                                    <div className={styles.CountboxItem} style={{ backgroundColor: '#ffe9f1' }}>
                                        <div className={styles.CountboxItemText}>
                                            <small>Correct
                                            </small>
                                            <span>{RetdataAll.Correct}<span style={{ fontSize:'18px'}}>/{RetdataAll.TotalQues}</span></span>
                                        </div>
                                        <div className={styles.CountboxItemImg}>
                                            <Image src='https://aitechnolog.com/skillfilt/Storage/img/icons/salary.webp' height={75} width={75} />
                                        </div>
                                    </div>
                                    <div className={styles.CountboxItem} style={{ backgroundColor: '#dcf9fd' }}>
                                        <div className={styles.CountboxItemText}>
                                            <small>Percentile</small>
                                            <span>{RetdataAll.Percentile}%</span>
                                        </div>
                                        <div className={styles.CountboxItemImg}>
                                            <Image src='https://aitechnolog.com/skillfilt/Storage/img/icons/worth.webp' height={75} width={75} />
                                        </div>
                                    </div>
                                    <div className={styles.CountboxItem} style={{ backgroundColor: '#efecff' }}>
                                        <div className={styles.CountboxItemText}>
                                            <small>Rank</small>
                                            <span>10K+</span>
                                        </div>
                                        <div className={styles.CountboxItemImg}>
                                            <Image src='https://aitechnolog.com/skillfilt/Storage/img/icons/job.webp' height={75} width={75} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div style={{ height: '20px' }}> </div>
                            <AttemptResultTab ID={ID} />
                        </div>
                    </div>
                }

            </div>
        </div>
    </div>

};

export async function getServerSideProps(context) {
    // console.log(ID)
    const ID = context.query.pageno[0];
    return {
        props: { ID }, // will be passed to the page component as props
    }
}


export default Slug;