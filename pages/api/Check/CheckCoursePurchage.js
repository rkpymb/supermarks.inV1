import axios from 'axios';
import jwt from 'jsonwebtoken';


export default function handler(req, res) {
    
    if (req.method === 'POST') {
        const usermobile = req.body.UserMob;
        const decoded = jwt.verify(usermobile, process.env.MYKEY);
        const dataNew = decoded.userM
       
        axios.post(`${process.env.API_URL}Website/Course/CheckCoursePurchage.php`, { updatekey: process.env.MYKEY, UserMob: dataNew, pid: req.body.pid, amt: req.body.amt, mprice: req.body.mprice, Discount: req.body.Discount, Coupon: req.body.Coupon, CouponDiscount: req.body.CouponDiscount, ProductType: req.body.ProductType, OrderTitle: req.body.OrderTitle, Validity: req.body.Validity })
            .then((rest) =>
                res.status(200).json(rest.data));
    } else {

    }
}