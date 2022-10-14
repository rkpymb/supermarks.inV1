
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import React, { useRef, useState, useEffect } from "react";
import { useRouter } from 'next/router'
import axios from 'axios';
import Skeleton from '@mui/material/Skeleton';
import Link from 'next/link';
const Caterorieshome = () => {
    const router = useRouter()
    const [Retdata, setRetdata] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [OpenSnakbar, setOpenSnakbar] = useState(true);

    useEffect(() => {

        const handleSubmit = async () => {
            const dataid = '08c5th4rh86ht57h6g';
            const sendUM = { dataid }
            const data = await fetch("/api/Catlist", {
                method: "POST",
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(sendUM)
            }).then((a) => {
                return a.json();
            })
                .then((parsed) => {
                    // console.log(parsed)
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
                <div className={styles.gridbox}>
                    {Retdata.map((item) => {
                        return <div key={item.id}>
                            <Link href={`/category/${item.catid}`}>
                                <div className={styles.CaterorieshomeItem}>
                                    <div>
                                        <Image
                                            src={`https://aitechnolog.com/skillfilt/${item.catimg}`}
                                            alt="Picture of the author"
                                            width={50}
                                            height={50}
                                        />
                                    </div>
                                    <div className={styles.CaterorieshomeItem_title}>
                                        <span>{item.cattitle}</span>
                                       
                                    </div>
                                </div>
                            </Link>
                        </div>
                    }

                    )}

                </div>
            }

        </>
    )
}

export default Caterorieshome