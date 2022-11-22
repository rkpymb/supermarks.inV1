import React, { useRef, useState, useEffect, useContext } from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Countdown from 'react-countdown';
import styles from '../styles/Quizroom.module.css'
import { FiClock, FiClipboard } from "react-icons/fi";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Slide from '@mui/material/Slide';
import { BsCheck2Circle } from "react-icons/bs";
import CheckloginContext from '../context/auth/CheckloginContext'
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function PlayQuiz({ Pid, ChapterName, ChapterID, duration, totalMarks, Totalques, RulesTest }) {
    const Contextdata = useContext(CheckloginContext)
    const [open, setOpen] = useState(false);
    const [LoadingCircle, setLoadingCircle] = React.useState(false);
    const [ViewQues, setViewQues] = React.useState(false);
    const [Quesindex, setQuesindex] = React.useState(0);
    const [QuesData, setQuesData] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [TotalQuestion, setTotalQuestion] = useState(0);
    const [AttemtedQuestion, setAttemtedQuestion] = useState(0);
    const [LeftTimeinMS, setLeftTimeinMS] = useState(0);
    const [Attemptid, setAttemptid] = useState(0);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const ConvertLeftTime = () => {
        //milliseconds = minutes x 60,000
        const minutes = duration;
        const milliseconds = (minutes * 60000);
        setLeftTimeinMS(milliseconds)
    };
    const CreateAttempOrder = async () => {
        
        const AtemptTitle = Pid+':'+ChapterName;
        const Atempttestid = Pid;
        const Atemptchapterid = ChapterID;
        const usermob = Contextdata.Data.mobile;
        const sendAtmptData = { AtemptTitle: AtemptTitle, Atempttestid: Atempttestid, Atemptchapterid: Atemptchapterid, usermob: usermob }
        const data = await fetch("/api/CreateAttempOrder", {
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
                    setViewQues(true)
                    setLoadingCircle(false)
                } else {
                    console.log(parsedAtemptData)
                }
            })
    };

    const handleAnswerOptionClick = () => {
        setAttemtedQuestion()
        const nextQuestion = currentQuestion + 1;
        setAttemtedQuestion(nextQuestion)
        if (nextQuestion < QuesData.length) {
            setCurrentQuestion(nextQuestion);
        } else {

            // console.log(currentQuestion)
        }
    };

    const LoadallQues = async () => {
        setLoadingCircle(true)
        const ChapterIDData = ChapterID
        const sendUM = { ChapterIDData }
        const data = await fetch("/api/AllQues_test", {
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
                    ConvertLeftTime()
                    CreateAttempOrder()
                } else {
                    // console.log(parsed)
                }

            })
    }


    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Start Test
            </Button>
            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}

            >
                <AppBar sx={{ position: 'relative' }} className={styles.Nv}>
                    <Toolbar>
                        <div >
                            <img src='/logonew.png' alt='logo' width='80px' />
                        </div>

                    </Toolbar>
                </AppBar>
                {!ViewQues &&
                    <div>
                        <div className={styles.container}>
                            <div style={{ height: '30px' }}> </div>
                            <div className={styles.StartertestBox}>

                                <div style={{ textAlign: 'center', fontSize: '20px', fontWeight: 'bold' }}>
                                    <span>{Pid} : {ChapterName}</span>
                                </div>
                                <div className={styles.DurationBox}>
                                    <div className={styles.DurationBoxItem}>
                                        <div>
                                            <FiClock />
                                        </div>
                                        <div style={{ marginTop: '-5px', marginLeft: '5px' }}>
                                            <span>Duration : {duration} minutes</span>
                                        </div>
                                    </div>
                                    <div className={styles.DurationBoxItem}>
                                        <div>
                                            <FiClipboard />
                                        </div>
                                        <div style={{ marginTop: '-5px', marginLeft: '5px' }}>
                                            <span>Maximum marks : {totalMarks}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.instructionsBox}>
                                    <b>Read the following instructions carefully</b>
                                    <div>
                                        {RulesTest}
                                    </div>

                                </div>
                                <div style={{ height: '50px' }}> </div>
                            </div>


                        </div>

                        <div className={styles.FooterBtnBox}>

                            {!LoadingCircle &&
                                <Button variant="contained" onClick={LoadallQues}>Proceed to Start Test</Button>
                            }
                            {LoadingCircle &&
                                <Box sx={{ display: 'flex' }}>
                                    <CircularProgress />
                                </Box>
                            }


                        </div>
                    </div>
                }
                {ViewQues &&
                    <div>
                        <div className={styles.container}>
                            <div style={{ height: '20px' }}> </div>
                            <div style={{ textAlign: 'center', fontSize: '15px', fontWeight: 'bold' }}>
                                <span>{Pid} : {ChapterName}</span>
                            </div>

                            <div className={styles.StartertestBox}>
                                <div className={styles.DurationBox}>
                                    <div className={styles.DurationBoxItem}>
                                        <div>
                                            <FiClock />
                                        </div>
                                        <div style={{ marginTop: '-5px', marginLeft: '5px' }}>
                                            <span>Time Left : <Countdown date={Date.now() + LeftTimeinMS} /></span>
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
                                            <div className={styles.OptionsItem} key={answerOption.id} onClick={() => handleAnswerOptionClick(answerOption.Title)}>
                                                <span>{answerOption.Title}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div style={{ height: '50px' }}> </div>
                            </div>


                        </div>

                        <div className={styles.FooterBtnBox}>

                            <Button variant="contained" >Show Instruction</Button>


                        </div>
                    </div>
                }
            </Dialog>
        </div>
    );
}
