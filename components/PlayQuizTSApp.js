import React, { useRef, useState, useEffect, useContext, useCallback, useMemo } from "react";
import { useRouter, useParams } from 'next/router'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Countdown from 'react-countdown';
import Skeleton from '@mui/material/Skeleton';
import Lottie from 'react-lottie'
import * as animationData from '../Data/Lottie/82723-countdown-animation-2.json'
import * as animationData2 from '../Data/Lottie/62960-processing.json'
import Image from 'next/image'
import styles from '../styles/Quizroom.module.css'
import { FiClock, FiClipboard } from "react-icons/fi";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Slide from '@mui/material/Slide';
import { BsCheck2Circle } from "react-icons/bs";
import CheckloginContext from '../context/auth/CheckloginContext'
import { Tune } from "@mui/icons-material";
import Link from 'next/link';
import { FiArrowLeft } from "react-icons/fi";
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import fscreen from 'fscreen';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const styleModal = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    p: 4,
    outline: 'none',
    backgroundColor: 'white',
    height: '100%',
    display: 'flex',
};

export default function PlayQuiz({ DataQuiz, UserMob, ChaperID }) {
    // console.log(DataQuiz.title)
    const [open, setOpen] = useState(true);
    const router = useRouter()
    const [openModal, setOpenModal] = React.useState(false);

    const handleCloseModal = () => setOpenModal(false);
    const [LoadingCircle, setLoadingCircle] = React.useState(true);
    const [ShowM, setShowM] = React.useState(false);
    const [ViewQues, setViewQues] = React.useState(false);
    const [ViewSubmit, setViewSubmit] = React.useState(false);
    const [Quesindex, setQuesindex] = React.useState(0);
   
    const [QuesData, setQuesData] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [TotalQuestion, setTotalQuestion] = useState(0);
    const [AttemtedQuestion, setAttemtedQuestion] = useState(0);
    const [LeftTimeinMS, setLeftTimeinMS] = useState(0);
    const [Attemptid, setAttemptid] = useState(0);
    const [ChapterName, setChapterName] = useState(DataQuiz.title);
    const [StartTime, setStartTime] = useState(false);
    const [UserMOB_CURRENT, setUserMOB_CURRENT] = useState(UserMob);
    const [cart, setCart] = useState({});
    const [QuiuzStartTime, setQuiuzStartTime] = useState();
    const [QuiuzTakenTime, setQuiuzTakenTime] = useState('');
    const [QuiuzTakenTimeFormat, setQuiuzTakenTimeFormat] = useState('');
    const [SecCount, setSecCount] = useState(0);
    const [QuizOver, setQuizOver] = useState(true);
    const [Timeup, setTimeup] = useState(false);
    const [ShowData, setShowData] = useState(true);
    const hoursMinSecs = { hours: 0, minutes: DataQuiz.duration, seconds: 0 }
    const { hours = 0, minutes = 0, seconds = 60 } = hoursMinSecs;
    const [[hrs, mins, secs], setTime] = React.useState([hours, minutes, seconds]);

    const defaultOptions = {
        loop: false,
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
    
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const TimerCounter = () => {

        const todayEND = new Date();
        const timeEND = todayEND.getHours() + ":" + todayEND.getMinutes() + ":" + todayEND.getSeconds();
        const result = new Date(SecCount * 1000).toISOString().slice(11, 19);
        setQuiuzTakenTimeFormat(result)
        setQuiuzTakenTime(SecCount)
        // console.log(SecCount)
        // console.log(result)
    };
    const requestFullscreen = () => {
        // console.log('fs')
      
    };


    const tick = () => {
        if (hrs === 0 && mins === 0 && secs === 0) {
            setTimeup(true)
            if (QuizOver == true) {
                TimerCounter()
                const startTime = QuiuzStartTime;
                const todayEND = new Date();
                const timeEND = todayEND.getHours() + ":" + todayEND.getMinutes() + ":" + todayEND.getSeconds();

                setQuizOver(false)
                setQuiuzTakenTime(SecCount)

                const result = new Date(SecCount * 1000).toISOString().slice(11, 19);

                setQuiuzTakenTimeFormat(result)
                // console.log(SecCount)
                // console.log(result)
                SendOPSDATA(SecCount, result)
            }
        }
        else if (mins === 0 && secs === 0) {
            setTime([hrs - 1, 59, 59]);
            TimerCounter()
            setSecCount(SecCount + 1)
        } else if (secs === 0) {
            setTime([hrs, mins - 1, 59]);
            TimerCounter()
            setSecCount(SecCount + 1)
        } else {
            setTime([hrs, mins, secs - 1]);
            TimerCounter()
            setSecCount(SecCount + 1)
        }
    };
    const handleOpenModal = () => {
        setOpenModal(true);
        
        setTimeout(function () {
            const today = new Date();
            const timeStart = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            setViewQues(true)
            setOpenModal(false);
            
            setStartTime(true)  
            setQuiuzStartTime(timeStart)
        }, 4000); //Time before execution
    }

    useEffect(() => {
        
        setShowM(true)
        setTimeout(function () {
           
            setLoadingCircle(false)
            
        }, 1000);
       
        requestFullscreen()
        if (StartTime == true) {
            const timerId = setInterval(() => tick(), 1000);
            return () => clearInterval(timerId);
            
        } else {
            // console.log('time not started')
        }

    });


    const CreateAttempOrder = async () => {
        
        const AtemptTitle = ChaperID + ':' + ChapterName;
        const Atempttestid = ChaperID;
        const Atemptchapterid = ChaperID;
        const usermob = UserMob;
        const sendAtmptData = { AtemptTitle: AtemptTitle, Atempttestid: Atempttestid, Atemptchapterid: Atemptchapterid, usermob: usermob }
        const data = await fetch("/api/TS/CreateAttempOrder", {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(sendAtmptData)
        }).then((b) => {
            return b.json();
        })
            .then((parsedAtemptData) => {
                if (parsedAtemptData.statusdata == true) {
                    setAttemptid(parsedAtemptData.attemptid)
                    setShowData(false)
                    handleOpenModal()

                } else {
                    // console.log(parsedAtemptData)
                }
            })
    };


    const saveCart = (myCart) => {
        localStorage.setItem("cart", JSON.stringify(myCart));
        const nextQuestion = currentQuestion + 1;
        setAttemtedQuestion(nextQuestion)
        if (nextQuestion < QuesData.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            // console.log(currentQuestion)
            SendOPSDATA(QuiuzTakenTime, QuiuzTakenTimeFormat)
        }
    }

    const SendOPSDATA = async (SecCount, result) => {
        setViewSubmit(true)
        const sendAtmptData = { OPS: cart, Atempttestid: Attemptid, mobile: UserMOB_CURRENT, takenTime: result, takenTimeSec: SecCount, }
        const data = await fetch("/api/TS/TestSubmit", {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(sendAtmptData)
        }).then((b) => {
            return b.json();
        })
            .then((TestSubmitReq) => {

                if (TestSubmitReq.statuswhat == true) {
                    setTimeout(function () {
                        router.push(`/CourseTestResultTSApp/${TestSubmitReq.datagot}`)
                        // console.log(TestSubmitReq)

                    }, 4000);
                } else {
                    // console.log(TestSubmitReq)
                }

            })
    };


    const handleAnswerOptionClick = (itemCode, TitleC, StstusC, QueID, QueTitle, MARKQS) => {
        let newCart = cart;

        newCart[itemCode] = { optionClickid: itemCode, Title: TitleC, StstusC: StstusC, QueID: QueID, QueTitle: QueTitle, MARKQS: MARKQS }
        setCart(newCart);
        saveCart(newCart);
        // alert(name+' added to cart successfully')
    }

    const LoadallQues = async () => {
        setShowData(false)
        setLoadingCircle(true)
        const ChapterIDData = ChaperID
        const sendUM = { ChapterIDData }
        const data = await fetch("/api/TS/AllQues_test", {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(sendUM)
        }).then((a) => {
            return a.json();
        })
            .then((parsed) => {
                // console.log(parsed.FinalData)
                if (parsed.Statusdata == true) {
                    setQuesData(parsed.FinalData)
                    setTotalQuestion(parsed.FinalData.length)

                    CreateAttempOrder()
                } else {
                    // console.log(parsed)
                }

            })
    }


    return (
        <div>
            {/* <Button variant="outlined" onClick={handleClickOpen}>
                Start
            </Button> */}

            {ShowM &&
                <div>
                    {!ViewQues &&
                        <div className={styles.WthBgimg}>
                            <div className={styles.WthBgimgOpC}>
                                <div className={styles.container} >
                                    <div className={styles.StartertestBox} style={{ backgroundColor: 'white' }}>
                                        {/* <div style={{ height: '30px' }}> </div> */}

                                        <div className={styles.DurationBox}>
                                            <div className={styles.DurationBoxItem}>
                                                <div>
                                                    <FiClock />
                                                </div>
                                                <div style={{ marginTop: '-5px', marginLeft: '5px' }}>
                                                    <span>Duration : {DataQuiz.duration} minutes</span>
                                                </div>
                                            </div>
                                            <div className={styles.DurationBoxItem}>
                                                <div>
                                                    <FiClipboard />
                                                </div>
                                                <div style={{ marginTop: '-5px', marginLeft: '5px' }}>
                                                    <span>Maximum marks : {DataQuiz.totalMarks}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.instructionsBox}>
                                            <b>Read the following instructions carefully</b>
                                            <div>
                                                {DataQuiz.RulesTest}
                                            </div>

                                        </div>
                                        <div style={{ height: '50px' }}> </div>
                                    </div>


                                </div>

                                <div className={styles.FooterBtnBox}>
                                    {ShowData &&
                                        <Button variant="contained" onClick={LoadallQues}>Proceed to Start Test</Button>
                                    }
                                    {!ShowData &&
                                        <div>
                                            <div style={{ margin: 0 }}>
                                                <Skeleton variant="rectangular" height={50} width={200} />
                                            </div>
                                        </div>
                                    }


                                </div>
                            </div>
                        </div>
                    }
                    {ViewQues &&
                        <div className={styles.WthBgimg}>
                            <div className={styles.WthBgimgOpC}>
                              

                                {!ViewSubmit &&
                                    <div className={styles.container}>


                                        <div className={styles.StartertestBox} style={{ backgroundColor: 'white' }}>
                                            <div style={{ height: '20px' }}> </div>
                                            <div style={{ textAlign: 'center', fontSize: '15px', fontWeight: 'bold' }}>
                                                <span>Chapte name</span>
                                            </div>
                                            <div className={styles.DurationBox}>
                                                <div className={styles.DurationBoxItem}>
                                                    <div>
                                                        <FiClock />
                                                    </div>
                                                    <div style={{ marginTop: '-5px', marginLeft: '5px', color: 'red', fontWeight: 'bold' }}>
                                                        <span>Time Left : <span>{`${hrs.toString().padStart(2, '0')}:${mins
                                                            .toString()
                                                            .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`}</span></span>
                                                    </div>
                                                </div>
                                                <div className={styles.DurationBoxItem}>
                                                    <div>
                                                        <BsCheck2Circle />
                                                    </div>
                                                    <div style={{ marginTop: '-5px', marginLeft: '5px' }}>
                                                        <span>Questions : {AttemtedQuestion}/{TotalQuestion}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={styles.QuesBox}>
                                                <b>Q {currentQuestion + 1} : {QuesData[currentQuestion].QUETITLE}</b>
                                                <div className={styles.OptionsBox}>
                                                    {QuesData[currentQuestion].ANSLIST.map((answerOption) => (
                                                        <div className={styles.OptionsItem} key={answerOption.id} onClick={() => handleAnswerOptionClick(answerOption.id, answerOption.Title, answerOption.status, answerOption.QueID, answerOption.QueTitle, QuesData[currentQuestion].MARKQS)}>
                                                            <span>{answerOption.Title}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                            <div style={{ height: '50px' }}> </div>
                                        </div>


                                    </div>
                                }
                                {ViewSubmit &&
                                    <div className={styles.container}>
                                        <div style={{ height: '20px' }}> </div>
                                        <div style={{ textAlign: 'center', fontSize: '15px', fontWeight: 'bold' }}>
                                            <span>{ChaperID} : {ChapterName}</span>
                                        </div>

                                        <div className={styles.SubmitingBox}>
                                            <div>
                                                <Lottie options={defaultOptions2}
                                                    width='100%'
                                                    height={400}
                                                    isStopped={false}
                                                    isPaused={false} />
                                            </div>
                                            {Timeup &&
                                                <div style={{ textAlign: 'center', fontSize: '25px', fontWeight: 'bold', color: 'red' }}>
                                                    <span>TIME UP</span>
                                                </div>
                                            }
                                            <p>Submitting Your Test Attempt, please wait..</p>
                                        </div>


                                    </div>
                                }
                            </div>

                        </div>
                    }
                </div>
            
            }
           
            
            <Modal
                open={openModal}
                onClose={handleCloseModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={styleModal}>
                    <div className={styles.SubmitingBox}>
                        <div>
                            <Lottie options={defaultOptions}
                                width='100%'
                                height={400}
                                isStopped={false}
                                isPaused={false} />
                        </div>
                        <p>Your Attempt is Ready , please wait...</p>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}
