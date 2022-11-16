import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import TextField from '@mui/material/TextField';
import styles from '../styles/Home.module.css'
import { FiChevronRight } from 'react-icons/fi';
import Skeleton from '@mui/material/Skeleton';
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import CircularProgress from '@mui/material/CircularProgress';
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


export default function BasicModal(props) {
   
    const [usermobile, setMob] = useState('');
    const [nameofuser, setNameofuser] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userWN, setWN] = useState('');
    const [open, setOpen] = useState(false);
    const [Loading, setLoading] = useState(false);
    const [DoneBox, setDoneBox] = useState(false);
    const [isalert, setIsalert] = useState(false);
    const [isalertmob, setIsalertmob] = useState(false);
    const handleClickOpen = () => {
        if (usermobile.length == 10) {
            setOpen(true);
        } else {
            setIsalertmob(true)
       }
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpenEnq = () => {
        const mobAx = document.querySelector('#userm').value
        if (mobAx.length == 10) {
            setOpen(true);
        } else {
            setIsalert(true);
        }

    }
    const handleChangeMob = () => {
        setIsalert(false);
        setIsalertmob(false)
        const mobA = document.querySelector('#userm').value
        if (mobA.length <= 10) {
            setMob(mobA)
        }

    }
    const handleChangeWN = () => {
        setIsalert(false);
        const userWN_A = document.querySelector('#userWN').value
        if (userWN_A.length <= 10) {
            setWN(userWN_A)
        }

    }
    const handleChangeName = () => {
        setIsalert(false);
        const nameofuser_A = document.querySelector('#nameofuser').value
        if (nameofuser_A.length <= 30) {
            setNameofuser(nameofuser_A)
        }

    }
    const handleChangeEmail = () => {
        setIsalert(false);
        const userEmail_A = document.querySelector('#userEmail').value
        setUserEmail(userEmail_A)

    }

    const handleCloseEnq = () => {
        setOpen(false);
    }


    const SubmitenqForm = async () => {
        if (usermobile.length == 10 && nameofuser !== '' && userEmail !== '') {
            setLoading(true);
            const sendReg = { usermobile: usermobile, name: nameofuser, email: userEmail, userWN: userWN }
            const data = await fetch("../api/Formsubmit", {
                method: "POST",
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(sendReg)
            }).then((b) => {
                return b.json();
            })
                .then((parsedReg) => {
                    // console.log(parsedReg)
                    setTimeout(function () {
                        setDoneBox(true)
                        setLoading(false);
                        setTimeout(function () {
                            setOpen(false);
                        }, 5000); 
                    }, 2000); 
                })
        } else {
            setIsalert(true);
            
        }


    }

    return (
        <div>
            
            <div className={styles.LoginBox_inputEnq}>
                <TextField fullWidth label="Enter Mobile Number" id="userm" onChange={handleChangeMob} value={usermobile} />
            </div>
            {isalertmob && 
            <small style={{color: 'red'}}>Please Enter a valid Mobile Number</small>
            }
            <div style={{ height: '10px' }}> </div>
            <div className={styles.Btn_icon} onClick={handleClickOpen}>
                <small>Book Free Demo</small>
                <span><FiChevronRight /></span>
            </div>
            <Dialog
                fullScreen
                open={open}
                onClose={handleCloseEnq}
                TransitionComponent={Transition}
            >

                {!DoneBox && (
                <div className={styles.container}>
                    <div className={styles.Enqmodal_title}>
                        <div className={styles.Enqmodal_close} onClick={handleCloseEnq}>
                            <BsFillArrowLeftCircleFill />
                        </div>
                        <div className={styles.Enqmodal_titletext} >
                            <span>Enquery Form</span>
                        </div>
                    </div>
                    <div className={styles.Enqmodal_MainBox} >
                        <div className={styles.LoginBox_inputBoxtt}>
                            <div className={styles.Enqheader}>
                                <p>Book a free Counselling</p>
                            </div>
                            <div className={styles.LoginBox_input}>
                                <TextField fullWidth label="Enter Mobile Number" id="userm" onChange={handleChangeMob} value={usermobile} />
                            </div>
                            <div style={{ height: '20px' }}> </div>
                            <div className={styles.LoginBox_input}>
                                <TextField fullWidth label="Enter Full name" id="nameofuser" onChange={handleChangeName} value={nameofuser} />
                            </div>
                            <div style={{ height: '20px' }}> </div>
                            <div className={styles.LoginBox_input}>
                                <TextField fullWidth label="Enter Email" id="userEmail" onChange={handleChangeEmail} value={userEmail} />
                            </div>
                            <div style={{ height: '20px' }}> </div>
                            <div className={styles.LoginBox_input}>
                                <TextField fullWidth label="Enter WhatsApp Number" id="userWN" onChange={handleChangeWN} value={userWN} />
                            </div>
                            <div style={{ height: '20px' }}> </div>
                            {!Loading && (
                            <div className={styles.Btn_icon} onClick={SubmitenqForm}>
                                <small>Proceed to Submit</small>
                                <span><FiChevronRight /></span>
                                </div>
                            )}
                        </div>
                        <div className={styles.Enqmodal_MainBoxB}>
                            <img src='/img/ckjv6jx7700lscjfzuyspsnv0-customer-service-team-training.one-half.png' alt='img' />
                        </div>
                    </div>
                    {Loading && (
                    <div className={styles.Enqmodal_proccess}>
                        <CircularProgress />
                        <small>Proccessing...</small>
                        </div>
                    )}
                    </div>
                )}
                {DoneBox && (
                    <div className={styles.container}>
                        <div className={styles.Enqmodal_title}>
                            <div className={styles.Enqmodal_close} onClick={handleCloseEnq}>
                                <BsFillArrowLeftCircleFill />
                            </div>
                            <div className={styles.Enqmodal_titletext} >
                                <span>Form Submitted</span>
                            </div>
                        </div>
                        <div className={styles.Enqmodal_MainBoxDone} >
                            <div className={styles.Enqmodal_MainBoxB}>
                                <img src='/img/gif/106614-appointment-calendar-lottie-animation.gif' alt='img' />
                                
                            </div>
                            <div className={styles.Enqmodal_Donetext} >
                                <sapn>Free Counselling Session is successfully Booked</sapn>
                                <small> please check your email, WhatsApp and SMS for more details, our Sales excutive will contact ASAP. Thank You 😎</small>
                            </div>
                        </div>
                    </div>
                )}

               
            </Dialog>
            {/* second  */}
        </div>
    );
}