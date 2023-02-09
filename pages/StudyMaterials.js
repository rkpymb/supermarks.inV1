import React from 'react'
import AllTestSerieslist from '../components/Lists/AllTestSerieslist'
import styles from '../styles/Home.module.css'
import NavbarNew from '../components/Parts/NavbarNew'
import Head from 'next/head'
import { BASE_URL, AppName } from '../Data/config'
import Footermenu from '../components/Parts/Footermenu'
const StudyMaterials = () => {
    return (
        <>
            <Head>
                <title>Study Materials : {AppName} Best Study Materials For CBSE, ICSE, JEE</title>
                <meta name="description" content="Best Study Materials For CBSE, ICSE, JEE" />
            </Head>
            <NavbarNew />
            <div className={styles.container} style={{ minHeight: '100vh' }}>
                <AllTestSerieslist />
            </div>

            <Footermenu />
        </>
    )
}

export default StudyMaterials
