import { useState, useEffect } from 'react'
import Head from 'next/head'
import Skeleton from '@mui/material/Skeleton';
import styles from '../../styles/Home.module.css'
import { useRouter } from 'next/router'


import Link from 'next/link'

const Mytest = ({ ID, QTitle }) => {
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter()
    const [Retdata, setRetdata] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
   

    useEffect(() => {
        GetData()

    }, [router.query]);
    const GetData = async () => {
        const userid = { QTitle: QTitle }
        const data = fetch("/api/CourseTest/Answerkey", {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(userid)
        }).then((a) => {
            return a.json();
        })
            .then((parsedAtemptlist) => {

                setRetdata(parsedAtemptlist.FinalData)

                setIsLoading(false);

            })
    };

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
                            return <div className={styles.AnswerkeyItem} key={item.num}>
                                <div>
                                    <span><b>Q{item.num} :</b> {item.QUETITLE}</span>
                                    <div className={styles.OptionsBox}>
                                        <span>Answer : <b>{item.ANSLIST}</b></span>
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
