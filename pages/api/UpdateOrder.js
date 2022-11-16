import axios from 'axios';
export default function handler(req, res) {
    if (req.method === 'POST') {
        // Process a POST request - Example:
      
        axios.post(`${process.env.API_URL}UpdateOrder.php`, { updatekey: process.env.MYKEY, UserMobile: req.body.UserMobile, Paymentid: req.body.Paymentid, refid: req.body.refid, Orderid: req.body.Orderid  } )
            .then((rest) =>
                res.status(200).json(rest.data));
    } else {
        // Handle any other HTTP method
    }
}