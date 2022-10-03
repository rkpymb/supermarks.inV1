import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import styles from '../../styles/Home.module.css'
import Head from 'next/head'
import Image from 'next/image'
import { FiChevronRight } from 'react-icons/fi';
import CounsellingForm from '../../components/CounsellingForm'
const Slug = (props) => {
    // console.log(props.myBlog)
    const router = useRouter();
    const [blog, setBlog] = useState(props.myBlog);
    return <div>
        <Head>
            <title>{blog && blog.data.title} : Skillfilt</title>
            <meta name="description" content={blog && blog.data.title} />
            <meta property="og:image" content={blog && blog.data.img} />

        </Head>
        <div className={styles.container}>
            <div className={styles.CourseDataBox}>
                <div className={styles.CBoxA}>
                    <div style={{ height: '10px' }}></div>

                    <div
                        style={{
                            position: "relative",
                            width: "100%",
                            height: "240px",
                            backgroundColor: '#c5d6e3',
                        }}
                    >
                        <Image src={blog && blog.data.img} alt="Vercel Logo" layout='fill' priority='false'/>
                    </div>

                    <div className={styles.CBoxAData_Box}>
                        <div className={styles.CBoxAData_Title} >
                            <h1>{blog && blog.data.title}</h1>
                        </div>
                        <div className={styles.CBoxAData_Price} >
                            <span>Course fee : ₹{blog && blog.data.sprice} <small><del>₹{blog && blog.data.mprice}</del> </small> </span>
                        </div>
                        <div className={styles.CBoxAData_Tags} >
                            <div className={styles.CBoxAData_TagsItem} >
                                <div className={styles.CBoxAData_iconIMG}>
                                    <Image src='/img/circular-clock.png' alt="Vercel Logo" height="20" width="20" />
                                </div>
                                <div className={styles.CBoxAData_TagsItemData} >
                                    <span>Duration</span> | {blog && blog.data.duration} 
                                </div>
                            </div>

                        </div>
                        <div className={styles.CBoxAData_Tags} >
                            <div className={styles.CBoxAData_TagsItem} >
                                <div className={styles.CBoxAData_iconIMG}>
                                    <Image src='/img/online-education.png' alt="Vercel Logo" height="20" width="20" />
                                </div>
                                <div className={styles.CBoxAData_TagsItemData} >
                                    <span>Learn from</span>  leading experts in the industry
                                </div>
                            </div>

                        </div>
                        <div className={styles.CBoxAData_Tags} >
                            <div className={styles.CBoxAData_TagsItem} >
                                <div className={styles.CBoxAData_iconIMG}>
                                    <Image src='/img/blueprint.png' alt="Vercel Logo" height="20" width="20" />
                                </div>
                                <div className={styles.CBoxAData_TagsItemData} >
                                    {blog && blog.data.tagline} 
                                </div>
                            </div>

                        </div>


                        <div style={{ height: '10px' }}></div>
                    </div>
                    <div style={{ height: '10px' }}></div>
                    <div className={styles.CBoxAData_BoxFotter}>
                        <div className={styles.Btn_icon} style={{ backgroundColor: '#1395ff', width: '100%' }}>
                            <small>Enroll into this Course</small>
                            <span><FiChevronRight /></span>
                        </div>
                    </div>
                </div>
                <div className={styles.CBoxB}>
                    <div className={styles.CousalingBox}>
                        <div className={styles.CousalingBox_all}>
                            <div className={styles.CousalingBox_allA}>
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
                    <div style={{ height: '20px' }}></div>
                    {blog && blog.data.details}

                </div>
            </div>
        </div>
        {/* Footer mobile btn */}
        <div className={styles.FootermobileBtn}>
            <div className={styles.FotterPriceBox}>
                <div className={styles.CBoxAData_Price} >
                    <span>FEE : ₹{blog && blog.data.sprice} <small><del>₹{blog && blog.data.mprice}</del> </small> </span>
                </div>
                <div className={styles.saletag}>
                    <span>Save Today ₹{blog && blog.data.mprice - blog.data.sprice}</span>
                </div>
            </div>
            <div className={styles.hh}>
                <div className={styles.Btn_icon} >
                    <small>Enroll now</small>
                    <span><FiChevronRight /></span>
                </div>
            </div>
        </div>
    </div>
};

export async function getServerSideProps(context) {
    // console.log(ID)
    const ID = context.query.pageno[0];
    const pid = ID;
    let data = await fetch(`${process.env.API_URL}g_course_details.php?pid=${pid}`)
    let myBlog = await data.json();
    return {
        props: { myBlog }, // will be passed to the page component as props
    }
}


export default Slug;