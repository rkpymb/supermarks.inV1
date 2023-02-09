import React from 'react'
import styles from '../../styles/Home.module.css'
import Image from 'next/image'
import { TbDiscount2 } from "react-icons/tb";
import { useRef, useState, useEffect } from "react";
import { useRouter } from 'next/router'
import { BASE_URL } from '../../Data/config'
import { IoLanguage } from "react-icons/io5";
import Skeleton from '@mui/material/Skeleton';
import Link from 'next/link'
const CoursesByCatid = ({ CATID }) => {
    console.log(CATID)
    const router = useRouter()
    const [Retdata, setRetdata] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [OpenSnakbar, setOpenSnakbar] = useState(true);

    useEffect(() => {

        const handleSubmit = async () => {
            const dataid = '08c5th4rh86ht57h6g';
            const sendUM = { CATID }
            const data = await fetch("/api/List/CoursebyCatid", {
                method: "POST",
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(sendUM)
            }).then((a) => {
                return a.json();
            })
                .then((parsed) => {
                    console.log(parsed)
                    setRetdata(parsed)
                    setIsLoading(false)
                })
        }
        handleSubmit()


    }, [router.query])
    return (
        <>


            <div>
                <div className={styles.Space5Mobile}> </div>
                <div className={styles.TitleCenterBox} >
                    <div>
                        <h1 style={{ margin: '0' }}>Courses for <span style={{ color: '#1d75bd' }}>{CATID}</span> </h1>
                    </div>
                    <div> <span>We have listes the best Best Courses for {CATID} preparation</span></div>
                    <div> </div>
                    <div style={{ height: '20px' }}> </div>
                    <div className={styles.stickerBox}>
                        <div className={styles.stickerItem} style={{ backgroundColor: '#efecff' }}>
                            <div>
                                <Image src={`${BASE_URL}Storage/img/icons/presentation.png`} height={50} width={50} />
                            </div>
                            <div className={styles.stickerItemtext}>
                                <span>Best and qualified Educators</span>
                            </div>
                        </div>

                        <div className={styles.stickerItem} style={{ backgroundColor: '#fff6e9' }}>
                            <div>
                                <Image src={`${BASE_URL}Storage/img/icons/open.png`} height={50} width={50} />
                            </div>
                            <div className={styles.stickerItemtext}>
                                <span>Structured syllabus Top Courses</span>
                            </div>
                        </div>
                        <div className={styles.stickerItem} style={{ backgroundColor: '#ffe9f1' }}>
                            <div>
                                <Image src={`${BASE_URL}Storage/img/icons/focus.png`} height={50} width={50} />
                            </div>
                            <div className={styles.stickerItemtext}>
                                <span>Focused for Get Success</span>
                            </div>
                        </div>
                        <div className={styles.stickerItem} style={{ backgroundColor: '#dcf9fd' }}>
                            <div>
                                <Image src={`${BASE_URL}Storage/img/icons/rtr.png`} height={50} width={50} />
                            </div>
                            <div className={styles.stickerItemtext}>
                                <span>Success guarantee* for you</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ height: '30px' }}> </div>
                {isLoading &&
                    <div >

                        <Skeleton variant="rectangular" style={{ minHeight: '100vh' }} />
                    </div>
                }
                {!isLoading &&

                    <div className={styles.CourseListBox}>
                        <div className={styles.CourseGrid}>
                            {Retdata.map((item) => {
                                return <Link href={`/Course/${item.pid}`} key={item.id}>
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
                                            <div>

                                                <span style={{ color: '#ffaf00', fontSize: '30px', fontWeight: 'bold' }}>₹{item.SalePrice}</span>
                                                <del> ₹{item.MainPrice}</del>
                                            </div>
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
                                            <div className={styles.coursestickerBoxFooter}>
                                                <div className={styles.coursestickerBoxDiscountTag}>
                                                    <span><TbDiscount2 /></span>
                                                    <small>Save Today ₹{item.MainPrice - item.SalePrice}</small>
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

                        {Retdata.length > 0 &&

                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '15px' }}>
                                <div className={styles.LoadMoreBtn}>
                                    <span>View More Courses</span>
                                </div>
                            </div>
                        }
                        {Retdata.length == 0 &&

                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '15px', flexDirection: 'column' }}>
                                <div style={{ height: '30px' }}> </div>
                                <div> <span>{Retdata.length} Courses Found for {CATID}</span></div>
                                <div style={{ height: '30px' }}> </div>
                                <Link href='/'>
                                    <div className={styles.LoadMoreBtn}>
                                        <span>Go Back</span>
                                    </div>
                                </Link>
                            </div>
                        }
                    </div>
                }
            </div>




        </>



    )
}

export default CoursesByCatid
