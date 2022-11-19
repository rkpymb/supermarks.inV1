import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'

import styles from '../../styles/Quizroom.module.css'
import Head from 'next/head'
import TestPasschaper from '../../components/TestPasschaper'
import { FiArrowLeft } from "react-icons/fi";
const Slug = (props) => {
    props.SetHeader_true(false)
    // console.log(props.myBlog.data.pid)
    const router = useRouter();
    const [ID, setID] = useState(props.ID);
    return <div>
        <Head>
            <title>{props.ID}: EXAM APP</title>
          

        </Head>
        <div className={styles.Header}>
            <div className={styles.HeaderBox}>
                <div className={styles.HeaderLeft}>
                    <div style={{ fontSize: '20px' }}>
                        <FiArrowLeft />
                    </div>
                    <div style={{ marginLeft: '10px' , marginTop: '-5px' }}>
                        <span style={{ fontSize: '15px' }}>{ID}</span>
                    </div>
                </div>
                <div className={styles.HeaderRight}>
                    
                </div>
            </div>
        </div>
        <div className={styles.container}>
            <TestPasschaper SetHeader_true={props.SetHeader_true} ID={ID} />
        </div>
    </div>
      
};

export async function getServerSideProps(context) {
    // console.log(ID)
    const ID = context.query.pageno[0];
    return {
        props: { ID }, // will be passed to the page component as props
    }
}


export default Slug;