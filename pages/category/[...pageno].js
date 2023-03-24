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

const Slug = () => {
    const router = useRouter();
    const [ShowData, setShowData] = useState(false);
    const [CATID, setCATID] = React.useState();
    const { pageno } = router.query
    useEffect(() => {
        const Data = String(pageno);
        setCATID(Data)
        setTimeout(() => {
            console.log(Data)
            setShowData(true)
        }, "1000")
    }, [router.query])

    return <>
        <NavbarNew />
        <Head>
            <title>Category : {CATID} -{AppName}</title>
            <link rel="icon" href="../logo/feviimg.svg" />
        </Head>
        {ShowData &&
            <div className={styles.container} >

                <Listbox CATID={CATID} />
            </div>
        
        }
      
       
    </>
};




export default Slug;