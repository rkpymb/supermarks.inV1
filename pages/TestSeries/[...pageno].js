import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import styles from '../../styles/Home.module.css'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Skeleton from '@mui/material/Skeleton';
import { FiChevronRight, FiNavigation, FiInfo, FiCoffee, FiFileText, FiClock, FiUnlock } from 'react-icons/fi';
import CounsellingForm from '../../components/CounsellingForm'
import Navbar from '../../components/Navbar'
const Slug = (props) => {
    // console.log(props.myBlog)
    const router = useRouter();
    const [blog, setBlog] = useState(props.myBlog);
    const [Buybtn, setBuybtn] = useState(true);
    const [Retdata, setRetdata] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        handleSubmit(blog.data.pid);
        try {
            if (localStorage.getItem('userid')) {
                const Pid = blog.data.pid;
                const usermobnow = localStorage.getItem('userid');
                const sendUser = { UserMobile: usermobnow, Pid: Pid }
                const data = fetch("/api/CheckPassSubscription", {
                    method: "POST",
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(sendUser)
                }).then((a) => {
                    return a.json();
                })
                    .then((parsedUser) => {
                        if (parsedUser.statusdata == true) {
                            setBuybtn(true)
                           
                        } else {
                            setBuybtn(false)
                        }

                    })

            } else {

            }
        } catch (error) {
            console.error(error)

        }
        // check login credential end

        
    
    }, [router.query]);

    const handleSubmit = async (Pid) => {
        const dataid = Pid;
        const sendUM = { dataid }
        const data = await fetch("/api/TestPassChapters", {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(sendUM)
        }).then((a) => {
            return a.json();
        })
            .then((parsed) => {
               
                setRetdata(parsed)
                setIsLoading(false)
               
            })
    }

    return <div>
        <Navbar/>
        <Head>
            <title>{blog && blog.data.title} : EXAM APP</title>
            <meta name="description" content={blog && blog.data.title} />
            <meta property="og:image" content={blog && blog.data.img} />

        </Head>
        <div className={styles.container}>
            <div className={styles.CourseDataBox}>
                <div className={styles.CBoxA}>
                    <div style={{ height: '10px' }}></div>
                    <div className={styles.CBoxAData_Box}>
                        <div  >
                            <h1>{blog && blog.data.title}</h1>
                        </div>

                        <div className={styles.CBoxAData_Tags} >
                            <div className={styles.CBoxAData_TagsItem} >
                                <div className={styles.CBoxAData_iconIMG}>
                                    <Image src='https://aitechnolog.com/examapp/Storage/img/icons/lan.png' alt="Vercel Logo" height="20" width="20" />
                                </div>
                                <div className={styles.CBoxAData_TagsItemData} >
                                    {blog && blog.data.lang}
                                </div>
                            </div>

                        </div>
                        <div className={styles.CBoxAData_Tags} >
                            <div className={styles.CBoxAData_TagsItem} >
                                <div className={styles.CBoxAData_iconIMG}>
                                    <Image src='https://aitechnolog.com/examapp/Storage/img/icons/add-user.png' alt="Vercel Logo" height="20" width="20" />
                                </div>
                                <div className={styles.CBoxAData_TagsItemData} >
                                    {blog && blog.data.enrolled} + Enrolled
                                </div>
                            </div>

                        </div>
                        <div className={styles.CBoxAData_Tags} >
                            <div className={styles.CBoxAData_TagsItem} >
                                <div className={styles.CBoxAData_iconIMG}>
                                    <Image src='https://aitechnolog.com/examapp/Storage/img/icons/checked.png' alt="Vercel Logo" height="20" width="20" />
                                </div>
                                <div className={styles.CBoxAData_TagsItemData} >
                                    {blog && blog.data.tagline}
                                </div>
                            </div>

                        </div>
                        <div style={{ height: '30px' }}></div>

                        {Buybtn &&
                            <div className={styles.EnrollBtnBox}>
                                <Link href={`/Pass/${blog.data.pid}`}>
                                    <div className={styles.Btn_icon}>
                                        <small>Enroll into Test series </small>
                                        <span><FiChevronRight /></span>
                                    </div>
                                </Link>
                            </div>
                        }
                        {!Buybtn &&
                            <div className={styles.EnrollBtnBox}>
                                <Link href={`/ClassRoom/${blog.data.pid}`}>
                                    <div className={styles.Btn_icon}>
                                        <small>View Test Series </small>
                                        <span><FiChevronRight /></span>
                                    </div>
                                </Link>
                            </div>
                        }
                    </div>
                    

                </div>
                <div className={styles.CBoxB}>
                    <Image src='/wdwwdw.jpg' alt="Vercel Logo" height="400" width="800" />
                </div>
            </div>


        </div>
        <div className={styles.container}>
            <div className={styles.testDestailsStiker}>
                <div className={styles.TestCounterbox}>
                    <div className={styles.TestCounterItem}>
                        <div className={styles.TestCounterItemImg}>
                            <Image src='/img/all-india-rank_All_1563371050.svg' alt="Vercel Logo" height="30" width="30" />
                        </div>
                        <div className={styles.TestCounterItemText}>
                            <span>All India Rank</span>
                            <div>
                                <span style={{ fontSize: '10px' }}>Compete with thousands of students across India</span>
                            </div>
                        </div>

                    </div>
                    <div className={styles.TestCounterItem}>
                        <div className={styles.TestCounterItemImg}>
                            <Image src='/img/personal-recommendation_All_1563371008.svg' alt="Vercel Logo" height="30" width="30" />
                        </div>
                        <div className={styles.TestCounterItemText}>
                            <span>Personal recommendation</span>
                            <div>
                                <span style={{ fontSize: '10px' }}>Compete with thousands of students across India</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.TestCounterItem}>
                        <div className={styles.TestCounterItemImg}>
                            <Image src='/img/no-1-quality_All_1563371058.svg' alt="Vercel Logo" height="30" width="30" />
                        </div>
                        <div className={styles.TestCounterItemText}>
                            <span>No.1 Quality</span>
                            <div>
                                <span style={{ fontSize: '10px' }}>Compete with thousands of students across India</span>
                            </div>
                        </div>
                    </div>
                </div>
                

            </div>

        </div>
        <div>
            <div className={styles.container_full} style={{ backgroundColor: '#f4f7f7', padding: '10px' }}>
                <div style={{ height: '30px' }}></div>
                <div className={styles.container}>
                    <div className={styles.TestPassDetailsbox}>
                        <span style={{ fontWeight: 'bold', fontSize: '20px' }}><FiNavigation /></span>
                        <span style={{ fontWeight: 'bold', fontSize: '20px', marginLeft: '5px' }}>Test series Overview</span>
                        <div style={{ paddingTop: '10px' }}>{blog && blog.data.details}</div>
                    </div>
                </div>
                <div style={{ height: '30px' }}></div>
            </div>

        </div>



        <div className={styles.container} >
            {isLoading &&
                <div>
                    <Skeleton variant="rectangular" height={150} />
                </div>
            }
            {!isLoading &&
            <div className={styles.testboxtestlist}>
               
                <div className={styles.testboxtestlistA} >
                    {Retdata.map((item) => {                       
                        return <div className={styles.Testlistitem} key={item.id}>

                        <div className={styles.Testlistitems}>

                                <div> <span>{item.title}</span></div>
                            <div className={styles.testiconsBox}>
                                <div className={styles.testiconsItemMain}>
                                        <span><FiCoffee /></span>   <span>{item.TotalQuestions} Questions</span>
                                </div>
                                <div className={styles.testiconsItemMain}>
                                        <span><FiFileText /></span>   <span>{item.totalMarks} Marks</span>
                                </div>
                                <div className={styles.testiconsItemMain}>
                                        <span><FiClock /></span>   <span>{item.duration} Mins</span>
                                </div>
                            </div>
                        </div>
                        {Buybtn &&
                            <Link href={`/Pass/${blog.data.pid}`}>
                                <div className={styles.Btn_icon}>
                                    <span><FiUnlock /></span>
                                    <small>unlock </small>

                                </div>
                            </Link>
                        }
                        {!Buybtn &&
                            <Link href={`/ClassRoom/${blog.data.pid}`}>
                                <div className={styles.Btn_icon}>
                                    <span><FiChevronRight /></span>
                                    <small>Start</small>

                                </div>
                            </Link>
                        }

                    </div>
                    }

                    )}

                </div>

            </div>
            }
            <div style={{ height: '30px' }}></div>
        </div>
        <div style={{ height: '30px' }}></div>
        {/* Footer mobile btn */}
        <div className={styles.FootermobileBtn}>
            {Buybtn &&
                <div className={styles.FotterPriceBox}>
                    <div className={styles.CBoxAData_Price} >
                        <span>Subscribe to Acces</span>
                    </div>
                    <div className={styles.saletag}>
                        <span>{blog && blog.data.enrolled} + Enrolled</span>
                    </div>
                </div>
            }
            
            {Buybtn &&
            <div className={styles.hh}>
                <Link href={`/Pass/${blog.data.pid}`}>
                    <div className={styles.Btn_icon} >
                        <small>Enroll now</small>
                        <span><FiChevronRight /></span>
                    </div>
                </Link>

            </div>
            }
            {!Buybtn &&
                <div className={styles.FotterPriceBox}>
                    <div className={styles.CBoxAData_Price} >
                        <span>PASS SUBSCRIBED </span>
                    </div>
                    <div className={styles.saletag}>
                        <span>Active</span>
                    </div>
                </div>
            }

            {!Buybtn &&
                <div className={styles.hh}>
                    <Link href={`/Pass/${blog.data.pid}`}>
                        <div className={styles.Btn_icon} >
                            <small>View Test Series</small>
                            <span><FiChevronRight /></span>
                        </div>
                    </Link>

                </div>
            }
        </div>
    </div>
};

export async function getServerSideProps(context) {
    // console.log(ID)
    const ID = context.query.pageno[0];
    const pid = ID;
    let data = await fetch(`${process.env.API_URL}getTestPassDetails.php?pid=${pid}`)
    let myBlog = await data.json();
    return {
        props: { myBlog }, // will be passed to the page component as props
    }
}


export default Slug;