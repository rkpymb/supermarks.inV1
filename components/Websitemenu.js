import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import { style } from '@mui/system';
export default function Websitemenu() {
   

    return (
        <div className={styles.Websitemenu}>
            <Box
            >
                <Tabs
                   
                    variant="scrollable"
                    scrollButtons
                >
                    <Link href='/Offers'>
                        <Tab label="Offers" className={styles.WebsitemenuLabel} />
                    </Link>
                    <Link href='/TestSeries'>
                        <Tab label="Test series" className={styles.WebsitemenuLabel} />
                    </Link>
                    <Link href='/StudyMaterials'>
                        <Tab label="Study materials" className={styles.WebsitemenuLabel} />
                    </Link>
                    
                    <Link href='/Notifications'>
                        <Tab label="Notifications" className={styles.WebsitemenuLabel} />
                    </Link>
                   
                    <Link href='/Dashboard'>
                        <Tab label="Dashboard" className={styles.WebsitemenuLabel} />
                    </Link>
                    <Link href='/Mytest'>
                        <Tab label="Subscriptions" className={styles.WebsitemenuLabel} />
                    </Link>
                    <Link href='/MyAttempts'>
                        <Tab label="Test Attempts" className={styles.WebsitemenuLabel} />
                    </Link>
                    <Link href='/Donwloads'>
                        <Tab label="Donwloads" className={styles.WebsitemenuLabel} />
                    </Link>
                    <Link href='/App'>
                        <Tab label="Get App" className={styles.WebsitemenuLabel} />
                    </Link>
                   
                   
                   
                   
                </Tabs>
            </Box>
        </div>
    );
}
