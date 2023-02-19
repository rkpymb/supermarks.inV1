import React, { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router'
import styles from '../../styles/Home.module.css'
import Head from 'next/head'
import Image from 'next/image'
import { BASE_URL, AppName } from '../../Data/config'
import Bupass from '../../components/Bupass'
import NavbarNew from '../../components/Parts/NavbarNew'
import Skeleton from '@mui/material/Skeleton';
import CheckloginContext from '../../context/auth/CheckloginContext'

const Slug = (props) => {
    const [ShowQR, setShowQR] = useState(false);
    const [QRURL, setQRURL] = useState('');
    const [UserMob, setUserMob] = useState('');
    useEffect(() => {
      
        const GenrateUPIQR = async () => {
            const sendUMData = { OrderID: props.urlid }
            const data = await fetch("../api/QR/CourseQR", {
                method: "POST",
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(sendUMData)
            }).then((a) => {
                return a.json();
            })
                .then((parsedQR) => {

                    if (parsedQR.statusdata === true) {
                        window.location.replace(parsedQR.DataRet); 
                    } else {
                        alert('Something went wrong')
                    }

                })


        }
        GenrateUPIQR()

    }, []);

   


    return <div>
        <div className={styles.container} >
            <div >
                <h3 style={{ textAlign: 'center' }}>Loading QR CODE</h3>
                <div style={{ height: '20px' }}> </div>
                <Skeleton variant="rectangular" style={{ minHeight: '80vh' }} />
                <p style={{ textAlign: 'center' }}>Please wait...</p>
            </div>
        </div>
       
    </div>
};

export async function getServerSideProps(context) {
    // console.log(ID)
    const urlid = context.query.pageno[0];
    return {
        props: { urlid }, // will be passed to the page component as props
    }
}


export default Slug;