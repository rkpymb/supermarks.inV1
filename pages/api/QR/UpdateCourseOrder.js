import axios from 'axios';
export default function handler(req, res) {
    if (req.method === 'POST') {
        axios.post(`${process.env.API_URL}Website/Payment/UpdateCourseOrder.php`, { updatekey: process.env.MYKEY, OrderID: req.body.OrderID, upi_txn_id: req.body.upi_txn_id, customer_vpa: req.body.customer_vpa })
            .then((rest) =>
                res.status(200).json(rest.data));
    } else {

    }
}