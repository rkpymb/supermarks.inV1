import { useState, useEffect } from 'react'
import Head from 'next/head'
import Skeleton from '@mui/material/Skeleton';
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'


import Link from 'next/link'

const Mytest = ({ ID }) => {
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter()
    const [Retdata, setRetdata] = useState([]);
    useEffect(() => {

        try {
            if (localStorage.getItem('userid')) {
                const usermobnow = localStorage.getItem('userid');
                const userid = { ID }
                const data = fetch("/api/AttemptedQueList", {
                    method: "POST",
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(userid)
                }).then((a) => {
                    return a.json();
                })
                    .then((parsedAtemptlist) => {
                        console.log(parsedAtemptlist)
                        setRetdata(parsedAtemptlist)
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

            <div>
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
                        {Retdata.map((item) => {
                            return <div className={styles.AttemptListItem} key={item.id}>
                                <div className={styles.AttemptListItemBox} >
                                    <div>
                                        <span style={{ fontWeight: 'bold' }}>Q. </span> <span style={{ fontWeight: '500' }}>{item.QueTitle}</span>
                                    </div>
                                    <div>
                                        <span style={{ fontWeight: 'bold' }}>Your Ans : </span> <span style={{ fontWeight: '500' }}>{item.Title}</span>
                                    </div>
                                    <div>
                                        <span style={{ fontWeight: 'bold' }}>
                                            Result :
                                        </span>
                                        {item.AnsStatus > 0 &&
                                            <span style={{ color: 'blue' }}> correct</span>
                                        }
                                        {item.AnsStatus == 0 &&
                                            <span style={{ color: 'red' }}> incorrect</span>
                                        }
                                    </div>

                                </div>
                            </div>
                        }

                        )}
                    </div>
                }
            </div>
        </>
    )
}

export default Mytest
