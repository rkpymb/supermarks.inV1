import React from 'react'
import CoursesHomelist from '../components/Homepage/CoursesHomelist'
import styles from '../styles/Home.module.css'
import NavbarNew from '../components/Parts/NavbarNew'
import Head from 'next/head'
import { BASE_URL, AppName } from '../Data/config'
import Footermenu from '../components/Parts/Footermenu'
import CatList from '../components/Homepage/CatList'
const AllCourses = () => {
    return (
        <>
            <Head>
                <title>Courses : {AppName} Best Courses For CBSE, ICSE, JEE</title>
                <meta name="description" content="Best Courses For CBSE, ICSE, JEE" />
            </Head>
            <NavbarNew />
           
            <div className={styles.container} >
                <CatList />
            </div>
            <div className={styles.container} style={{ minHeight: '100vh' }}>
                <CoursesHomelist />
            </div>

            <Footermenu />
        </>
    )
}

export default AllCourses
