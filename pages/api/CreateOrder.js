import axios from 'axios';
export default function handler(req, res) {
    if (req.method === 'POST') {
        // Process a POST request - Example:
      
        axios.post(`${process.env.API_URL}CreateOrder.php`, { updatekey: process.env.MYKEY, UserMobile: req.body.UserMobile, Pid: req.body.Pid, Discount: req.body.Discount, TotalAmt: req.body.TotalAmt, Coupon: req.body.Coupon, CouponDiscount: req.body.CouponDiscount, TotalDiscount: req.body.TotalDiscount, ProductType: req.body.ProductType, mprice: req.body.mprice, validity: req.body.validity } )
            .then((rest) =>
                res.status(200).json(rest.data));
    } else {
        // Handle any other HTTP method
    }
}