import React from 'react'
import styles from '../styles/Home.module.css'
import { FiFileText, FiHome, FiCheckSquare, FiUser } from "react-icons/fi";
import Link from 'next/link';
const Dashboardmenu = () => {
    return (
        <div className={styles.DashboardMenuBox}>
            <Link href='/'>
                <div className={styles.DashboardMenuItem}>
                    <div> <FiHome /></div>
                    <div style={{ marginLeft: '5px', marginTop: '-5px' }}> <span>Home Page</span></div>
                </div>
            </Link>
            <Link href='/Mytest'>
                <div className={styles.DashboardMenuItem}>
                    <div> <FiFileText /></div>
                    <div style={{ marginLeft: '5px', marginTop: '-5px' }}> <span>My Tests Series</span></div>
                </div>
            </Link>
            <Link href='/MyAttempts'>
                <div className={styles.DashboardMenuItem}>
                    <div> <FiCheckSquare /></div>
                    <div style={{ marginLeft: '5px', marginTop: '-5px' }}> <span>My Tests Attempts</span></div>
                </div>
            </Link>
            <Link href='/MyAccount'>
                <div className={styles.DashboardMenuItem}>
                    <div> <FiUser /></div>
                    <div style={{ marginLeft: '5px', marginTop: '-5px' }}> <span>My Account</span></div>
                </div>
            </Link>
        </div>
    )
}

export default Dashboardmenu
