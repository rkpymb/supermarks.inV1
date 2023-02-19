import { useState, useEffect } from 'react'
import Head from 'next/head'
import Skeleton from '@mui/material/Skeleton';
import styles from '../../styles/Home.module.css'
import { useRouter } from 'next/router'
import { FiChevronRight, FiNavigation, FiInfo, FiCoffee, FiFileText, FiClock, FiUnlock, FiShoppingBag, FiMapPin, FiCreditCard, FiLogOut } from 'react-icons/fi';
import Image from 'next/image'
import Link from 'next/link'

const MyCourses = ({ ChapterID }) => {
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter()
    const [Retdata, setRetdata] = useState([]);
    useEffect(() => {

        try {
            if (localStorage.getItem('userid')) {

                const usermobnow = localStorage.getItem('userid');
                const datas = { ChapterID: ChapterID }
                const data = fetch("/api/List/PdflistbyChapter", {
                    method: "POST",
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(datas)
                }).then((a) => {
                    return a.json();
                })
                    .then((parsedUser) => {
                        setRetdata(parsedUser)
                        setIsLoading(false);
                    })

            } else {

            }
        } catch (error) {
            console.error(error)


        }
        // check login credential end

    }, [router.query]);


    return (
        <>
            {isLoading &&
                <div>
                    <div style={{ marginTop: '15px' }}>
                        <Skeleton variant="rectangular" height={100} />
                    </div>
                    <div style={{ marginTop: '15px' }}>
                        <Skeleton variant="rectangular" height={100} />
                    </div>
                    <div style={{ marginTop: '15px' }}>
                        <Skeleton variant="rectangular" height={100} />
                    </div>
                    <div style={{ marginTop: '15px' }}>
                        <Skeleton variant="rectangular" height={100} />
                    </div>
                    <div style={{ marginTop: '15px' }}>
                        <Skeleton variant="rectangular" height={100} />
                    </div>
                </div>
            }
            {!isLoading &&
                <div>
                    <div className={styles.Datatext}>
                        <span>All Pdf Notes ({Retdata.length})</span>
                    </div>

                    {Retdata.map((item) => {
                        return <div key={item.id} className={styles.ChapterlistItem}>
                            <Link href={`/Chapters`}>
                                <div style={{display: 'flex', alignItems: 'center'}}> 
                                    <div>
                                        <Image
                                            
                                            src="/img/pdf-file.png"
                                            alt="Picture of the author"
                                            width={40}
                                            height={40}
                                        /> 
                                   </div>
                                    <div style={{marginLeft:'10px'}}>
                                        <h4 style={{ margin: '0' }}>{item.Title}</h4>
                                        <div><span style={{fontSize:'10px'}}>{item.date}</span></div>
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

export default MyCourses
