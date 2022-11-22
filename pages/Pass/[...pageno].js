import React, { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router'
import styles from '../../styles/Home.module.css'
import Head from 'next/head'
import Image from 'next/image'
import Bupass from '../../components/Bupass'
import Navbar from '../../components/Navbar'
import Skeleton from '@mui/material/Skeleton';
import CheckloginContext from '../../context/auth/CheckloginContext'
const Slug = (props) => {
    const Contextdata = useContext(CheckloginContext)
    const router = useRouter();
    const [PidGlobal, setPidGlobal] = useState(props.myBlog.data.pid);
    const [blog, setBlog] = useState(props.myBlog);
   
    const [Retdata, setRetdata] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
   
    useEffect(() => {
        const handleSubmit = async (e) => {
            const dataid = e;
            const sendUM = { dataid }
            const data = await fetch("/api/GetPasslist", {
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
        if (Contextdata.IsLogin == true) {
            handleSubmit(PidGlobal);
        } else {
            router.push('/Login')
        }

      
    }, [router.query]);


    

    return <div>
        <Navbar/>
        <Head>
            <title>{blog && blog.data.title} : EXAM APP</title>
            <meta name="description" content={blog && blog.data.title} />
            <meta property="og:image" content={blog && blog.data.img} />

        </Head>
        <div className={styles.container}>
            <div className={styles.BuyPassbox}>
                <div className={styles.BuyPassboxA}>
                    <div className={styles.BuyPassboxAContent}>
                        <div style={{ height: '30px' }}></div>
                        <Image src='/img/logo_pass.svg' alt="Vercel Logo" height="100" width="200" />
                        <div style={{ marginTop: '-20px', fontSize: '20px', fontWeight: 'bold' }}>
                            <span>Subscribe Pass to ace all exams</span>
                        </div>
                        <Image src='/img/Learnuva-college-student.png' alt="Vercel Logo" height="320" width="500" />
                    </div>
                    <div>
                        {/* <p>dff</p> */}
                    </div>
                </div>
                <div className={styles.BuyPassboxB}>
                   
                    <div style={{ height: '30px' }}></div>
                    <div className={styles.BuyPassboxBContent}>
                        <div>
                            <span style={{ fontSize: '15px', fontWeight: 'bold' }}>Please Pick Your Plan</span>
                        </div>
                    </div>
                    {isLoading &&
                        <div>
                            <div style={{ height: '20px' }}></div>
                            <div style={{marginTop:'5px'}}>
                                <Skeleton variant="rectangular" height={120} />
                            </div>
                            <div style={{marginTop:'5px'}}>
                                <Skeleton variant="rectangular" height={120} />
                            </div>
                            <div style={{marginTop:'5px'}}>
                                <Skeleton variant="rectangular" height={120} />
                            </div>
                       </div>
                    }
                   
                    {!isLoading &&
                    <div className={styles.PlanBoxItemlist}>
                        {Retdata.map((item) => {
                            return <div className={styles.PlanBoxitem} key={item.id}>
                                <div className={styles.PlanBoxitemCon}>
                                    <div className={styles.PassplanTagline}>
                                        <span style={{ fontSize: '10px', fontWeight: '500' }}> {item.tagline}</span>
                                    </div>
                                    <span style={{ fontSize: '15px', fontWeight: 'bold' }}>{item.title}</span>
                                    <div>
                                        <del>{item.mprice}</del>  <span style={{ fontSize: '30px', fontWeight: 'bold' }}> ₹{item.sprice}</span>
                                    </div>
                                    <div>
                                        <span style={{ fontSize: '10px', fontWeight: 'bold' }}>Valid for {item.validityday} Days</span>
                                    </div>
                                </div>

                                <div className={styles.PlanBoxitemConB}>
                                    <Bupass passid={item.id} passtitle={item.title} Maintitle={blog.data.title} pid={item.pid} Validity={item.validityday} Sprice={item.sprice} Mprice={item.mprice} />
                                </div>
                            </div>
                        }

                        )}
                        </div>
                    }
                </div>
            </div>

        </div>
        <div style={{ height: '50px' }}></div>
        <div style={{ fontSize: '15px', fontWeight: 'bold', display: 'flex', backgroundColor: '#0095ff', color: 'white', height: '100px', alignItems: 'center', justifyContent: 'center', padding: '10px' }}><span>16.6L+ students are actively using Our Subscription Pass</span></div>

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