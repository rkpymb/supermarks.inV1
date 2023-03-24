import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import DbNavbar from '../../components/Parts/DbNavbar'
import styles from '../../styles/Home.module.css'
import Head from 'next/head'

import { FiArrowLeft } from "react-icons/fi";

import TestSeries from '../../components/ClassRoomTS/TestSeries'


const Slug = () => {

    const router = useRouter();
    const [value, setValue] = React.useState('VideoLectures');
    const [ID, setID] = useState(null);
    const [CourseID, setCourseID] = useState(null);
    const [ChapterTitle, setChapterTitle] = useState(null);
    const [ShowData, setShowData] = useState(false);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        setID(router.query.pageno[0])
        setCourseID(router.query.pageno[1])
        setChapterTitle(router.query.pageno[2])
        setTimeout(() => {
            setShowData(true)
        }, "1000")
       
    }, [router.query]);

    return <div>
        <DbNavbar />
        <Head>
            <title>Chapter : {ChapterTitle} / {CourseID}</title>
        </Head>
        <div className={styles.Header}>
            <div className={styles.HeaderBox}>
                <div className={styles.HeaderLeft}>
                    <div style={{ fontSize: '20px', cursor: 'pointer' }} onClick={() => router.back()}>
                        <FiArrowLeft />
                    </div>
                    <div style={{ marginLeft: '10px', marginTop: '-5px' }}>
                        <span style={{ fontSize: '15px' }}>{ChapterTitle} ({CourseID}) </span>
                    </div>
                </div>
                <div className={styles.HeaderRight}>

                </div>
            </div>
        </div>
        {ShowData && 
        <div className={styles.container}>
                <TestSeries ChapterID={ID} />
            </div>
        }
    </div>

};

export default Slug;