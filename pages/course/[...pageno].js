import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import styles from '../../styles/Home.module.css'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import CourseCheckout from '../../components/Checkout/CourseCheckout' 

import { BASE_URL, AppName } from '../../Data/config'
import Skeleton from '@mui/material/Skeleton';
import { BiCheckCircle } from "react-icons/bi";
import { FiUsers, FiChevronRight, FiClock } from "react-icons/fi";
import { TbDiscount2 } from "react-icons/tb";
import NavbarNew from '../../components/Parts/NavbarNew'
import { blue } from '@mui/material/colors';
const Slug = (CourseFullData) => {
    // console.log(CourseFullData.CourseFullData.RetData)
    const router = useRouter();
    const [CourseRetData, setCourseRetData] = useState(CourseFullData.CourseFullData.RetData);
    const [CourseID, setCourseID] = useState(CourseFullData.CourseFullData.RetData.pid);
    const [isLoading, setIsLoading] = useState(true);
    const [Edulist, setEdulist] = useState([]);
    const [Chapterlist, setChapterlist] = useState([]);

    useEffect(() => {
       

        // Check login
        try {
            if (localStorage.getItem('userid')) {
                GetEducatorsList(CourseFullData.CourseFullData.RetData.pid);
                GetChapterlistList(CourseFullData.CourseFullData.RetData.pid);

            } else {
                router.push('/Login')
            }
        } catch (error) {
            console.error(error)

        }
    }, [router.query]);

    const GetEducatorsList = async (Pid) => {
        const sendUM = { Pid: Pid }
        const data = await fetch("/api/List/GetCourseEducators", {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(sendUM)
        }).then((a) => {
            return a.json();
        })
            .then((parsedEdulist) => {

                setEdulist(parsedEdulist)
                setIsLoading(false)

            })
    }
    const GetChapterlistList = async (Pid) => {
        const sendUM = { Pid: Pid }
        const data = await fetch("/api/List/GetChapterlistList", {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(sendUM)
        }).then((a) => {
            return a.json();
        })
            .then((parsedEdulist) => {

                setChapterlist(parsedEdulist)
                setIsLoading(false)

            })
    }
    return <div>
        <NavbarNew />
        <Head>
            <title>{CourseRetData && CourseRetData.title} : {AppName}</title>
            <meta name="description" content={CourseRetData && CourseRetData.title} />
            <meta property="og:image" content={CourseRetData && CourseRetData.img} />

        </Head>

        {isLoading &&
            <div>
                <Skeleton variant="rectangular" height={150} />
            </div>
        }
        {!isLoading &&
            <div className={styles.SaveTodayBoxCourse}>
                <div className={styles.SaveTodayBoxCourseA}>
                    <TbDiscount2 />
                </div>
                <div className={styles.SaveTodayBoxCourseB}>
                    <b>₹{CourseRetData.MainPrice - CourseRetData.SalePrice}</b> Discount, Offer valid for Today only.
                </div>
            </div>
        }

        {!isLoading &&
            <div className={styles.CourseBox_container} >
                <div className={styles.CourseBox_container_A} >
                    <div className={styles.OnlyDesktop}>
                        <h1 style={{ margin: 0, }}>{CourseRetData && CourseRetData.title}</h1>
                    </div>

                    <div style={{ padding: '10px' }}>
                        <h3>Course overview</h3>
                        <div>
                            {CourseRetData && CourseRetData.details}
                        </div>

                    </div>
                    <div style={{padding: '10px'}}>
                        <h3>Educators</h3>
                        <div className={styles.EducatorSmallFlex}>
                            {Edulist.map((item) => {
                                return <div key={item.id} className={styles.EducatorSmallGridItem}>
                                    <div className={styles.EducatorSmallGridItemImg}>
                                        <img src='https://aitechnolog.com/examapp/Storage/img/dp.png' width='100%' />
                                    </div>
                                    <div className={styles.EducatorSmallGridItemtext}>
                                        <span>{item.name}</span>
                                    </div>
                                   
                                </div>
                            }

                            )}
                        </div>

                    </div>
                    <div style={{ padding: '10px' }}>
                        <div>
                            <h3>Terms & Conditions:</h3>
                        </div>
                        <div> 1. This course can be purchased both from the official website and the application.</div>
                        <div> 2. The user needs to download and sign up/login into the Dhurina application to access any kind of study material like Live/Recorded lectures, PDF Notes, Test Series, or any other kind of Study Material.</div>
                        <div> 3. Any content related to the course cannot be accessible on the website.</div>


                    </div>
                    <div style={{ padding: '10px' }}>
                        <h3>Chapters & Syllabus</h3>
                        <div>
                            {Chapterlist.map((item) => {
                                return <div key={item.id} className={styles.ChapterlistBoxItem}>
                                    <div className={styles.ChapterlistBoxItemText}>
                                        <span>{item.title}</span>
                                    </div>

                                </div>
                            }

                            )}
                        </div>

                    </div>
                    <div style={{ height: '100px' }}></div>
                </div>
                <div className={styles.CourseBox_container_B} >

                    <div>
                        <img src={`${BASE_URL}Storage/panel/img/${CourseRetData && CourseRetData.img}`} className={styles.CoverBoxPosterIMG} />
                    </div>
                    <div className={styles.OnlyMobile}>
                        <h1 style={{ margin: 0 }}>{CourseRetData && CourseRetData.title}</h1>
                    </div>
                    <div className={styles.CourseBox_container_BDataBox}>
                        <div>
                           
                        </div>

                        <div className={styles.OnlyDesktop}>
                            <span style={{ color: '#ffaf00', fontSize: '30px', fontWeight: 'bold' }}>₹{CourseRetData.SalePrice}</span>
                            <del> ₹{CourseRetData.MainPrice}</del>
                        </div>
                        <div>
                            <div className={styles.CourseBox_IconTextBox}>
                                <div className={styles.CourseBox_IconTextBoxA}>
                                    <BiCheckCircle />
                                </div>
                                <div className={styles.CourseBox_IconTextBoxB}>
                                    <span>{CourseRetData.tagline}</span>
                                </div>
                            </div>
                            <div className={styles.CourseBox_IconTextBox}>
                                <div className={styles.CourseBox_IconTextBoxA}>
                                    <FiUsers />
                                </div>
                                <div className={styles.CourseBox_IconTextBoxB}>
                                    <span>{CourseRetData.enrolled} + enrolled</span>
                                </div>
                            </div>
                            <div className={styles.CourseBox_IconTextBox}>
                                <div className={styles.CourseBox_IconTextBoxA}>
                                    <BiCheckCircle />
                                </div>
                                <div className={styles.CourseBox_IconTextBoxB}>
                                    <span>{CourseRetData.taglinetwo} </span>
                                </div>
                            </div>
                            <div className={styles.CourseBox_IconTextBox}>
                                <div className={styles.CourseBox_IconTextBoxA}>
                                    <FiClock />
                                </div>
                                <div className={styles.CourseBox_IconTextBoxB}>
                                    <span>{CourseRetData.Validity} days Validity</span>
                                </div>
                            </div>
                        </div>


                        <div className={styles.OnlyDesktop}>
                            <CourseCheckout DataCourse={CourseFullData.CourseFullData.RetData}/>
                        </div>


                    </div>
                </div>
              
            </div>
        }


        <div className={styles.FootermobileBtnCourse}>
            <div className={styles.FootermobileBtnCourseBox}>
                <div className={styles.FootermobileBtnCourseBoxPrice}>
                    <div>
                        <small>Course Price :</small>
                    </div>
                    <span style={{ color: '#ffaf00', fontSize: '30px', fontWeight: 'bold' }}>₹{CourseRetData.SalePrice}</span>
                    <del> ₹{CourseRetData.MainPrice}</del>
                </div>
                <div>
                    <CourseCheckout DataCourse={CourseFullData.CourseFullData.RetData} />
                </div>

            </div>
        </div>

    </div>
};



export async function getServerSideProps(context) {
    const DataSlug = context.query.pageno[0];
    const KEY = process.env.MYKEY

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ DataSlug: DataSlug, updatekey: KEY })
    };
    const response = await fetch(`${process.env.API_URL}Website/Course/CourseData.php`, requestOptions);
    const CourseFullData = await response.json();

    return {

        props: { CourseFullData }, // will be passed to the page component as props
    }

}



export default Slug;