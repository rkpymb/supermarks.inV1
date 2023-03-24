import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import styles from '../../styles/Home.module.css'
import { BASE_URL, AppName } from '../../Data/config'
import PlayQuizCourseApp from '../../components/PlayQuizCourseApp'
const Slug = () => {
    const router = useRouter();
    const [ShowData, setShowData] = useState(false);
    const [DataID, setDataID] = useState('');
    const [item, setItem] = useState();
    const { id } = router.query
    useEffect(() => {
        const Data = String(pageno);
        setDataID(Data)
        setTimeout(() => {
            console.log
            GetChapterlistList(Data)
        }, "1000")
    }, [router.query])

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
                console.log(DataidRet)
                setItem(DataidRet.RetData)
                setShowData(true)
            })
    }

    return <>
        {/* {ShowData &&
            <div>
                <PlayQuizCourseApp DataQuiz={item} />
            </div>
        
        } */}
      
       
    </>
};




export default Slug;