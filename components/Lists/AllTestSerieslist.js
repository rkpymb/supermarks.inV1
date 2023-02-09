import React from 'react'
import styles from '../../styles/Home.module.css'
import Image from 'next/image'
import { FiUsers } from "react-icons/fi";
import { useRef, useState, useEffect } from "react";
import { useRouter } from 'next/router'
import { BASE_URL } from '../../Data/config'
import { IoLanguage } from "react-icons/io5";
import Skeleton from '@mui/material/Skeleton';
import Link from 'next/link'
const AllTestSerieslist = () => {
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
                    <div style={{ height: '20px' }}> </div>
                    <Skeleton variant="rectangular" style={{ minHeight: '100vh' }} />
                </div>
            }
            {!isLoading &&
                <div>
                    <div className={styles.Space5Mobile}> </div>
                    <div className={styles.CoverBoxTestSeries}>
                        <div className={styles.CoverBoxTestSeriesText} >
                            <div>
                                <h1 style={{ margin: '0' }}>Recommended Best <span style={{ color: '#1d75bd' }}>Test Series</span> </h1>
                            </div>
                            <div> <span>We have listes the best Test Series for your best journey for preparation of different category.</span></div>
                            <div> </div>
                            <div style={{ height: '20px' }}> </div>
                            <div className={styles.stickerBox}>
                                <div className={styles.stickerItem} style={{ backgroundColor: 'white' }}>
                                    <div>
                                        <Image src={`${BASE_URL}Storage/img/icons/presentation.png`} height={50} width={50} />
                                    </div>
                                    <div className={styles.stickerItemtext}>
                                        <span style={{ color: 'black' }}>Designed by Top Educators</span>
                                    </div>
                                </div>

                                <div className={styles.stickerItem} style={{ backgroundColor: 'white' }}>
                                    <div>
                                        <Image src={`${BASE_URL}Storage/img/icons/conversation.png`} height={50} width={50} />
                                    </div>
                                    <div className={styles.stickerItemtext}>
                                        <span style={{ color: 'black' }}>Most Important Covered</span>
                                    </div>
                                </div>
                                <div className={styles.stickerItem} style={{ backgroundColor: 'white' }}>
                                    <div>
                                        <Image src={`${BASE_URL}Storage/img/icons/analysis.png`} height={50} width={50} />
                                    </div>
                                    <div className={styles.stickerItemtext}>
                                        <span style={{ color: 'black' }}>Analysis of your Scores</span>
                                    </div>
                                </div>
                                <div className={styles.stickerItem} style={{ backgroundColor: 'white' }}>
                                    <div>
                                        <Image src={`${BASE_URL}Storage/img/icons/coaching.png`} height={50} width={50} />
                                    </div>
                                    <div className={styles.stickerItemtext}>
                                        <span style={{color:'black'}}>Mentors Feedback your Results</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.CoverBoxTestSeriesPoster}>
                            <img src={`/img/brand-amb.png`} className={styles.CoverBoxTestSeriesPosterIMG} />
                        </div>
                    </div>
                    <div style={{ height: '50px' }}> </div>
                    <div className={styles.CourseListBox}>
                        <div className={styles.CourseGrid}>
                            {Retdata.map((item) => {
                                return <Link href={`/TestSeries/${item.pid}`} key={item.id}>
                                    <div className={styles.CourseItems}>
                                        <div
                                            style={{
                                                position: "relative",
                                                width: "100%",
                                                height: "130px",
                                                backgroundColor: '#c5d6e3',
                                            }}
                                        >
                                            <Image src={`${BASE_URL}Storage/panel/img/${item.img}`} alt="Vercel Logo" layout='fill' />
                                        </div>

                                        <div className={styles.CourseItemsData}>
                                            <div className={styles.CourseItemstitlebox}>
                                                <span><b>{item.title}</b></span>
                                            </div>
                                            {/* <div>

                                                <span style={{ color: '#ffaf00', fontSize: '30px', fontWeight: 'bold' }}>₹{item.SalePrice}</span>
                                                <del> ₹{item.MainPrice}</del>
                                            </div> */}
                                            <div className={styles.coursestickerBox}>
                                                <div className={styles.coursestickerItem}>
                                                    <div>
                                                        <IoLanguage />
                                                    </div>
                                                    <div className={styles.coursestickerItemtext}>
                                                        <span>{item.lang}</span>
                                                    </div>
                                                </div>
                                                <div className={styles.coursestickerItem}>
                                                    <div>
                                                        <div>
                                                            <FiUsers />
                                                        </div>
                                                    </div>
                                                    <div className={styles.coursestickerItemtext}>
                                                        <span>{item.enrolled} Enrolled</span>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className={styles.coursestickerBoxFooter}>
                                                <div className={styles.coursestickerBoxStarts}>
                                                    ⭐⭐⭐⭐⭐
                                                </div>
                                                <div className={styles.EnrollBtn}>
                                                    <span>Enroll</span>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </Link>
                            }

                            )}


                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '15px' }}>
                            <div className={styles.LoadMoreBtn}>
                                <span>Load More</span>
                            </div>
                        </div>
                    </div>
                </div>

            }


        </>



    )
}

export default AllTestSerieslist
