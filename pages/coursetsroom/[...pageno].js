import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import styles from '../../styles/Home.module.css'
import { BASE_URL, AppName } from '../../Data/config'
import Skeleton from '@mui/material/Skeleton';
import { blue } from '@mui/material/colors';
import PlayQuizCourseApp from '../../components/PlayQuizCourseApp'


export async function getServerSideProps(context) {
    const DataSlug = context.query.pageno[0];
    
    const KEY = process.env.MYKEY
  
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ GETID: DataSlug, updatekey: KEY })
    };
    const response = await fetch(`${process.env.API_URL}Website/Course/TestChapaterDataApp.php`, requestOptions);
    const CourseFullData = await response.json();

    return {

        props: { CourseFullData }, // will be passed to the page component as props
    }

}


const Slug = (CourseFullData) => {

    const router = useRouter();
    const [ShowData, setShowData] = useState(false);
    const [MobileNNx, setMobileNNx] = useState('9661113102');
    const [DataQuizx, setDataQuizx] = useState(CourseFullData.CourseFullData.RetData);
    const [ChaperIDx, setChaperIDx] = useState(CourseFullData.CourseFullData.RetData.id);
    useEffect(() => {
        setTimeout(function () {
            setShowData(true)
        }, 1000);

       
    }, [router.query])

    console.log(CourseFullData.CourseFullData.RetData.id)
   
    
    return <div>
        {ShowData &&
            <div>
                <PlayQuizCourseApp DataQuiz={DataQuizx} UserMob={MobileNNx} ChaperID={ChaperIDx} />
            </div>

        }
       
    </div>
};




export default Slug;