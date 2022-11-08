import styles from '../styles/Home.module.css'
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useRef, useState, useEffect } from "react";
import Button from '@mui/material/Button';
import { useRouter, useParams } from 'next/router'

import Skeleton from '@mui/material/Skeleton';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';
const Applycourse = ({ jobslug }) => {
    console.log(jobslug)
    const router = useRouter()
    const [Retdata, setRetdata] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [open, setOpen] = useState(false);
    const [scroll, setScroll] = useState('paper');

    const [Coursetitle, setCoursetitle] = useState('');
    const [C_details, setC_details] = useState('');
    const [C_duration, setC_duration] = useState('');
    const [C_mprice, setC_mprice] = useState('');
    const [C_sprice, setC_sprice] = useState('');
    const [C_Tagline, setC_Tagline] = useState('');
    const [C_Taglinet, setC_Taglinet] = useState('');
    const [Coursecat, setCoursecat] = useState('');
    const [Catimg, setCatimg] = useState('');

    const [Loading, setLoading] = useState(false);
    const [isalert, setIsalert] = useState(false);
    const [isalertText, setIsalertText] = useState('');


    const handleClickOpen = (scrollType) => () => {
        setOpen(true);
        setScroll(scrollType);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChangeCoursetitle = () => {
        setIsalert(false);
        const Coursetitle = document.querySelector('#Coursetitle').value
        setCoursetitle(Coursetitle)

    }
    const handleChangeC_details = () => {
        setIsalert(false);
        const setC_detailsx = document.querySelector('#setC_details').value
        setC_details(setC_detailsx)

    }
    const handleChangeC_duration = () => {
        setIsalert(false);
        const setC_durationx = document.querySelector('#setC_duration').value
        setC_duration(setC_durationx)

    }

    const handleChangeC_mprice = () => {
        setIsalert(false);
        const setC_mpricex = document.querySelector('#setC_mprice').value
        setC_mprice(setC_mpricex)

    }
    const handleChangeC_sprice = () => {
        setIsalert(false);
        const setC_spricex = document.querySelector('#setC_sprice').value
        setC_sprice(setC_spricex)

    }
    const handleChangeC_Tagline = () => {
        setIsalert(false);
        const C_Taglinex = document.querySelector('#setC_Tagline').value
        setC_Tagline(C_Taglinex)

    }
    const handleChangeC_Taglinet = () => {
        setIsalert(false);
        const C_Taglinetx = document.querySelector('#setC_Taglinet').value
        setC_Taglinet(C_Taglinetx)

    }

    const ChangeCat = () => {
        setIsalert(false);
        const SelectedCat = document.querySelector('#SelectedCat').value
        setCoursecat(SelectedCat)

    }

   

    const AddcatBtn = async () => {
        const imgmedia = document.querySelector('#imgmedia').value
        if (Coursetitle !== '' && imgmedia !== '' && Coursecat !== '0' && C_details !== '' && C_duration !== '' && C_mprice !== '' && C_sprice !== '' && C_Tagline !== '' && C_Taglinet !== '') {
            setLoading(true);
            const sendReg = { Coursetitle: Coursetitle, imgmedia: imgmedia, Coursecat: Coursecat, C_details: C_details, C_duration: C_duration, C_mprice: C_mprice, C_sprice: C_sprice, C_Tagline: C_Tagline, C_Taglinet: C_Taglinet }
            const data = await fetch("api/Addnewcourse", {
                method: "POST",
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(sendReg)
            }).then((b) => {
                return b.json();
            })
                .then((parsedReg) => {
                    // console.log(parsedReg.status)
                    if (parsedReg.status == true) {
                        setOpen(false)
                        setLoading(false);
                        router.push('/Courses')
                    } else {
                        setLoading(false);
                        setIsalertText(parsedReg.data)
                        setIsalert(true);
                    }


                })
        } else {

            setIsalertText('All Fields are required')
            setIsalert(true);

        }


    }
    useEffect(() => {
        const handleSubmit = async () => {
            const dataid = '08c5th4rh86ht57h6g';
            const sendUM = { dataid }
            const data = await fetch("/api/Catlist", {
                method: "POST",
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(sendUM)
            }).then((a) => {
                return a.json();
            })
                .then((parsed) => {
                    // console.log(parsed)
                    setRetdata(parsed)
                    setIsLoading(false)
                })
        }
        handleSubmit()
    }, [router.query])

    const descriptionElementRef = useRef(null);
    useEffect(() => {
        if (open) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [open]);

    return (

        <>
            <div className={styles.PageheaderBoxA}>
                <div className={styles.Btnmy} onClick={handleClickOpen('paper')}>
                    <span>Add New ds</span>
                </div>
            </div>
            <Dialog
                open={open}
                onClose={handleClose}
                scroll={scroll}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >
                <DialogTitle id="scroll-dialog-title">Add new course</DialogTitle>
                <DialogContent dividers={scroll === 'paper'}>

                    <div className={styles.modalcontent}>
                        <p>{jobslug}</p>
                        <div className={styles.ModalinputBox}>
                            {isalert &&
                                <div className={styles.alerttext}>
                                    <Alert severity="error">{isalertText}</Alert>
                                </div>

                            }

                            {isLoading &&
                                <div>
                                    <div style={{ height: '10px' }}> </div>
                                    <Skeleton variant="rectangular" height={60} />
                                    <div style={{ height: '10px' }}> </div>
                                </div>
                            }
                            {!isLoading &&
                                <div className={styles.LoginBox_input}>
                                    <select className={styles.Selectdropdown} id='SelectedCat' onChange={ChangeCat}>
                                        <option value='0'>Select category</option>
                                        {Retdata.map((item) => (
                                            <option key={item.id} value={item.catid}>{item.cattitle}</option>
                                        ))}
                                    </select>
                                </div>
                            }
                            <div style={{ height: '10px' }}> </div>
                            <div className={styles.LoginBox_input}>
                                <TextField fullWidth label="Course title" id="Coursetitle" onChange={handleChangeCoursetitle} value={Coursetitle} />
                            </div>
                            <div style={{ height: '10px' }}> </div>
                            <div className={styles.LoginBox_input}>
                                <TextField fullWidth label="Course details" id="setC_details" onChange={handleChangeC_details} value={C_details} />
                            </div>
                            <div style={{ height: '10px' }}> </div>
                            <div className={styles.LoginBox_input}>
                                <TextField fullWidth label="Course duration" id="setC_duration" onChange={handleChangeC_duration} value={C_duration} />
                            </div>
                            <div style={{ height: '10px' }}> </div>
                            <div className={styles.LoginBox_inputflex}>
                                <div>
                                    <TextField fullWidth label="Main price" id="setC_mprice" onChange={handleChangeC_mprice} value={C_mprice} />
                                </div>
                                <div className={styles.LoginBox_inputflexB}>
                                    <TextField fullWidth label="Sale price" id="setC_sprice" onChange={handleChangeC_sprice} value={C_sprice} />
                                </div>
                            </div>
                            <div style={{ height: '10px' }}> </div>
                            <div className={styles.LoginBox_input}>
                                <TextField fullWidth label="Course tagline" id="setC_Tagline" onChange={handleChangeC_Tagline} value={C_Tagline} />
                            </div>
                            <div style={{ height: '10px' }}> </div>
                            <div className={styles.LoginBox_input}>
                                <TextField fullWidth label="Course 	tagline two" id="setC_Taglinet" onChange={handleChangeC_Taglinet} value={C_Taglinet} />
                            </div>
                            <div style={{ height: '20px' }}> </div>


                            <div className={styles.LoginBox_input}>
                                <input type="hidden" name='imgmedia' id='imgmedia' />
                            </div>
                          
                        </div>

                    </div>
                </DialogContent>
                <DialogActions>



                    {!Loading && (
                        <div>  <Button onClick={handleClose}>Cancel</Button>
                            <Button onClick={AddcatBtn}>Save</Button></div>

                    )}
                    {Loading && (
                        <div className={styles.Enqmodal_proccess}>
                            <CircularProgress />
                            <small>Proccessing...</small>
                        </div>
                    )}
                </DialogActions>
            </Dialog>
        </>
    )
}

export default Applycourse