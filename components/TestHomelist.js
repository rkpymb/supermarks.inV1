import React from 'react'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import { FiChevronRight } from "react-icons/fi";
import { useRef, useState, useEffect } from "react";
import { useRouter } from 'next/router'
import axios from 'axios';
import Skeleton from '@mui/material/Skeleton';
import Link from 'next/link'
const TestHomelist = () => {
    const router = useRouter()
    const [Retdata, setRetdata] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [OpenSnakbar, setOpenSnakbar] = useState(true);

    useEffect(() => {

        const handleSubmit = async () => {
            const dataid = '08c5th4rh86ht57h6g';
            const sendUM = { dataid }
            const data = await fetch("/api/TestHomelist", {
                method: "POST",
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(sendUM)
            }).then((a) => {
                return a.json();
            })
                .then((parsed) => {
                    // console.log(parsed)
                    setRetdata(parsed)
                    setIsLoading(false)
                })
        }
        handleSubmit()


    }, [router.query])
    return (
        <>
            {isLoading &&
                <div >
                    <Skeleton variant="rectangular" height={150} />
                </div>
            }
            {!isLoading &&
                <div>
                    <div className={styles.centeritem} >
                        <div><h1 style={{ margin: '0' }}>Recommended Test Series </h1></div>
                        <div> <span>We have listes the best Test Series for your best journey for preparation of different category.</span></div>
                        <div> </div>
                        <div style={{ margin: '10px' }}> </div>
                        <div className={styles.stickerBox}>
                            <div className={styles.stickerItem}>
                                <div>
                                    <img src='https://aitechnolog.com/skillfilt/Storage/img/icons/liveclassestop.svg' />
                                </div>
                                <div className={styles.stickerItemtext}>
                                    <span>Best Test Series by Experts</span>
                                </div>
                            </div>
                            <div className={styles.stickerItem}>
                                <div>
                                    <img src='https://aitechnolog.com/skillfilt/Storage/img/icons/practicalindustry.svg' />
                                </div>
                                <div className={styles.stickerItemtext}>
                                    <span>Practical industry projects</span>
                                </div>
                            </div>
                            <div className={styles.stickerItem}>
                                <div>
                                    <img src='https://aitechnolog.com/skillfilt/Storage/img/icons/100_placement.svg' />
                                </div>
                                <div className={styles.stickerItemtext}>
                                    <span>Success guarantee*</span>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className={styles.section}>
                        <div className={styles.CourseHomelist}>
                            <div className={styles.dataspacer}> </div>
                            <div className={styles.TestItemBox}>
                                {Retdata.map((item) => {
                                    return <div className={styles.TestItem} key={item.id}>
                                        <div
                                            style={{
                                                position: "relative",
                                                width: "100%",
                                                height: "160px",
                                                backgroundColor: '#c5d6e3',
                                            }}
                                        >
                                            <Image src={`https://aitechnolog.com/examapp/Storage/panel/img/${item.img}`} alt="Vercel Logo" layout='fill' />
                                        </div>
                                        <div className={styles.TestText}>
                                            <div className={styles.TestTexttitlebox}>
                                                <span><b>{item.title}</b></span>
                                                <div className={styles.coursestickerBox}>
                                                    <div className={styles.coursestickerItem}>
                                                        <div>
                                                            <img src='https://aitechnolog.com/skillfilt/Storage/img/icons/wallet-money.svg' />
                                                        </div>
                                                        <div className={styles.coursestickerItemtext}>
                                                            <span>{item.lang}</span>
                                                        </div>
                                                    </div>
                                                    <div className={styles.coursestickerItem}>
                                                        <div>
                                                            <img src='https://aitechnolog.com/skillfilt/Storage/img/icons/suitcase-portfolio-1.svg' />
                                                        </div>
                                                        <div className={styles.coursestickerItemtext}>
                                                            
                                                            <span>{item.enrolled} Enrolled</span>
                                                        </div>
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                            <Link href={`/TestSeries/${item.pid}`}>
                                                <div className={styles.Testfooter}>
                                                    <div> 
                                                        <div><small>{item.tagline}</small></div>
                                                        
                                                    </div>
                                                   
                                                    <div className={styles.Btn_icon}>
                                                        <small>View Test Series</small>
                                                        <span><FiChevronRight /></span>
                                                    </div>
                                                </div>
                                            </Link>

                                        </div>

                                    </div>
                                }

                                )}

                            </div>
                            <div className={styles.dataspacer}> </div>
                        </div>
                    </div>
                </div>

            }


        </>



    )
}

export default TestHomelist
