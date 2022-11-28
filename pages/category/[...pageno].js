import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import styles from '../../styles/Home.module.css'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { FiChevronRight } from 'react-icons/fi';
import CounsellingForm from '../../components/CounsellingForm'
import Navbar from '../../components/Navbar'
import SecondHeader from '../../components/SecondHeader'
const Slug = (props) => {
    // console.log(props)
    const router = useRouter();
    const [blog, setBlog] = useState(props.myBlog);

    const [Retdata, setRetdata] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [OpenSnakbar, setOpenSnakbar] = useState(true);

    useEffect(() => {
        setRetdata(blog)
    

    }, [router.query])

    return <>
        <Navbar />
        <Head>
            <title>Category : {props.pid} - Board Test</title>
            <meta name="description" content={props.pid} />
            {/* <meta property="og:image" content={blog && blog.data.img} /> */}
        </Head>
        <SecondHeader Title={props.pid} />
        <div className={styles.container}>
            <div style={{ height: '30px' }}> </div>
            <div className={styles.SectionBox}>
                <div className={styles.CourseHomelist}>
                    <div className={styles.TestItemBox}>
                        {Retdata.map((item) => {
                            return <Link href={`/TestSeries/${item.pid}`} key={item.id}>
                                <div className={styles.TestItem}>
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


                                    </div>

                                </div>
                            </Link>
                        }

                        )}

                    </div>
                </div>
            </div>
            <div style={{ height: '30px' }}> </div>
            <div className={styles.CousalingBox}>
                <div className={styles.CousalingBox_all}>
                    <div className={styles.CousalingBox_allA}>
                        <h1> Grow your career in {props.pid}</h1>
                        <h1> Book a Free Demo Session</h1>
                        <span>Get Personalized Admission Enquiry, Clear your all concerns and query with our experts. Book a Live counselling session for FREE.</span>
                        <div style={{ height: '10px' }}></div>
                        <CounsellingForm />
                    </div>
                    <div className={styles.CousalingBox_allB}>
                        <img src='/img/56232-work-from-home.gif' alt='img' />
                    </div>
                </div>
            </div>
            <div style={{ height: '40px' }}> </div>
        </div>
        {/* Footer mobile btn */}
       
    </>
};

export async function getServerSideProps(context) {
  
    const ID = context.query.pageno[0];
    const pid = ID;
    let data = await fetch(`${process.env.API_URL}g_TestPassbyCat.php?pid=${pid}`)
    let myBlog = await data.json();
   
    return {
        props: { myBlog, pid }, // will be passed to the page component as props
    }
}


export default Slug;