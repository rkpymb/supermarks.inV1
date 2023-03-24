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

        const OrderCheck = async () => {
            const sendUMData = { OrderID: props.OID }
            const data = await fetch("/api/QR/OrderPaymentData", {
                method: "POST",
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(sendUMData)
            }).then((a) => {
                return a.json();
            })
                .then((parsedORDERCHEK) => {
                    if (parsedORDERCHEK.statusdata == true) {
                        setRetdata(parsedORDERCHEK.RetData)
                        
                        setShowDATA(true)
                    } else {
                        alert('Something went wrong !')
                    }

                })


        }
        OrderCheck()
        

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
                                {Retdata.Orderid}
                            </div>
                        </div>
                        <div className={styles.DoneDataITEM}>
                            <div className={styles.DoneDataITEMA}>
                                <span className={styles.DoneDataITEMATitle}>Order Title : </span>
                            </div>
                            <div className={styles.DoneDataITEMB}>
                                {Retdata.OrderTitle}
                            </div>
                        </div>
                        <div className={styles.DoneDataITEM}>
                            <div className={styles.DoneDataITEMA}>
                                <span className={styles.DoneDataITEMATitle}>Status : </span>
                            </div>
                            <div className={styles.DoneDataITEMB}>
                                {Retdata.OrderStatusText}
                            </div>
                        </div>
                        <div className={styles.DoneDataITEM}>
                            <div className={styles.DoneDataITEMA}>
                                <span className={styles.DoneDataITEMATitle}>Order amount : </span>
                            </div>
                            <div className={styles.DoneDataITEMB}>
                               ₹ {Retdata.amt}
                            </div>
                        </div>
                        <div className={styles.DoneDataITEM}>
                            <div className={styles.DoneDataITEMA}>
                                <span className={styles.DoneDataITEMATitle}>Date/Time : </span>
                            </div>
                            <div className={styles.DoneDataITEMB}>
                                {Retdata.date},{Retdata.time}
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