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
                <div><h1 style={{ margin: '0' }}>How Earn maximum Marks & Become the Best ? </h1></div>
                <div> <span>Follow these simple steps to get success into your Study & Exams, We are here to Guide You everytime</span></div>
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
                        <span>Enroll Course / Test Series</span>
                    </div>
                    <div className={styles.ProccesboxItem_text}>
                        <span>enroll into a course or join our test series</span>
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
                        <span>Complete The Goals</span>
                    </div>
                    <div className={styles.ProccesboxItem_text}>
                        <span>complete the given goal from our experts</span>
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
                        <span>Get success</span>
                    </div>
                    <div className={styles.ProccesboxItem_text}>
                        <span>and get success into your study & exams</span>
                    </div>
                </div>
            </div>
            <div className={styles.dataspacer}> </div>
        </div>


    )
}

export default Proccesbox
