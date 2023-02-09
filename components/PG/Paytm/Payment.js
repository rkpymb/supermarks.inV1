import React, { useState } from 'react'
import Head from 'next/head'
import Script from 'next/script'
const Payment = () => {
    const [MID,setMIT] = useState('DXeYMu50879259209190')
  return (
    <>
          <Head>
              <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0" />
              <title>Payment Page</title>
              <Script type="application/javascript" crossorigin="anonymous" src={`https://<%= data.env %>/merchantpgpui/checkoutjs/merchants/DXeYMu50879259209190.js`}/>
          </Head>
    </>
  )
}

export default Payment
