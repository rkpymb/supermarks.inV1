import Head from 'next/head'
import{ useRef, useState, useEffect } from 'react';
import styles from '../styles/Home.module.css'

import NavbarNew from '../components/Parts/NavbarNew'
import { useRouter } from 'next/router'

import Footermenu from '../components/Parts/Footermenu'
import { BASE_URL, AppName } from '../Data/config'
import axios from 'axios';
export default function Home() {
    const router = useRouter()
    const [Retdata, setRetdata] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [OpenSnakbar, setOpenSnakbar] = useState(true);


    useEffect(() => {
        setIsLoading(true)
        const handleSubmit = async () => {
            const dataid = {
                "merchantId": "MFQ0FO7I8",
                "transactionId": "TX32321849644234s",
                "merchantOrderId": "TX32321849644234s",
                "amount": 1000,
                "storeId": "MS2207211747278958138844",
                "terminalId": "MST2207211750081913671753",
                "expiresIn": 1800,
                "gstBreakup": {
                    "gst": 100,
                    "cgst": 25,
                    "cess": 25,
                    "sgst": 25,
                    "igst": 25,
                    "gstIncentive": 100,
                    "gstPercentage": 10
                },
                "invoiceDetails": {
                    "invoiceNumber": "123456ffff4435",
                    "invoiceDate": "2021-06-29T10:13:54.022Z",
                    "invoiceName": "ddfd"
                }
            }
           
            let encoded = btoa(JSON.stringify(dataid))
          
            const sendUM = { encoded }
            const data = await fetch("/api/Phonepe", {
                method: "POST",
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(sendUM)
            }).then((a) => {
                return a.json();
            })
                .then((parsed) => {

                   console.log(parsed)
                })
        }
        handleSubmit()


    }, [router.query])
    return (
        <><NavbarNew />
            {/* <Websitemenu /> */}
            <Head>
                <title>Payment :</title>
             
            </Head>
            <div className={styles.container_full} style={{ backgroundColor: '#efecff' }}>
                <div className={styles.container} >
                    
                </div>
            </div>
           

         
            <Footermenu />
        </>

    )
}
