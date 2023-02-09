
import styles from '../../styles/Home.module.css'
import Image from 'next/image'
import React, { useRef, useState, useEffect } from "react";
import { useRouter } from 'next/router'
import { BASE_URL } from '../../Data/config'
import Skeleton from '@mui/material/Skeleton';
import Link from 'next/link';
const CategoriesList = () => {
    const router = useRouter()
    const [Retdata, setRetdata] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [OpenSnakbar, setOpenSnakbar] = useState(true);

    useEffect(() => {
        setIsLoading(true)
        const handleSubmit = async () => {
            const dataid = '08c5th4rh86ht57h6g';
            const sendUM = { dataid }
            const data = await fetch("/api/HomeCategoriesList", {
                method: "POST",
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(sendUM)
            }).then((a) => {
                return a.json();
            })
                .then((parsed) => {
                    
                    setRetdata(parsed)
                    setIsLoading(false)
                })
        }
        handleSubmit()


    }, [router.query])

    return (

        <>
            {isLoading &&
                <div style={{ padding: '10px' }}>
                    <Skeleton variant="rounded" className={styles.LoaderFull} height={190} />
                    </div>
                
            }



            {!isLoading &&

                <div style={{padding:'10px'}}>

                    <div className={styles.TitleBoxBtn}>
                        <div className={styles.TitleBoxBtn_TEXT}>
                            <span>Choose Your Category</span>
                        </div>
                        <div className={styles.TitleBoxBtn_BTN}>
                            <Link href='Categories' style={{ textDecoration: 'none' }}>
                                <span>View All</span>
                            </Link>
                        </div>
                    </div>
                    <div className={styles.CatGrid}>
                        {Retdata.map((item) => {
                            return <Link href={`/Category/${item.catid}`} style={{ textDecoration: 'none' }}>
                                <div className={styles.CatBoxItemCenter}>
                                    <div>
                                        <Image
                                            src={`${BASE_URL}Storage/panel/img/${item.catimg}`}
                                            alt="Picture of the author"
                                            width={100}
                                            height={100}
                                        />
                                    </div>
                                    <div>
                                        <span>{item.cattitle}</span>

                                    </div>
                                </div>
                            </Link>
                        }

                        )}

                       
                    </div>
                  
                </div>
            }

        </>
    )
}

export default CategoriesList