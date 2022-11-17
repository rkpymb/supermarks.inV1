import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import styles from '../../styles/Home.module.css'
import Head from 'next/head'
import Image from 'next/image'
import Bupass from '../../components/Bupass'
import { BsCheckCircle } from "react-icons/bs";
const Slug = (props) => {
  
    const [Orderid, setOrderid] = useState(props.myBlog.data.Orderid);
    const [OrderStatusText, setOrderStatusText] = useState(props.myBlog.data.OrderStatusText);
    const [Pid, setPid] = useState(props.myBlog.data.Pid);
    const [Mprice, setMprice] = useState(props.myBlog.data.mprice);
    const [Discount, setDiscount] = useState(props.myBlog.data.Discount);
    const [amt, setAmt] = useState(props.myBlog.data.amt);
    const [PayStatusText, setPayStatusText] = useState(props.myBlog.data.PayStatusText);
    const router = useRouter();

    return <div>
        <Head>
            <title>Order Status #{Orderid}</title>
        </Head>
        <div className={styles.container}>
            <div style={{ height: '50px' }}></div>
            <div className={styles.containerInovice}>
                <div className={styles.containerInoviceBox}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold' }}>ORDER DETAILS</div>
                    <div style={{ height: '1px', backgroundColor: 'black', marginTop: '5px', marginBottom: '5px' }}></div>


                    <div className={styles.containerInoviceHeader}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <div><BsCheckCircle /></div>
                            <div style={{ marginLeft: '5px', marginTop: '-5px', fontWeight: 'bold' }}>{OrderStatusText}</div>
                        </div>
                        <div>
                            <div style={{ fontWeight: 'bold', fontSize: '10px' }}>Order ID #{Orderid}</div>
                        </div>
                    </div>
                    <div style={{ height: '0.5px', backgroundColor: 'black', marginTop: '5px', marginBottom: '5px' }}></div>

                    <div className={styles.OrderDetailsItem}>
                        <div className={styles.OrderDetailsItemLeft}>
                          <span>Product Name</span>
                        </div>
                        <div className={styles.OrderDetailsItemRight}>
                            <span>{Pid}</span>
                        </div>
                    </div>
                    <div className={styles.OrderDetailsItem}>
                        <div className={styles.OrderDetailsItemLeft}>
                          <span>Price</span>
                        </div>
                        <div className={styles.OrderDetailsItemRight}>
                            <span>₹ {Mprice}</span>
                        </div>
                    </div>
                    <div className={styles.OrderDetailsItem}>
                        <div className={styles.OrderDetailsItemLeft}>
                          <span>Discount</span>
                        </div>
                        <div className={styles.OrderDetailsItemRight}>
                            <span>₹ {Discount}</span>
                        </div>
                    </div>
                    <div className={styles.OrderDetailsItem}>
                        <div className={styles.OrderDetailsItemLeft}>
                          <span>Total</span>
                        </div>
                        <div className={styles.OrderDetailsItemRight}>
                            <span>₹ {amt}</span>
                        </div>
                    </div>
                    <div className={styles.OrderDetailsItem}>
                        <div className={styles.OrderDetailsItemLeft}>
                            <span>Order Status</span>
                        </div>
                        <div className={styles.OrderDetailsItemRight}>
                            <span>{OrderStatusText}</span>
                        </div>
                    </div>
                    <div className={styles.OrderDetailsItem}>
                        <div className={styles.OrderDetailsItemLeft}>
                            <span>Payment Sataus</span>
                        </div>
                        <div className={styles.OrderDetailsItemRight}>
                            <span>{PayStatusText}</span>
                        </div>
                    </div>

                </div>


            </div>
            <div style={{ height: '50vh' }}></div>

        </div>


    </div>
};

export async function getServerSideProps(context) {
    // console.log(ID)
    const ID = context.query.pageno[0];
    const pid = ID;
    let data = await fetch(`${process.env.API_URL}getOrderDetails.php?pid=${pid}`)
    let myBlog = await data.json();
    return {
        props: { myBlog }, // will be passed to the page component as props
    }
}


export default Slug;