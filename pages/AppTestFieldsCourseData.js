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
  const { id,m } = router.query
  useEffect(() => {
    const Data = String(id);
    setDataID(Data)
    GetChapterlistList(Data)
  },[router.query])

  const GetChapterlistList = async (Data) => {
    const sendUM = { GETID: Data }
    const data = await fetch("/api/CourseTest/TestChapaterDataApp", {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(sendUM)
    }).then((a) => {
      return a.json();
    })
      .then((DataidRet) => {
       
        if (DataidRet.status == true) {
          console.log(DataidRet.status)
          setItem(DataidRet.RetData)
          setChaperID(DataidRet.RetData.id)
          setTimeout(function () {
            setShowData(true)
          }, 2000);
        } else {
          console.log(DataidRet.status)
        }

      })
  }

  return <>
    {ShowData &&
      <div>
        <PlayQuizCourseApp DataQuiz={item} UserMob={m} ChaperID={ChaperID} />
      </div>

    }
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