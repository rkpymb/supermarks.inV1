import React from 'react'
import styles from '../../styles/Home.module.css'
import { BASE_URL, AppName } from '../../Data/config'
import Lottie from 'react-lottie'
import * as animationData from '../../Data/Lottie/87666-female-character-walking.json'
import * as animationData2 from '../../Data/Lottie/48726-student.json'
import * as animationData3 from '../../Data/Lottie/41240-student.json'
const Proccesbox = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }
    const defaultOptions2 = {
        loop: true,
        autoplay: true,
        animationData: animationData2,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }
    const defaultOptions3 = {
        loop: true,
        autoplay: true,
        animationData: animationData3,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }
    return (
        <div className={styles.container}>
            <div className={styles.dataspacer}> </div>
            <div className={styles.centeritem} >
                <div><h1 style={{ margin: '10px' }}>Best Courses
                    with 100% Job Guarantee </h1></div>
                <div> <span>We can assure you 100% about our programme and our ability to get you placed, but we also believe that there is no substitute for hard work and dedication.
                    To land a job in a company a student must comply with these conditions :</span></div>
            </div>
            <div className={styles.dataspacer}> </div>
            <div className={styles.ProccesboxItembox}>
                <div className={styles.ProccesboxItem}>
                    <div>
                        <Lottie options={defaultOptions}
                            width='100%'
                            height={200}
                            isStopped={false}
                            isPaused={false} />
                    </div>
                    <div className={styles.ProccesboxItem_title}>
                        <span>Enroll into our Courses & Test Series</span>
                    </div>
                    <div className={styles.ProccesboxItem_text}>
                        <span>enroll into a course and join our Special mock test series & mock interviews. Completing the modules and projects before deadlines</span>
                    </div>
                </div>
                <div className={styles.ProccesboxItem}>
                    <div>
                        <Lottie options={defaultOptions2}
                            width='100%'
                            height={200}
                            isStopped={false}
                            isPaused={false} />
                    </div>
                    <div className={styles.ProccesboxItem_title}>
                        <span>Complete the Courses Exams and mock Interviews</span>
                    </div>
                    <div className={styles.ProccesboxItem_text}>
                        <span>complete the given goal from our experts and mentros regurally and Passing the mid-term and final exams by DR IT EDUCATION</span>
                    </div>
                </div>
                <div className={styles.ProccesboxItem}>
                    <div>
                        <Lottie options={defaultOptions3}
                            width='100%'
                            height={200}
                            isStopped={false}
                            isPaused={false} />
                    </div>
                    <div className={styles.ProccesboxItem_title}>
                        <span>Get Your Dream Job with 100% Guarantee</span>
                    </div>
                    <div className={styles.ProccesboxItem_text}>
                        <span>once you have completed course and givent tasks now you are ready to crack interviews for your Deram Job.</span>
                    </div>
                </div>
            </div>
            <div className={styles.dataspacer}> </div>
        </div>


    )
}

export default Proccesbox
