import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import styles from '../../styles/Home.module.css'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { FiChevronRight } from 'react-icons/fi';
import CounsellingForm from '../../components/CounsellingForm'
const Slug = (props) => {
    // console.log(props)
    const router = useRouter();
    const [blog, setBlog] = useState(props.myBlog);

    const [Retdata, setRetdata] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [OpenSnakbar, setOpenSnakbar] = useState(true);

    useEffect(() => {
        setRetdata(blog)
    //    console.log(blog)

    }, [router.query])

    return <div>
        <Head>
            <title>Category : {props.pid} - Skillfilt</title>
            <meta name="description" content={props.pid} />
            {/* <meta property="og:image" content={blog && blog.data.img} /> */}
        </Head>
        
        <div className={styles.container}>
            <div style={{ height: '10px' }}> </div>
            <div className={styles.CousalingBox}>
                <div className={styles.CousalingBox_all}>
                    <div className={styles.CousalingBox_allA}>
                        <h1> Grow your career in {props.pid}</h1>
                        <h1> Book a Free Demo Session</h1>
                        <span>Get Personalized Admission Enquiry, Clear your all concerns and query with our experts. Book a Live counselling session for FREE.</span>
                        <div style={{ height: '10px' }}></div>
                        <CounsellingForm  />
                    </div>
                    <div className={styles.CousalingBox_allB}>
                        <img src='/img/56232-work-from-home.gif' alt='img' />
                    </div>
                </div>
            </div>
            <div style={{ height: '40px' }}> </div>
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
                                        <span>{item.title}</span>
                                        <small>Batches Fast Filing</small>
                                    </div>
                                    <Link href={`/course/${item.pid}`}>
                                        <div className={styles.Testfooter}>
                                            <span>₹{item.sprice} <small><del>{item.sprice}</del></small></span>
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
        {/* Footer mobile btn */}
       
    </div>
};

export async function getServerSideProps(context) {
  
    const ID = context.query.pageno[0];
    const pid = ID;
    let data = await fetch(`${process.env.API_URL}g_coursebyCat.php?pid=${pid}`)
    let myBlog = await data.json();
   
    return {
        props: { myBlog, pid }, // will be passed to the page component as props
    }
}


export default Slug;