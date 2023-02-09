import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import styles from '../../styles/Home.module.css'
import Head from 'next/head'
import Image from 'next/image'
import { BASE_URL, AppName } from '../../Data/config'
import Link from 'next/link'
import { FiChevronRight } from 'react-icons/fi';
import Listbox from '../../components/Parts/CatPage/Listbox'
import NavbarNew from '../../components/Parts/NavbarNew'

const Slug = ({ CATID }) => {
    // console.log(props)
    const router = useRouter();
    

    useEffect(() => {
       
    

    }, [router.query])

    return <>
        <NavbarNew />
        <Head>
            <title>Category : {CATID} -{BASE_URL}</title>
            
        </Head>
        
        <div className={styles.container} >
           
            <Listbox CATID={CATID} />
        </div>
       
    </>
};

export async function getServerSideProps(context) {
  
    const CATID = context.query.pageno[0];
    
   
    return {
        props: { CATID }, // will be passed to the page component as props
    }
}


export default Slug;