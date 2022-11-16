import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import styles from '../../styles/Home.module.css'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { FiChevronRight, FiNavigation, FiInfo, FiCoffee, FiFileText, FiClock, FiUnlock } from 'react-icons/fi';
import CounsellingForm from '../../components/CounsellingForm'
const Slug = (props) => {
    // console.log(props.myBlog)
    const router = useRouter();
    const [blog, setBlog] = useState(props.myBlog);
    return <div>
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
                <div className={styles.CBoxAData_BoxFotter}>
                    <Link href={`/Pass/${blog.data.pid}`}>
                    <div className={styles.Btn_icon}>
                        <small>Enroll into Test series </small>
                        <span><FiChevronRight /></span>
                        </div>
                    </Link>
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
            <div className={styles.testboxtestlist} >
                <div className={styles.testboxtestlistA} >
                    <div className={styles.Testlistitem}>
                       
                        <div className={styles.Testlistitems}>
                           
                            <div> <span>SBI Clerk Memory Based Paper (Held on: 12 Nov 2022 Shift 1)</span></div>
                            <div className={styles.testiconsBox}> 
                                <div className={styles.testiconsItemMain}>
                                    <span><FiCoffee /></span>   <span>100 Questions</span>
                                </div>
                                <div className={styles.testiconsItemMain}>
                                    <span><FiFileText /></span>   <span>100 Marks</span>
                                </div>
                                <div className={styles.testiconsItemMain}>
                                    <span><FiClock /></span>   <span>60 Mins</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.Btn_icon}>
                            <span><FiUnlock /></span>
                            <small>unlock </small>
                          
                        </div>
                    </div>
                    <div className={styles.Testlistitem}>
                       
                        <div className={styles.Testlistitems}>
                           
                            <div> <span>SBI Clerk Memory Based Paper (Held on: 12 Nov 2022 Shift 1)</span></div>
                            <div className={styles.testiconsBox}> 
                                <div className={styles.testiconsItemMain}>
                                    <span><FiCoffee /></span>   <span>100 Questions</span>
                                </div>
                                <div className={styles.testiconsItemMain}>
                                    <span><FiFileText /></span>   <span>100 Marks</span>
                                </div>
                                <div className={styles.testiconsItemMain}>
                                    <span><FiClock /></span>   <span>60 Mins</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.Btn_icon}>
                            <span><FiUnlock /></span>
                            <small>unlock </small>
                          
                        </div>
                    </div>
                    <div className={styles.Testlistitem}>
                       
                        <div className={styles.Testlistitems}>
                           
                            <div> <span>SBI Clerk Memory Based Paper (Held on: 12 Nov 2022 Shift 1)</span></div>
                            <div className={styles.testiconsBox}> 
                                <div className={styles.testiconsItemMain}>
                                    <span><FiCoffee /></span>   <span>100 Questions</span>
                                </div>
                                <div className={styles.testiconsItemMain}>
                                    <span><FiFileText /></span>   <span>100 Marks</span>
                                </div>
                                <div className={styles.testiconsItemMain}>
                                    <span><FiClock /></span>   <span>60 Mins</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.Btn_icon}>
                            <span><FiUnlock /></span>
                            <small>unlock </small>
                          
                        </div>
                    </div>
                    <div className={styles.Testlistitem}>
                       
                        <div className={styles.Testlistitems}>
                           
                            <div> <span>SBI Clerk Memory Based Paper (Held on: 12 Nov 2022 Shift 1)</span></div>
                            <div className={styles.testiconsBox}> 
                                <div className={styles.testiconsItemMain}>
                                    <span><FiCoffee /></span>   <span>100 Questions</span>
                                </div>
                                <div className={styles.testiconsItemMain}>
                                    <span><FiFileText /></span>   <span>100 Marks</span>
                                </div>
                                <div className={styles.testiconsItemMain}>
                                    <span><FiClock /></span>   <span>60 Mins</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.Btn_icon}>
                            <span><FiUnlock /></span>
                            <small>unlock </small>
                          
                        </div>
                    </div>
                    <div className={styles.Testlistitem}>
                       
                        <div className={styles.Testlistitems}>
                           
                            <div> <span>SBI Clerk Memory Based Paper (Held on: 12 Nov 2022 Shift 1)</span></div>
                            <div className={styles.testiconsBox}> 
                                <div className={styles.testiconsItemMain}>
                                    <span><FiCoffee /></span>   <span>100 Questions</span>
                                </div>
                                <div className={styles.testiconsItemMain}>
                                    <span><FiFileText /></span>   <span>100 Marks</span>
                                </div>
                                <div className={styles.testiconsItemMain}>
                                    <span><FiClock /></span>   <span>60 Mins</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.Btn_icon}>
                            <span><FiUnlock /></span>
                            <small>unlock </small>
                          
                        </div>
                    </div>
                    <div className={styles.Testlistitem}>
                       
                        <div className={styles.Testlistitems}>
                           
                            <div> <span>SBI Clerk Memory Based Paper (Held on: 12 Nov 2022 Shift 1)</span></div>
                            <div className={styles.testiconsBox}> 
                                <div className={styles.testiconsItemMain}>
                                    <span><FiCoffee /></span>   <span>100 Questions</span>
                                </div>
                                <div className={styles.testiconsItemMain}>
                                    <span><FiFileText /></span>   <span>100 Marks</span>
                                </div>
                                <div className={styles.testiconsItemMain}>
                                    <span><FiClock /></span>   <span>60 Mins</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.Btn_icon}>
                            <span><FiUnlock /></span>
                            <small>unlock </small>
                          
                        </div>
                    </div>
                    <div className={styles.Testlistitem}>
                       
                        <div className={styles.Testlistitems}>
                           
                            <div> <span>SBI Clerk Memory Based Paper (Held on: 12 Nov 2022 Shift 1)</span></div>
                            <div className={styles.testiconsBox}> 
                                <div className={styles.testiconsItemMain}>
                                    <span><FiCoffee /></span>   <span>100 Questions</span>
                                </div>
                                <div className={styles.testiconsItemMain}>
                                    <span><FiFileText /></span>   <span>100 Marks</span>
                                </div>
                                <div className={styles.testiconsItemMain}>
                                    <span><FiClock /></span>   <span>60 Mins</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.Btn_icon}>
                            <span><FiUnlock /></span>
                            <small>unlock </small>
                          
                        </div>
                    </div>
                    <div className={styles.Testlistitem}>
                       
                        <div className={styles.Testlistitems}>
                           
                            <div> <span>SBI Clerk Memory Based Paper (Held on: 12 Nov 2022 Shift 1)</span></div>
                            <div className={styles.testiconsBox}> 
                                <div className={styles.testiconsItemMain}>
                                    <span><FiCoffee /></span>   <span>100 Questions</span>
                                </div>
                                <div className={styles.testiconsItemMain}>
                                    <span><FiFileText /></span>   <span>100 Marks</span>
                                </div>
                                <div className={styles.testiconsItemMain}>
                                    <span><FiClock /></span>   <span>60 Mins</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.Btn_icon}>
                            <span><FiUnlock /></span>
                            <small>unlock </small>
                          
                        </div>
                    </div>
                    <div className={styles.Testlistitem}>
                       
                        <div className={styles.Testlistitems}>
                           
                            <div> <span>SBI Clerk Memory Based Paper (Held on: 12 Nov 2022 Shift 1)</span></div>
                            <div className={styles.testiconsBox}> 
                                <div className={styles.testiconsItemMain}>
                                    <span><FiCoffee /></span>   <span>100 Questions</span>
                                </div>
                                <div className={styles.testiconsItemMain}>
                                    <span><FiFileText /></span>   <span>100 Marks</span>
                                </div>
                                <div className={styles.testiconsItemMain}>
                                    <span><FiClock /></span>   <span>60 Mins</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.Btn_icon}>
                            <span><FiUnlock /></span>
                            <small>unlock </small>
                          
                        </div>
                    </div>
                    <div className={styles.Testlistitem}>
                       
                        <div className={styles.Testlistitems}>
                           
                            <div> <span>SBI Clerk Memory Based Paper (Held on: 12 Nov 2022 Shift 1)</span></div>
                            <div className={styles.testiconsBox}> 
                                <div className={styles.testiconsItemMain}>
                                    <span><FiCoffee /></span>   <span>100 Questions</span>
                                </div>
                                <div className={styles.testiconsItemMain}>
                                    <span><FiFileText /></span>   <span>100 Marks</span>
                                </div>
                                <div className={styles.testiconsItemMain}>
                                    <span><FiClock /></span>   <span>60 Mins</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.Btn_icon}>
                            <span><FiUnlock /></span>
                            <small>unlock </small>
                          
                        </div>
                    </div>
                    <div className={styles.Testlistitem}>
                       
                        <div className={styles.Testlistitems}>
                           
                            <div> <span>SBI Clerk Memory Based Paper (Held on: 12 Nov 2022 Shift 1)</span></div>
                            <div className={styles.testiconsBox}> 
                                <div className={styles.testiconsItemMain}>
                                    <span><FiCoffee /></span>   <span>100 Questions</span>
                                </div>
                                <div className={styles.testiconsItemMain}>
                                    <span><FiFileText /></span>   <span>100 Marks</span>
                                </div>
                                <div className={styles.testiconsItemMain}>
                                    <span><FiClock /></span>   <span>60 Mins</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.Btn_icon}>
                            <span><FiUnlock /></span>
                            <small>unlock </small>
                          
                        </div>
                    </div>
                    <div className={styles.Testlistitem}>
                       
                        <div className={styles.Testlistitems}>
                           
                            <div> <span>SBI Clerk Memory Based Paper (Held on: 12 Nov 2022 Shift 1)</span></div>
                            <div className={styles.testiconsBox}> 
                                <div className={styles.testiconsItemMain}>
                                    <span><FiCoffee /></span>   <span>100 Questions</span>
                                </div>
                                <div className={styles.testiconsItemMain}>
                                    <span><FiFileText /></span>   <span>100 Marks</span>
                                </div>
                                <div className={styles.testiconsItemMain}>
                                    <span><FiClock /></span>   <span>60 Mins</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.Btn_icon}>
                            <span><FiUnlock /></span>
                            <small>unlock </small>
                          
                        </div>
                    </div>
                    <div className={styles.Testlistitem}>
                       
                        <div className={styles.Testlistitems}>
                           
                            <div> <span>SBI Clerk Memory Based Paper (Held on: 12 Nov 2022 Shift 1)</span></div>
                            <div className={styles.testiconsBox}> 
                                <div className={styles.testiconsItemMain}>
                                    <span><FiCoffee /></span>   <span>100 Questions</span>
                                </div>
                                <div className={styles.testiconsItemMain}>
                                    <span><FiFileText /></span>   <span>100 Marks</span>
                                </div>
                                <div className={styles.testiconsItemMain}>
                                    <span><FiClock /></span>   <span>60 Mins</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.Btn_icon}>
                            <span><FiUnlock /></span>
                            <small>unlock </small>
                          
                        </div>
                    </div>

                </div>
               
            </div>

            <div style={{ height: '30px' }}></div>
        </div>
        <div style={{ height: '30px' }}></div>
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
                <Link href={`/Pass/${blog.data.pid}`}>
                <div className={styles.Btn_icon} >
                    <small>Enroll now</small>
                    <span><FiChevronRight /></span>
                </div>
                </Link>
            </div>
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