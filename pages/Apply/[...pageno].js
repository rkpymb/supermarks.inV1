import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import styles from '../../styles/Home.module.css'
import Head from 'next/head'
import CircularProgress from '@mui/material/CircularProgress';
import TextField from '@mui/material/TextField';
import { BsFillArrowRightCircleFill } from "react-icons/bs";
const Slug = (props) => {

    const router = useRouter();
    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [Mobile, setMobile] = useState('');
    const [Address, setAddress] = useState('');
    const [Resume, setResume] = useState('');
    const [Loading, setLoading] = useState(false);
    const [Viewtype, setViewtype] = useState(false);
    const [Alldonetoproceed, setAlldonetoproceed] = useState(false);

    const [blog, setBlog] = useState(props.myBlog);

    const handleChangeName = () => {
        const namex = document.querySelector('#Name').value
        setName(namex)

    }
    const handleChangeEmail = () => {
        const Emailx = document.querySelector('#Email').value
        setEmail(Emailx)

    }
    const handleChangeMobile = () => {
        const Mobilex = document.querySelector('#Mobile').value
        setMobile(Mobilex)

    }
    const handleChangeAddress = () => {
        const Addressx = document.querySelector('#Address').value
        setAddress(Addressx)

    }
    // upload resume
   
    // submit form

    const submitform = async () => {

        if (Name !== '' && Email !== '' && Mobile !== '' && Address !== '' && Resume !== '') {
            setLoading(true);
            setAlldonetoproceed(false);
            const sendReg = { Name: Name, Email: Email, Mobile: Mobile, Address: Address, Resume: Resume }
            const data = await fetch("../api/Submitjobform", {
                method: "POST",
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(sendReg)
            }).then((b) => {
                return b.json();
            })
                .then((parsedReg) => {
                    console.log(parsedReg.status)
                    if (parsedReg.status == true) {
                        setLoading(false);
                        setViewtype(true);
                    } else {
                        alert('Somethnig Went Wrong, please reload this page and try again.');
                    }
                   
                })
        } else {
            alert('All fields are required')
        }


    }

    const UploadMedia = async (e) => {
        setLoading(true);
        console.log(e.target.files)
        const files = e.target.files
        const formData = new FormData();
        formData.append('file', files[0])
        const data = await fetch("https://aitechnolog.com/skillfilt/api/uploads/uploadfiles.php", {
            method: 'POST',
            body: formData
        }).then((a) => {
            return a.json();
        })
            .then((parsed) => {
                console.log(parsed)
                const imgname = parsed.data
                const imgurl = 'https://aitechnolog.com/skillfilt/' + parsed.data
                document.getElementById("imgmedia").value = imgname;
                setCurimg(imgurl)
                setOpen(false)
                setViewType(true)
                setLoading(false)
            })
    }
    return <div>
        <Head>
            <title>Apply : {blog && blog.data.jobtitle} : Skillfilt</title>
            <meta name="description" content={blog && blog.data.jobtitle} />
            <meta property="og:image" content={blog && blog.data.img} />

        </Head>
        <div className={styles.container}>

            <div className={styles.Box70}>
                <div className={styles.jobapplicationform}>
                    {!Viewtype && (
                    <div>
                        <div style={{ height: '50px' }}> </div>
                        <div className={styles.LoginBox_input}>
                            <TextField fullWidth label="Enter Name" id="Name" onChange={handleChangeName} value={Name} />
                        </div>
                        <div style={{ height: '20px' }}> </div>
                        <div className={styles.LoginBox_input}>
                            <TextField fullWidth label="Enter Email" id="Email" onChange={handleChangeEmail} value={Email} />
                        </div>
                        <div style={{ height: '20px' }}> </div>
                        <div className={styles.LoginBox_input}>
                            <TextField fullWidth label="Enter Mobile" id="Mobile" onChange={handleChangeMobile} value={Mobile} />
                        </div>
                        <div style={{ height: '20px' }}> </div>
                        <div className={styles.LoginBox_input}>
                            <TextField fullWidth label="Enter Address" id="Address" onChange={handleChangeAddress} value={Address} />
                        </div>
                        <div style={{ height: '20px' }}> </div>
                        <div className={styles.LoginBox_input}>
                            <div><span>Upload Resume</span></div>
                            <input type="file" onChange={(e) => UploadMedia(e)} name='imgmedia' id='imgmedia' />
                        </div>
                    </div>
                     )}
                    {Loading && (
                        <div>
                            <div style={{ height: '20px' }}> </div>
                            <div className={styles.Enqmodal_proccess}>
                                <CircularProgress />
                                <small>Please wait...</small>
                            </div>
                        </div>
                    )}

                    {Alldonetoproceed &&  (
                        <div>
                            <div style={{ height: '20px' }}> </div>
                            <div className={styles.loginbtnTop} style={{ width: '120px', backgroundColor: 'black' }} onClick={submitform}>
                                <span><BsFillArrowRightCircleFill /></span>
                                <small>Submit form</small>
                            </div>
                        </div>
                    )}

                    {Viewtype && (
                        <div style={{ textAlign: 'center' }}>
                            <p>✅ The form has been successfully submitted, we will be get back to you asap.
                                Thank you </p>
                          
                        </div>
                    )}



                </div>
            </div>
        </div>
    </div>
};

export async function getServerSideProps(context) {
    // console.log(ID)
    const ID = context.query.pageno[0];
    const slug = ID;
    let data = await fetch(`${process.env.API_URL}g_job_details.php?slug=${slug}`)
    let myBlog = await data.json();

    return {
        props: { myBlog }, // will be passed to the page component as props
    }
}


export default Slug;