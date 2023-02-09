import React from 'react'
import TestHomelist from '../components/Homepage/TestHomelist'
import styles from '../styles/Home.module.css'
import NavbarNew from '../components/Parts/NavbarNew'
import Head from 'next/head'
import { BASE_URL, AppName } from '../Data/config'
import Footermenu from '../components/Parts/Footermenu'
import CatList from '../components/Homepage/CatList'
const AllTestSeries = () => {
  return (
    <>
      <Head>
        <title>TestSeries : {AppName} Best Test Series For CBSE, ICSE, JEE</title>
        <meta name="description" content="Best Test Series For CBSE, ICSE, JEE" />
      </Head>
      <NavbarNew />
      <div className={styles.container} >
        <CatList />
      </div>
      <div className={styles.container} style={{minHeight:'100vh'}}>
        <TestHomelist />
      </div>
     
      <Footermenu/>
    </>
  )
}

export default AllTestSeries
