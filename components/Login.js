import React from 'react';
import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/router'
import styles from '../styles/Home.module.css'
import { FiShoppingBag, FiSearch, FiUser, FiX, FiChevronLeft, FiPlus, FiMinus } from "react-icons/fi";
import Modal from '@mui/material/Modal';
export default function Loginpage(props) {

    const router = useRouter()
    const [usermobile, setMob] = useState('');
    const [sot, setSot] = useState('');
    const [OTPSENT, setOTPSENT] = useState();
    const [isalert, setIsalert] = useState(false);
    const [LoginboxTitle, setLoginboxTitle] = useState('Login / Sign up');
    const [mobilebox, setMobilebox] = useState(true);
    const [regbox, setRegbox] = useState(false);
    const [Otpbox, setOtpbox] = useState();
    const [vmData, setVmdata] = useState();
    const [postdata, setPostdata] = useState({});
    const [username, setUsername] = useState('');
    const [useremail, setEmail] = useState('');

    const handleChangeMob = () => {
        setIsalert(false);
        const name = document.querySelector('#userm').value
        if (name.length <= 10) {
            setMob(name)
            // console.log(usermobile)
        }

    }
    const handleChangeOTP = () => {
        setIsalert(false);
        const otpin = document.querySelector('#otpinput').value
        if (otpin.length <= 4) {
            setSot(otpin)
            // console.log(usermobile)
        }


    }
    const handluserName = () => {
        setIsalert(false);
        const username = document.querySelector('#username').value
        setUsername(username);
    }
    const handluserEmail = () => {
        setIsalert(false);
        const email = document.querySelector('#email').value
        setEmail(email);
    }

    const handleSubmit = async () => {
        if (usermobile.length == 10) {
            props.BackDropOpen()
            const sendUM = { usermobile }
            const data = await fetch("/api/mobile_process", {
                method: "POST",
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(sendUM)
            }).then((a) => {
                return a.json();
            })
                .then((parsed) => {
                    if (parsed.status == true) {
                        props.BackDropClose()
                        // console.log(parsed.status)
                        setVmdata(parsed.data)
                        setPostdata(parsed)
                        setLoginboxTitle('OTP Verification')
                        props.BackDropClose()
                        setMobilebox(false);
                        setOtpbox(true);
                    }
                })
            props.BackDropClose()
        } else {
            props.BackDropClose()
            setIsalert(true);
            // alert('Invalid Mobile Number')
        }


    }

    const verifyOTPBTN = async () => {
        props.BackDropOpen()
        if (sot == vmData) {
            // console.log(postdata);
            const u_type = postdata.user_type;
            if (u_type == 0) {
                props.BackDropClose()
                setOtpbox(false);
                setRegbox(true);
                setLoginboxTitle('Create Account');
            } else if (u_type == 1) {
                localStorage.setItem('userid', usermobile);
                props.handleClose();
                router.reload(window.location.pathname)
            }
        } else {
            props.BackDropClose()
            setIsalert(true);

        }
    }
    const createAcc = async () => {
        if (usermobile.length == 10 && username !== '' && useremail !== '') {
            props.BackDropOpen()
            const sendReg = { usermobile: usermobile, name: username, email: useremail }
            const data = await fetch("/api/testdata", {
                method: "POST",
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(sendReg)
            }).then((b) => {
                return b.json();
            })
                .then((parsedReg) => {
                    console.log(parsedReg)
                    if (parsedReg.status == true) {
                        console.log(parsedReg.status)
                        localStorage.setItem('userid', usermobile);
                        props.handleClose();
                        router.reload(window.location.pathname)

                    }
                })
        } else {
            props.BackDropClose()
            setIsalert(true);

        }


    }
    return (
        <>

            <Modal
                open={props.openModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div className={styles.modal_sm}>
                    <div className={styles.Login_box}>
                        <div className={styles.Login_h}>
                            <span>{LoginboxTitle}</span>
                            <small onClick={props.handleClose}><FiX /></small>
                        </div>

                        {mobilebox && (
                            <div>
                                <div className={styles.Login_form_box}>

                                    <div className={styles.Country_code}>
                                        <span>+91</span>
                                    </div>

                                    <div className={styles.Login_form_input}>
                                        <input type="number" vervalue={usermobile} className={styles.Login_input} name="usermobile" id="userm" onChange={handleChangeMob} placeholder="Enter Your Mobile Number" autoFocus />
                                        {isalert && (
                                            <small style={{ marginLeft: '5px', color: 'red' }}>Invalid Mobile Number</small>
                                        )}
                                    </div>

                                </div>
                                <div style={{ margin: '20px' }}> </div>
                                <div className={styles.clickbtn} onClick={handleSubmit} >
                                    <span>Send OTP</span>
                                </div>
                            </div>

                        )}


                        {/* Enter OTP */}
                        {Otpbox && (
                            <div>
                                <p>Enter 4-digit OTP sent to <b>+91{usermobile}</b></p>
                                <div className={styles.OTP_form_input}>
                                    <input type="number" className={styles.OTP_input} name="otpinput" id="otpinput" onChange={handleChangeOTP} placeholder="Enter OTP" autoFocus />
                                </div>

                                {isalert && (
                                    <small style={{ marginLeft: '5px', color: 'red' }}>Invalid OTP</small>
                                )}
                                <div style={{ margin: '20px' }}> </div>
                                <div className={styles.clickbtn} onClick={verifyOTPBTN} >
                                    <span>Verify OTP</span>
                                </div>
                            </div>

                        )}
                        {/* Registrations */}
                        {regbox && (
                            <div>
                                <p>Please enter required fields</p>
                                <div className={styles.Forminputs}>
                                    <input type="text" className={styles.normal_input} name="username" id="username" onChange={handluserName} placeholder="Enter Name" autoFocus />
                                </div>
                                <div className={styles.Forminputs}>
                                    <input type="text" className={styles.normal_input} name="email" id="email" onChange={handluserEmail} placeholder="Enter Email" autoFocus />
                                </div>
                                {isalert && (
                                    <small style={{ marginLeft: '5px', color: 'red' }}>All Fie are required</small>
                                )}
                                <div style={{ margin: '20px' }}> </div>
                                <div className={styles.clickbtn} onClick={createAcc} >
                                    <span>Create Account</span>
                                </div>
                            </div>

                        )}

                    </div>
                </div>
            </Modal>

        </>
    )
}
