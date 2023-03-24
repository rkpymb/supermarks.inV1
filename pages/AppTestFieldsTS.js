import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'
import { BASE_URL, AppName } from '../Data/config'
import Skeleton from '@mui/material/Skeleton';
import PlayQuizCourseApp from '../components/PlayQuizCourseApp'
const Slug = () => {
  const router = useRouter();
  const [ShowData, setShowData] = useState(false);
  const [DataID, setDataID] = useState('');
  const [item, setItem] = useState();
  const [ChaperID, setChaperID] = useState();
  const { id, m } = router.query
  useEffect(() => {
    setTimeout(function () {
      if (id !== undefined) {
        router.push(`/AppTestFieldsTSData?id=${id}&m=${m}`)
      } else {
        console.log(`/AppTestFieldsTSData?id=${id}&m=${m}`)
      }

    }, 1000);


  }, [router.query])


  return <>

    {!ShowData &&
      <div>
        <div style={{ margin: 10 }}>
          <Skeleton variant="rectangular" height={500} />
        </div>
        <div style={{ textAlign: 'center' }}>
          <p>Please wait..</p>
        </div>
        <div style={{ margin: 10 }}>
          <Skeleton variant="rectangular" height={10} />
        </div>
        <div style={{ margin: 10 }}>
          <Skeleton variant="rectangular" height={10} />
        </div>
        <div style={{ margin: 10 }}>
          <Skeleton variant="rectangular" height={10} />
        </div>
        <div style={{ margin: 10 }}>
          <Skeleton variant="rectangular" height={10} />
        </div>


      </div>

    }


  </>
};




export default Slug;