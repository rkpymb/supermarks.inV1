import axios from 'axios';

import CryptoJS from "crypto-js";
export default function handler(req, res) {
    
    if (req.method === 'POST') {
        const bytes = CryptoJS.AES.decrypt(req.body.usermobile, process.env.CryptoJSKEY);
        const dataNew = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
       
        axios.post(`${process.env.API_URL}Website/Course/CheckCoursePurchage.php`, { updatekey: process.env.MYKEY, UserMob: dataNew, pid: req.body.pid, amt: req.body.amt, mprice: req.body.mprice, Discount: req.body.Discount, Coupon: req.body.Coupon, CouponDiscount: req.body.CouponDiscount, ProductType: req.body.ProductType, OrderTitle: req.body.OrderTitle, Validity: req.body.Validity })
            .then((rest) =>
                res.status(200).json(rest.data));
    } else {

    }
}