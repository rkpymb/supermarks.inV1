import axios from 'axios';
const jwt = require('jsonwebtoken');
export default function handler(req, res) {
   
    if (req.method === 'POST') {
        const decoded = jwt.verify(req.body.UserMob, process.env.MYKEY);
        axios.post(`${process.env.API_URL}Website/Course/CheckCoursePurchageFree.php`, { updatekey: process.env.MYKEY, UserMob: decoded.usermob, pid: req.body.pid, amt: req.body.amt, mprice: req.body.mprice, Discount: req.body.Discount, Coupon: req.body.Coupon, CouponDiscount: req.body.CouponDiscount, ProductType: req.body.ProductType, OrderTitle: req.body.OrderTitle, Validity: req.body.Validity })
            .then((rest) =>
                res.status(200).json(rest.data));
    } else {

    }
}