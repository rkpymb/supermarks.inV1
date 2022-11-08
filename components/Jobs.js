import React from 'react'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import { FiChevronRight } from "react-icons/fi";
import { useRef, useState, useEffect } from "react";
import { useRouter } from 'next/router'
import axios from 'axios';
import Skeleton from '@mui/material/Skeleton';
import Link from 'next/link'
const Jobs = () => {
    const router = useRouter()
    const [Retdata, setRetdata] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [OpenSnakbar, setOpenSnakbar] = useState(true);

    useEffect(() => {

        const handleSubmit = async () => {
            const dataid = '08c5th4rh86ht57h6g';
            const sendUM = { dataid }
            const data = await fetch("/api/Jobs", {
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
                    <div className={styles.TitlebtnBox} >
                        <span style={{ color: '#3c4852', fontWeight: '500' }}>Open Positions</span>
                        {/* <div className={styles.Btn_icon} style={{ backgroundColor: 'white', color: '#3c4852' }}>
                            <small>view all</small>
                            <span><FiChevronRight /></span>
                        </div> */}
                    </div>
                    <div className={styles.section}>
                        <div className={styles.CourseHomelist}>
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
                                            <Image src={item.img} alt="Vercel Logo" layout='fill' />
                                        </div>
                                        <div className={styles.TestText}>
                                            <div className={styles.TestTexttitlebox}>
                                                <b>{item.jobtitle}</b>
                                            </div>
                                            <Link href={`/Careers/${item.slug}`}>
                                                <div className={styles.Testfooter}>
                                                    <span>{item.job_type} </span>
                                                    <div className={styles.Btn_icon}>
                                                        <small>View Details</small>
                                                        <span><FiChevronRight /></span>
                                                    </div>
                                                </div>
                                            </Link>

                                        </div>

                                    </div>
                                }

                                )}

                            </div>

                        </div>
                    </div>
                </div>

            }


        </>



    )
}

export default Jobs
