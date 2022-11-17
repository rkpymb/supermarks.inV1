import React, { useState, useEffect } from 'react';
import Head from "next/head";
import Image from "next/image";
import { useRouter, useParams } from 'next/router'
import Button from '@mui/material/Button';
import styles from "../styles/Home.module.css";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
export default function Home(props) {
    const router = useRouter()
    const [Total, setTotal] = useState(props.FinalAmt);
    const [Mprice, setMprice] = useState(props.mprice);
    const [Pid, setPid] = useState(props.Pid);
    const [UserMobile, setUserMobile] = useState(props.UserMobile);
    const [UserName, setUserName] = useState(props.UserName);
    const [UserEmail, setUserEmail] = useState(props.UserEmail);
    const [validity, setValidity] = useState(props.Validitydays);
    const [Discount, setDiscount] = useState(props.Discount);
    const [Coupon, setCoupon] = useState(props.Coupon);
    const [CouponDiscount, setCouponDiscount] = useState(props.CouponDiscount);
    const [TotalDiscount, setTotalDiscount] = useState(props.TotalDiscount);
    const [ProductType, setProductType] = useState(props.ProductType);
    const [Allok, setAllok] = useState(true);
    const [RazorpayOrderid, setRazorpayOrderid] = useState('');
    const [DataOrderid, setDataOrderid] = useState('');
    
    const [Loader, seLoader] = React.useState(false);

    const CreateOrder = async () => {
        seLoader(true);
        if (Allok == true) {
            const sendReg = { UserMobile: UserMobile, Pid: Pid, Discount: Discount, Coupon: Coupon, CouponDiscount: CouponDiscount, TotalDiscount: TotalDiscount, ProductType: ProductType, TotalAmt: Total, mprice: Mprice, validity: validity }
            const data = await fetch("/api/CreateOrder", {
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
                    if (parsedReg.statusdata == true) {
                     
                        makePayment(parsedReg.dataOrderid);
                   
                    } else {
                     
                    }
                })
        } else {
           
            // BackDropClose()
            // setIsalert(true);

        }


    }

    const UpdateOrder = async (ee, dataOrderid) => {
        
        // console.log(dataOrderid)
        const PAYMENTID = ee.razorpay_payment_id
        const razorpay_order_id = ee.razorpay_order_id
        // console.log(PAYMENTID)
        // console.log(razorpay_order_id)
      
        const sendRegUpdate = { UserMobile: UserMobile, Paymentid: PAYMENTID, refid: razorpay_order_id, Orderid: dataOrderid }
        const dataUpdate = await fetch("/api/UpdateOrder", {
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
                    router.push(`/OrderStatus/${parsedUpdateorder.dataOrderid}`)
                }
            })


    }

    const makePayment = async (dataOrderid) => {
       
        const res = await initializeRazorpay();

        if (!res) {
            alert("Razorpay SDK Failed to load");
            return;
        }

        const sendUM = props.FinalAmt 
        const data = await fetch("../api/razorpay", {
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
            name: "BOARD EXAM",
            currency: data.currency,
            amount: data.amount,
            order_id: data.id,
            description: 'ORG OrderID : ' + dataOrderid,
            image: "https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_2/Razorpay_1642012341.jpg",
            handler: function (response) {
                // Validate payment at server - using webhooks is a better idea.
                
               
                if (response.razorpay_order_id !== '') {
                    console.log('Payment Succesfully Sent to Marchant Account')
                    UpdateOrder(response, dataOrderid)
                   
                }
               
            },
            prefill: {
                name: UserName,
                email: UserEmail,
                contact: UserMobile,
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
    return (
        <div>
            <Head>
                <title>Make Payments 🔥</title>
                
                <link rel="icon" href="/favicon.ico" />
            </Head>

          
           
            {!Loader && (
                
                <Button variant="contained" onClick={CreateOrder} style={{ width: '100%' }}>
                    Pay now ₹ {Total}
                </Button>
            )}
            {Loader && (
                <Box sx={{ display: 'flex' }}>
                    <CircularProgress />
                </Box>

            )}
           
        </div>
    );
}

