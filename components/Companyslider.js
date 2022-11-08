import React from 'react'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import { useRef, useState, useEffect } from "react";
import { useRouter } from 'next/router'
import Skeleton from '@mui/material/Skeleton';

const Companyslider = () => {
    const router = useRouter()
    const [Retdata, setRetdata] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [OpenSnakbar, setOpenSnakbar] = useState(true);

    useEffect(() => {

        const handleSubmit = async () => {
            const dataid = '08c5th4rh86ht57h6g';
            const sendUM = { dataid }
            const data = await fetch("/api/Companyslider", {
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
                    setRetdata(parsed)
                    setIsLoading(false)
                })
        }
        handleSubmit()


    }, [router.query])
    return (
        <>
            {isLoading &&
                <div >
                    <Skeleton variant="rectangular" height={150} />
                </div>
            }
            {!isLoading &&
                <div className={styles.Companyslider}>
                    <div className={styles.TitlebtnBox} >
                        <h1>Trusted by over 800 companies</h1>
                    </div>
                    <marquee scrollamount="5" loop="infinite" className={styles.marquee}>
                        <div className={styles.CompanysliderItemBox}>
                            {Retdata.map((item) => {
                                return <div key={item.id} className={styles.CompanysliderItem}>
                                   

                                    <div
                                        style={{
                                            position: "relative",
                                            width: "100%",
                                            height: "70px",
                                        }}
                                    >
                                        <Image src={`https://aitechnolog.com/skillfilt/Storage/img/panel/companyslider/${item.img}`} alt="Vercel Logo" layout='fill' />
                                    </div>
                                </div>

                            }
                            )}
                        </div>
                        

                    </marquee>


                </div>

            }


        </>



    )
}

export default Companyslider
