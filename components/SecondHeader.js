import { useState, useEffect } from 'react'
import Head from 'next/head'
import styles from '../styles/Quizroom.module.css'
import { FiArrowLeft } from "react-icons/fi";
import Link from 'next/link'
import { useRouter } from 'next/router'

const SecondHeader = ({ Title }) => {
    const router = useRouter()
    return (
        <div className={styles.Header}>
            <div className={styles.HeaderBox}>
                <div className={styles.HeaderLeft}>
                    <div style={{ fontSize: '20px', cursor: 'pointer' }} onClick={() => router.back()}>
                        <FiArrowLeft />
                    </div>
                    <div style={{ marginLeft: '10px', marginTop: '-5px' }}>
                        <span style={{ fontSize: '15px' }}>{Title}</span>
                    </div>
                </div>
                <div className={styles.HeaderRight}>

                </div>
            </div>
        </div>
    )
}

export default SecondHeader
