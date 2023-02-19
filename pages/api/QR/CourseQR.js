import axios from 'axios';
export default function handler(req, res) {
    if (req.method === 'POST') {
        axios.post(`${process.env.API_URL}Website/Payment/upipaymentqrcode.php`, { updatekey: process.env.MYKEY, OrderID: req.body.OrderID})
            .then((rest) =>
                res.status(200).json(rest.data));
    } else {

    }
}