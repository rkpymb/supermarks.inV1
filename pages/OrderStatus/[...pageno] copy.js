import React, { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router'
import styles from '../../styles/Home.module.css'
import Head from 'next/head'
import Image from 'next/image'
import { BASE_URL, AppName } from '../../Data/config'
import Bupass from '../../components/Bupass'
import NavbarNew from '../../components/Parts/NavbarNew'
import Skeleton from '@mui/material/Skeleton';
import Lottie from 'react-lottie'
import CheckloginContext from '../../context/auth/CheckloginContext'
import * as animationData from '../../Data/Lottie/16271-payment-successful.json'


const Slug = (props) => {
    console.log(props.OID)
    const [Retdata, setRetdata] = useState([]);
    const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }
    const [ShowDATA, setShowDATA] = useState(false);
    useEffect(() => {
        const txn_date = "14-02-2023";
        const GetUPISTATUS = async () => {
            const sendUMData = { OrderID: props.OID, txn_date: txn_date }
            const data = await fetch("../api/QR/QRstatus", {
                method: "POST",
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(sendUMData)
            }).then((a) => {
                return a.json();
            })
                .then((parsedQR) => {
                    console.table(parsedQR.data)
                    if (parsedQR.data.status == 'success') {
                        setRetdata(parsedQR.data)
                        console.table((parsedQR.data))
                        setShowDATA(true)
                    } else {
                        alert('Something went wrong !')
                    }

                })


        }
        GetUPISTATUS()

    }, []);

    return <div>
        <NavbarNew/>
        {!ShowDATA &&
            <div className={styles.container} >
                <div>
                    <Skeleton variant="rectangular" style={{ minHeight: '80vh' }} />
                    <p style={{ textAlign: 'center' }}>Please wait...</p>
                </div>
            </div>
        }
        {ShowDATA &&
        
            <div className={styles.container} >
                <div className={styles.DoneBoxCourse}>
                    <div className={styles.LottieDonepayment}>
                        <Lottie options={defaultOptions}
                            width='100%'
                            height={'100%'}

                            isStopped={false}
                            isPaused={false} />
                    </div>
                    <div className={styles.DoneData}>
                        <div className={styles.DoneDataITEM}>
                            <div className={styles.DoneDataITEMA}>
                                <span className={styles.DoneDataITEMATitle}>Order ID : </span>
                            </div>
                            <div className={styles.DoneDataITEMB}>
                                {Retdata.client_txn_id}
                            </div>
                        </div>
                        <div className={styles.DoneDataITEM}>
                            <div className={styles.DoneDataITEMA}>
                                <span className={styles.DoneDataITEMATitle}>Order Title : </span>
                            </div>
                            <div className={styles.DoneDataITEMB}>
                                {Retdata.p_info}
                            </div>
                        </div>
                        <div className={styles.DoneDataITEM}>
                            <div className={styles.DoneDataITEMA}>
                                <span className={styles.DoneDataITEMATitle}>Status : </span>
                            </div>
                            <div className={styles.DoneDataITEMB}>
                                {Retdata.status}
                            </div>
                        </div>
                        <div className={styles.DoneDataITEM}>
                            <div className={styles.DoneDataITEMA}>
                                <span className={styles.DoneDataITEMATitle}>Order amount : </span>
                            </div>
                            <div className={styles.DoneDataITEMB}>
                               ₹ {Retdata.amount}
                            </div>
                        </div>
                        <div className={styles.DoneDataITEM}>
                            <div className={styles.DoneDataITEMA}>
                                <span className={styles.DoneDataITEMATitle}>Date/Time : </span>
                            </div>
                            <div className={styles.DoneDataITEMB}>
                                {Retdata.createdAt}
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{ height: '50px' }}> </div>

            </div>
            
        }


    </div>
};

export async function getServerSideProps(context) {
    // console.log(ID)
    const OID = context.query.pageno[0];
    return {
        props: { OID }, // will be passed to the page component as props
    }
}


export default Slug;