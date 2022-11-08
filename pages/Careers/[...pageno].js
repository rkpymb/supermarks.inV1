import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import styles from '../../styles/Home.module.css'
import Head from 'next/head'

import { BsArrowRightCircleFill } from "react-icons/bs";
import Link from 'next/link';
const Slug = (props) => {
    console.log(props.myBlog)
    const router = useRouter();

    const [blog, setBlog] = useState(props.myBlog);
    const [jobslug, setjobSlug] = useState(props.myBlog.slug);
    return <div>
        <Head>
            <title>{blog && blog.data.jobtitle} : Skillfilt</title>
            <meta name="description" content={blog && blog.data.jobtitle} />
            <meta property="og:image" content={blog && blog.data.img} />

        </Head>
        <div className={styles.container}>
            <div className={styles.Box70}>
                <div className={styles.Jobbox}>
                    
                    <div className={styles.JobDescbox}>
                        <h2>{blog && blog.data.jobtitle}</h2>
                        
                        <table>
                            <tbody>
                                <tr>
                                    <td className={styles.JobDescbox_title}>Job Title </td>
                                    <td>:</td>
                                    <td>{blog && blog.data.jobtitle}</td>
                                </tr>
                                <tr>
                                    <td className={styles.JobDescbox_title}>Job Type </td>
                                    <td>:</td>
                                    <td>{blog && blog.data.job_type}</td>
                                </tr>
                                <tr>
                                    <td className={styles.JobDescbox_title}>Designation</td>
                                    <td>:</td>
                                    <td>{blog && blog.data.designation}</td>
                                </tr>
                                <tr>
                                    <td className={styles.JobDescbox_title}>job Details</td>
                                    <td>:</td>
                                    <td>{blog && blog.data.job_desc}</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className={styles.Appybtnbox}>
                            <Link href={`/Apply/${blog && blog.data.slug}`}>
                            <div className={styles.loginbtnTop}>
                                    <span><BsArrowRightCircleFill jobslug={jobslug} /></span>
                                <small>Apply now</small>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
};

export async function getServerSideProps(context) {
    // console.log(ID)
    const ID = context.query.pageno[0];
    const slug = ID;
    let data = await fetch(`${process.env.API_URL}g_job_details.php?slug=${slug}`)
    let myBlog = await data.json();

    return {
        props: { myBlog }, // will be passed to the page component as props
    }
}


export default Slug;