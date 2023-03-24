import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { TbDiscount2 } from "react-icons/tb";
import IconButton from '@mui/material/IconButton';
import CircularProgress from '@mui/material/CircularProgress'
import { useRouter, useParams } from 'next/router'
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import styles from '../../styles/Home.module.css'
import TextField from '@mui/material/TextField';
import PaymentChoosePage from '../PG/PaymentChoosePage'

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function CourseCheckout({ DataCourse }) {
    const router = useRouter()
    const [open, setOpen] = useState(false);
    const [ShowBtnloader, setShowBtnloader] = useState(false);
    const [Applybtnshow, setApplybtnshow] = useState(false);
    const [CouponApplied, setCouponApplied] = useState(false);
    const [CouponAppliedText, setCouponAppliedText] = useState('');
    const [CourseRetData, setCourseRetData] = useState(DataCourse);
    const [TotalDiscount, setTotalDiscount] = useState('');
    const [TotalAmt, setTotalAmt] = useState('');
    const [CuponCode, setCuponCode] = useState('');
    const [UserMob, setUserMob] = useState('');
    const [ProductType, setProductType] = useState('Course');
    const [OrderID, setOrderID] = useState('0');
    const [RazorpayOrderid, setRazorpayOrderid] = useState('');
    const [DataOrderid, setDataOrderid] = useState('');
    const [QRURL, setQRURL] = useState('0');
    const [CodeDiscount, setCodeDiscount] = useState('0');


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const CuponChange = () => {
        setApplybtnshow(true)
        const CuponCodex = document.querySelector('#CuponCode').value
        setCuponCode(CuponCodex)
        setCouponApplied(false)
        setTotalDiscount(CourseRetData.MainPrice - CourseRetData.SalePrice)
        setTotalAmt(CourseRetData.SalePrice)
    }



    useEffect(() => {
        setTotalDiscount(CourseRetData.MainPrice - CourseRetData.SalePrice);
        setTotalAmt(CourseRetData.SalePrice);

        // check login
        try {
            if (localStorage.getItem('userid')) {
                const usermobile = localStorage.getItem('userid');
                setUserMob(usermobile)
            } else {
                setIsLogin(false)
            }
        } catch (error) {
            console.error(error)
            // localStorage.clear()
        }
        // check login credential end

    }, []);

    const CreateOrderBTN = async () => {
        const PG = document.querySelector('#PG').value

        setShowBtnloader(true)
        const sendUM = { UserMob: UserMob, pid: CourseRetData.pid, amt: TotalAmt, mprice: CourseRetData.MainPrice, Discount: TotalDiscount, Coupon: CuponCode, CouponDiscount: CodeDiscount, ProductType: ProductType, OrderTitle: CourseRetData.title, Validity: CourseRetData.Validity }
        const data = await fetch("/api/Check/CheckCoursePurchage", {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(sendUM)
        }).then((a) => {
            return a.json();
        })
            .then((parsedCreateOrder) => {
                if (parsedCreateOrder.statusdata == true) {
                    console.log(parsedCreateOrder);
                    setOrderID(parsedCreateOrder.RetData)
                    if (PG == 'Razorpay') {
                        setShowBtnloader(false)
                        setDataOrderid(parsedCreateOrder.RetData)
                        const dataOrderidx = parsedCreateOrder.RetData
                        const Namex = 'Rajkr'
                        const Emailx = 'rajkumarymb@gmail.com'
                        // alert(dataOrderidx)
                        
                        RazorpayInit(dataOrderidx, TotalAmt, Namex, Emailx, UserMob)
                    } else if (PG == 'UPI') {
                        GenrateUPIQR(parsedCreateOrder.RetData)
                    }  

                } else {
                    alert(parsedCreateOrder.RetData)
                    setShowBtnloader(false)
                }

            })
        
        



    }




    const GenrateUPIQR = async (OIDNEW) => {
        const sendUMData = { OrderID: OIDNEW }
        const data = await fetch("/api/QR/CourseQR", {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(sendUMData)
        }).then((a) => {
            return a.json();
        })
            .then((parsedQR) => {
                console.log(parsedQR)
                if (parsedQR.statusdata === true) {
                    if (parsedQR.DataRet !== 'Plan Expired. Please Renew Plan') {
                        window.location.replace(parsedQR.DataRet);

                    } else {
                        alert('Something went wrong, Tray Again after some Time')
                        window.location.reload();
                    }

                } else {
                    alert('Something went wrong')
                }

            })


    }


    const ApplyCodebtn = async () => {
        setApplybtnshow(false)
        const sendUM = { UserMob: UserMob, pid: CourseRetData.pid, CuponCode: CuponCode }
        const data = await fetch("/api/Check/CheckCourseCoupon", {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(sendUM)
        }).then((a) => {
            return a.json();
        })
            .then((ApplyCodeRet) => {
                if (ApplyCodeRet.statusdata == true) {
                    setTotalDiscount(ApplyCodeRet.FinalDiscount)
                    setTotalAmt(ApplyCodeRet.FinalPay)
                    alert(ApplyCodeRet.RetData)
                    setCouponAppliedText(ApplyCodeRet.RetData)
                    setCodeDiscount(ApplyCodeRet.CodeDiscount)
                    setCouponApplied(true)
                } else {
                    setTotalDiscount(CourseRetData.MainPrice - CourseRetData.SalePrice)
                    setTotalAmt(CourseRetData.SalePrice)
                    alert(ApplyCodeRet.RetData)
                }

            })


    }


    // Razor pay 
    const RazorpayInit = async (dataOrderid, amt, name, email, mobile) => {
       
        const res = await initializeRazorpay();

        if (!res) {
            alert("Razorpay SDK Failed to load");
            return;
        }

        const sendUM = amt
        const data = await fetch("/api/razorpay", {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(sendUM)
        }).then((a) => {
            return a.json();
        })

        setRazorpayOrderid(data.id)
        var options = {
            key: process.env.RAZORPAY_KEY, // Enter the Key ID generated from the Dashboard
            name: "Flair my Event",
            currency: data.currency,
            amount: data.amount,
            order_id: data.id,
            description: 'ORG OrderID : ' + dataOrderid,
            image: "https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_2/Razorpay_1642012341.jpg",
            handler: function (response) {
                // Validate payment at server - using webhooks is a better idea.
                if (response.razorpay_order_id !== '') {
                    // UpdateOrder(response, dataOrderid)
                    console.log(response)
                }
            },
            prefill: {
                name: name,
                email: email,
                contact: mobile,
            },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    };
    const initializeRazorpay = () => {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = "https://checkout.razorpay.com/v1/checkout.js";
            document.body.appendChild(script);

            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };

            document.body.appendChild(script);
        });
    };

    //  Update Order 
    const UpdateOrder = async (ee, dataOrderid) => {
        setIsLoading(true)
        const PAYMENTID = ee.razorpay_payment_id
        const razorpay_order_id = ee.razorpay_order_id
        const sendRegUpdate = { Paymentid: PAYMENTID, refid: razorpay_order_id, Orderid: dataOrderid }
        const dataUpdate = await fetch("/api/UpdateSubscriptionOrder", {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(sendRegUpdate)
        }).then((b) => {
            return b.json();
        })
            .then((parsedUpdateorder) => {

                if (parsedUpdateorder.statusdata == true) {
                    setAlertboxText('Payment Successfully Received. please wait..')
                    alert(parsedUpdateorder.dataRet)
                    window.location.href = `https://fmevendorpanel.vercel.app/`;

                } else {
                    alert(parsedUpdateorder.dataRet)
                }
            })


    }
    // Razor pay end
    return (
        <div>
            <div className={styles.EnrollBtn_Course} style={{ backgroundColor: '#f1582e' }} onClick={handleClickOpen}>
                <span>Buy Course</span>
            </div>

            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}

            >
                <div className={styles.BgimgCourseCheckout}>

                    <div className={styles.BgimgCourseCheckoutWhitefade}>

                        <div className={styles.BoxCheckoutCourse}>
                            <div className={styles.ModalHeaderT}>
                                <div className={styles.ModalHeaderTBox}>
                                    <div>
                                        <div>
                                            <span style={{ fontSize: '15px', fontWeight: 'bold' }}>Checkout</span>
                                        </div>
                                        <div>
                                            <span style={{ fontSize: '10px' }}>{CourseRetData.title}</span>
                                        </div>
                                    </div>
                                    <div>
                                        <IconButton
                                            edge="start"
                                            color="inherit"
                                            onClick={handleClose}
                                            aria-label="close"
                                        >
                                            <CloseIcon />
                                        </IconButton>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className={styles.ModalContentBox}>
                                    <div style={{ margin: '20px' }}> </div>
                                    <div style={{ margin: '20px' }}> </div>
                                    <div className={styles.CourseCheckoutwhitebox}>
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td className={styles.tdtext}>Course Title</td>
                                                    <td className={styles.tdtext}>:</td>
                                                    <td className={styles.tdtext}> {CourseRetData.title}</td>
                                                </tr>
                                                <tr>
                                                    <td className={styles.tdtext}>Validity</td>
                                                    <td className={styles.tdtext}>:</td>
                                                    <td className={styles.tdtext}>{CourseRetData.Validity} days</td>
                                                </tr>

                                                <tr>
                                                    <td className={styles.tdtext}>Price</td>
                                                    <td className={styles.tdtext}>:</td>
                                                    <td className={styles.tdtext}>₹ {CourseRetData.MainPrice}</td>
                                                </tr>
                                                <tr>
                                                    <td className={styles.tdtext}>Discount</td>
                                                    <td className={styles.tdtext}>:</td>
                                                    <td className={styles.tdtext}> - ₹ {TotalDiscount}</td>
                                                </tr>

                                                <tr>
                                                    <td className={styles.tdtext}>Total</td>
                                                    <td className={styles.tdtext}>:</td>
                                                    <td className={styles.tdtext}>₹ {TotalAmt}</td>
                                                </tr>
                                            </tbody>
                                        </table>

                                    </div>

                                    <div className={styles.CourseCheckoutwhitebox}>
                                        <div style={{ margin: '20px' }}> </div>
                                        <div >
                                            <TextField fullWidth label="🎁 Apply Coupon Code" id="CuponCode" onChange={CuponChange} value={CuponCode} />
                                        </div>
                                        <div style={{ margin: '10px' }}> </div>
                                        {Applybtnshow &&
                                            <div>
                                                <Button variant="contained" size="small" onClick={ApplyCodebtn}>
                                                    APPLY
                                                </Button>
                                            </div>
                                        }
                                        {CouponApplied &&
                                            <div className={styles.SaveTodayBoxCourse}>
                                                <div className={styles.SaveTodayBoxCourseA}>
                                                    <span style={{ fontSize: '35px' }}><TbDiscount2 /></span>
                                                </div>
                                                <div className={styles.SaveTodayBoxCourseB}>
                                                    <div>Coupon Code Applied Successfully</div>
                                                    <div style={{ fontWeight: 500 }}>{CouponAppliedText}</div>

                                                </div>
                                            </div>
                                        }
                                    </div>

                                </div>
                                <PaymentChoosePage />

                                <div className={styles.FooterPaytbn}>
                                    <div className={styles.FooterPaytbnBox}>
                                        <div style={{ minWidth: '30%' }}>
                                            <div>
                                                <span style={{ fontSize: '10px' }}>Total to pay</span>
                                            </div>
                                            <div>
                                                <span>₹ {TotalAmt}</span>
                                            </div>
                                        </div>


                                        {!ShowBtnloader &&
                                            <div className={styles.CreateOrderBtnfinal} style={{ backgroundColor: '#f1582e', width: '200px' }} onClick={CreateOrderBTN}>
                                                <span>Pay Now</span>
                                            </div>
                                        }
                                        {ShowBtnloader &&
                                            <div style={{ margin: '10px' }}><CircularProgress color="inherit" /></div>
                                        }


                                    </div>
                                </div>
                            </div>



                        </div>

                    </div>






                </div>

            </Dialog>

        </div>
    );
}
