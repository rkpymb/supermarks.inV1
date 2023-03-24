import { useState, useEffect } from 'react'
import Head from 'next/head'
import Skeleton from '@mui/material/Skeleton';
import styles from '../../styles/Home.module.css'
import { useRouter } from 'next/router'
import Button from '@mui/material/Button';
import Image from 'next/image'
import Link from 'next/link'

const MyCourses = ({ UserMob }) => {
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter()
    const [Retdata, setRetdata] = useState([]);
    useEffect(() => {

        try {
            if (localStorage.getItem('userid')) {

                const usermobnow = localStorage.getItem('userid');
                const datas = { UserMob: usermobnow }
                const data = fetch("/api/List/Attemptlist", {
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
                        <span>Total Attempts ({Retdata.length})</span>
                    </div>

                    {Retdata.map((item) => {
                        return <Link href={`/CourseTestResult/${item.attemptid}`} style={{ textDecoration: 'none', color: 'black' }} key={item.id} className={styles.ChapterlistItem}>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <div>
                                    <Image
                                        src="/img/chapter.png"
                                        alt="Picture of the author"
                                        width={40}
                                        height={40}
                                    />
                                </div>
                                <div style={{ marginLeft: '10px' }}>
                                    <div> <h4 style={{ margin: '0' }}>{item.Title}</h4></div>
                                    <div><small>#{item.attemptid}</small></div>
                                    {(item.status == 1)
                                        ?
                                        <div className={styles.StatusTextpitchDone}><small>{item.statusText}</small></div>
                                        : <div className={styles.StatusTextpitchPending}><small>{item.statusText}</small></div>
                                    }
                                </div>

                            </div>
                            <Button variant="outlined" >
                                Result
                            </Button>
                        </Link>
                    }

                    )}
                </div>
            }
        </>
    )
}

export default MyCourses
