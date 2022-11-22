import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'

import styles from '../../styles/Quizroom.module.css'
import Head from 'next/head'
import TestPasschaper from '../../components/TestPasschaper'
import { FiArrowLeft } from "react-icons/fi";
import SecondHeader from '../../components/SecondHeader'
const Slug = (props) => {
    
    // console.log(props.myBlog.data.pid)
    const router = useRouter();
    const [ID, setID] = useState(props.ID);
    return <div>
        <Head>
            <title>{props.ID}: EXAM APP</title>
        </Head>
        <SecondHeader Title={props.ID} />
        <div className={styles.container}>
            <TestPasschaper ID={ID} />
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