import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import styles from '../../styles/Home.module.css'

import TSCheckoutApp from '../../components/Checkout/TSCheckoutApp'
import TSChekoutFreeApp from '../../components/Checkout/TSChekoutFreeApp'

import { BASE_URL, AppName } from '../../Data/config'
import Skeleton from '@mui/material/Skeleton';


const isServerReq = req => !req.url.startsWith('/_next');

export async function getServerSideProps(context) {
    const DataSlug = context.query.pageno[0];
    const Mob = context.query.pageno[1];
    const KEY = process.env.MYKEY

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ DataSlug: DataSlug, updatekey: KEY })
    };
    const response = await fetch(`${process.env.API_URL}Website/TestSeries/TSData.php`, requestOptions);
    const CourseFullData = await response.json();

    return {

        props: { CourseFullData, Mob }, // will be passed to the page component as props
    }

}


const Slug = ({ CourseFullData, Mob }) => {

    const router = useRouter();
    const [CourseRetData, setCourseRetData] = useState(CourseFullData.RetData);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        console.log(Mob)
        setIsLoading(false)

    }, [router.query]);


    return <div>

        {isLoading &&
            <div style={{ padding: 10, }}>
                <div style={{ margin: 10, }}>
                    <Skeleton variant="rectangular" height={150} />
                </div>
                <div style={{ margin: 10, }}>
                    <Skeleton variant="rectangular" height={150} />
                </div>
                <div style={{ margin: 10, }}>
                    <Skeleton variant="rectangular" height={150} />
                </div>
                <div style={{ margin: 10, }}>
                    <Skeleton variant="rectangular" height={150} />
                </div>
            </div>
        }
        {!isLoading &&
            <div>
                {CourseRetData.isfree == 1 &&
                    <TSChekoutFreeApp DataCourse={CourseFullData.RetData} Mob={Mob} />
                }
                {CourseRetData.isfree == 0 &&
                    <TSCheckoutApp DataCourse={CourseFullData.RetData} Mob={Mob} />
                }

            </div>
        }
    </div>
};




export default Slug;