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
import { DomainURLMain, AppName } from '../../Data/config'
import * as animationData from '../../Data/Lottie/22113-free-shipping.json'
import * as animationData2 from '../../Data/Lottie/113973-share.json'
import Lottie from 'react-lottie'

import {
    EmailShareButton,
    FacebookShareButton,
    HatenaShareButton,
    InstapaperShareButton,
    LineShareButton,
    LinkedinShareButton,
    LivejournalShareButton,
    MailruShareButton,
    OKShareButton,
    PinterestShareButton,
    PocketShareButton,
    RedditShareButton,
    TelegramShareButton,
    TumblrShareButton,
    TwitterShareButton,
    ViberShareButton,
    VKShareButton,
    WhatsappShareButton,
    WorkplaceShareButton
} from "react-share";

import {
    FacebookShareCount,
    HatenaShareCount,
    OKShareCount,
    PinterestShareCount,
    RedditShareCount,
    TumblrShareCount,
    VKShareCount
} from "react-share";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

import {
    EmailIcon,
    FacebookIcon,
    FacebookMessengerIcon,
    HatenaIcon,
    InstapaperIcon,
    LineIcon,
    LinkedinIcon,
    LivejournalIcon,
    MailruIcon,
    OKIcon,
    PinterestIcon,
    PocketIcon,
    RedditIcon,
    TelegramIcon,
    TumblrIcon,
    TwitterIcon,
    ViberIcon,
    VKIcon,
    WeiboIcon,
    WhatsappIcon,
    WorkplaceIcon
} from "react-share";

export default function CourseCheckout({ DataCourse, Mob }) {
    const router = useRouter()
    const [open, setOpen] = useState(true);
    const [ShowBtnloader, setShowBtnloader] = useState(false);
    const [Applybtnshow, setApplybtnshow] = useState(false);
    const [CouponApplied, setCouponApplied] = useState(false);
    const [CouponAppliedText, setCouponAppliedText] = useState('');
    const [CourseRetData, setCourseRetData] = useState(DataCourse);
    const [TotalDiscount, setTotalDiscount] = useState('');
    const [TotalAmt, setTotalAmt] = useState('');
    const [CuponCode, setCuponCode] = useState('');
    const [UserMob, setUserMob] = useState(Mob);
    const [ProductType, setProductType] = useState('Course');
    const [OrderID, setOrderID] = useState('0');
    const [shareUrl, setshareUrl] = useState(`${DomainURLMain}Course/${CourseRetData.pid}`);
    const [CodeDiscount, setCodeDiscount] = useState('0');
    const [DoneShow, setDoneShow] = useState(false);

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
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

  


    useEffect(() => {
        setTotalDiscount(CourseRetData.MainPrice - CourseRetData.SalePrice);
        setTotalAmt(CourseRetData.SalePrice);

       

    }, []);

    const CreateOrderBTN = async () => {
        setShowBtnloader(true)
        const sendUM = { UserMob: UserMob, pid: CourseRetData.pid, amt: TotalAmt, mprice: CourseRetData.MainPrice, Discount: TotalDiscount, Coupon: CuponCode, CouponDiscount: CodeDiscount, ProductType: ProductType, OrderTitle: CourseRetData.title, Validity: CourseRetData.Validity }
        const data = await fetch("/api/Check/CheckTSPurchageFree", {
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
                    setShowBtnloader(false)
                    console.log(parsedCreateOrder);
                    setOrderID(parsedCreateOrder.RetData)
                    setDoneShow(true)

                } else {
                    alert(parsedCreateOrder.RetData)
                    setShowBtnloader(false)
                }

            })


    }




    return (
        <div>
            {/* <div className={styles.EnrollBtn_Course} style={{ backgroundColor: 'blue' }} onClick={handleClickOpen}>
                <span>Enroll For Free</span>
            </div> */}

            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}

            >

                {!DoneShow &&
                    <div className={styles.BgimgCourseCheckout}>

                        <div className={styles.BgimgCourseCheckoutWhitefade}>

                            <div className={styles.BoxCheckoutCourse}>

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
                                                        <td className={styles.tdtext}> - ₹ {CourseRetData.MainPrice}</td>
                                                    </tr>

                                                    <tr>
                                                        <td className={styles.tdtext}>Total</td>
                                                        <td className={styles.tdtext}>:</td>
                                                        <td className={styles.tdtext}>₹ 0000</td>
                                                    </tr>
                                                </tbody>
                                            </table>

                                        </div>


                                    </div>
                                    <div className={styles.FooterPaytbn}>
                                        <div className={styles.FooterPaytbnBox}>
                                            <div style={{ minWidth: '30%' }}>
                                                <span style={{ color: '#ffaf00', fontSize: '30px', fontWeight: 'bold' }}>Free</span>
                                            </div>


                                            {!ShowBtnloader &&
                                                <div className={styles.CreateOrderBtnfinal} style={{ backgroundColor: '#f1582e', width: '200px' }} onClick={CreateOrderBTN}>
                                                    <span>Add to my Account</span>
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
                }

                {DoneShow &&
                    <div className={styles.BgimgCourseCheckout}>

                        <div className={styles.BgimgCourseCheckoutWhitefade}>

                            <div className={styles.BoxCheckoutCourse}>
                                <div className={styles.ModalHeaderT}>
                                    <div className={styles.ModalHeaderTBox}>
                                        <div>
                                            <div>
                                                <span style={{ fontSize: '15px', fontWeight: 'bold' }}>Free Subscription Added 😍</span>
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

                                <div className={styles.FreeSubBox}>
                                    <div>
                                        <Lottie options={defaultOptions}
                                            width='300px'
                                            height='300px'
                                            isStopped={false}
                                            isPaused={false} />
                                    </div>
                                    <div>
                                        <b> Free Subscription Added Succesfully to you account 😍</b>
                                    </div>
                                    <div className={styles.Sharebox}>
                                        <Lottie options={defaultOptions2}
                                         
                                            isStopped={false}
                                            isPaused={false}
                                        
                                        />
                                        <div>
                                            <h1 style={{margin:0}}>Share <span style={{ color: '#a6a4e8' }}>Free</span> opportunity</h1>
                                            <span>Share Free Courses and Test Series with your known 🤩</span>
                                            <div className={styles.Shareboxicons}>
                                               
                                                <div className={styles.ShareboxiconsItems}>
                                                    <FacebookShareButton url={shareUrl}>
                                                        <FacebookIcon size={32} round={true} />
                                                    </FacebookShareButton>
                                                </div>
                                               
                                               
                                                <div className={styles.ShareboxiconsItems}>
                                                    <WhatsappShareButton url={shareUrl}>
                                                        <WhatsappIcon size={32} round={true} />
                                                    </WhatsappShareButton>
                                                </div>
                                               
                                                <div className={styles.ShareboxiconsItems}>
                                                    <TelegramShareButton url={shareUrl}>
                                                        <TelegramIcon size={32} round={true} />
                                                    </TelegramShareButton>
                                                </div>
                                                <div className={styles.ShareboxiconsItems}>
                                                    <TwitterShareButton url={shareUrl}>
                                                        <TwitterIcon size={32} round={true} />
                                                    </TwitterShareButton>
                                                </div>
                                            </div>
                                            
                                        </div>
                                       
                                    </div>
                                </div>



                            </div>

                        </div>






                    </div>
                }




            </Dialog>

        </div>
    );
}
