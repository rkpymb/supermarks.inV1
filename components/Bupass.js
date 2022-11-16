import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { useRouter } from 'next/router'
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import styles from '../styles/Home.module.css'

import Razorpaybtn from '../components/Razorpaybtn'
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function Bupass(props) {
    const router = useRouter();

    const [Passtitle, setPasstitle] = useState(props.passtitle);
    const [Validity, setValidity] = useState(props.Validity);
    const [Maintitle, setMaintitle] = useState(props.Maintitle);
    const [pid, setPid] = useState(props.pid);
    const [Sprice, setSprice] = useState(props.Sprice);
    const [Mprice, setMprice] = useState(props.Mprice);
    const [Coupon, setCoupon] = useState('0');
    const [CouponDiscount, setCouponDiscount] = useState('0');
    const [ProductType, setProductType] = useState('Test Series');
    const [Discount, setDiscount] = useState(props.Mprice - props.Sprice);
    const [Total, setTotal] = useState(props.Sprice);
    const [passid, setPpassid] = useState(props.passid);
    const [Retdata, setRetdata] = useState([]);
    const [open, setOpen] = React.useState(false);
    const [UserName, setUserName] = useState('');
    const [UserEmail, setUserEmail] = useState('');
    const [UserMobile, setUserMobile] = useState('');
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    useEffect(() => {

        try {
            if (localStorage.getItem('userid')) {
               
                const usermobnow = localStorage.getItem('userid');
                const sendUser = { usermobnow }
                const data = fetch("/api/check", {
                    method: "POST",
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(sendUser)
                }).then((a) => {
                    return a.json();
                })
                    .then((parsedUser) => {
                        setUserName(parsedUser.data.name)
                        setUserEmail(parsedUser.data.email)
                        setUserMobile(parsedUser.data.mobile)
                        console.log(parsedUser.data)

                    })

            } else {
               
            }
        } catch (error) {
            console.error(error)
            // localStorage.clear()
        }
        // check login credential end

    }, [router.query]);
    return (
        <div>

            <Button variant="outlined" onClick={handleClickOpen}>
                Buy Now
            </Button>
            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
            >
                <AppBar sx={{ position: 'relative' }}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={handleClose}
                            aria-label="close"
                        >
                            <CloseIcon />
                        </IconButton>
                        <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                            {Passtitle} : Summary
                        </Typography>

                    </Toolbar>
                </AppBar>
                <div className={styles.PaymentBox}>

                    <div style={{ height: '30px' }}></div>

                    <div className={styles.PlanSumabrybox}>

                        <table>
                            <tr>
                                <td className={styles.tdtext}>Pass Name</td>
                                <td className={styles.tdtext}>:</td>
                                <td className={styles.tdtext}> {Passtitle} :   {Maintitle}</td>
                            </tr>
                            <tr>
                                <td className={styles.tdtext}>Validity</td>
                                <td className={styles.tdtext}>:</td>
                                <td className={styles.tdtext}>{Validity} days</td>
                            </tr>
                            <tr>
                                <td className={styles.tdtext}>Plan Type</td>
                                <td className={styles.tdtext}>:</td>
                                <td className={styles.tdtext}>{Passtitle}</td>
                            </tr>
                            <tr>
                                <td className={styles.tdtext}>Price</td>
                                <td className={styles.tdtext}>:</td>
                                <td className={styles.tdtext}>{Mprice}</td>
                            </tr>
                            <tr>
                                <td className={styles.tdtext}>Discount</td>
                                <td className={styles.tdtext}>:</td>
                                <td className={styles.tdtext}>{Discount}</td>
                            </tr>

                            <tr>
                                <td className={styles.tdtext}>Total</td>
                                <td className={styles.tdtext}>:</td>
                                <td className={styles.tdtext}>{Total}</td>
                            </tr>
                        </table>

                    </div>
                    <div className={styles.BuyPassboxBContent}>
                        <div>
                            <TextField fullWidth id="standard-basic" label="Enter Coupon Code" variant="outlined" />
                        </div>
                        <div className={styles.Applycodebtn}>
                            <span style={{ fontSize: '10px', fontWeight: '500' }}>Apply Coupon</span>
                        </div>
                    </div>

                    <div className={styles.Paybtnbox}>



                        <Razorpaybtn FinalAmt={Total} UserMobile={UserMobile} UserName={UserName} UserEmail={UserEmail} Pid={pid} Discount={Discount} Coupon={Coupon} CouponDiscount={CouponDiscount} TotalDiscount={Coupon} ProductType={ProductType} mprice={Mprice} />
                    </div>

                </div>
            </Dialog>


        </div>
    );
}