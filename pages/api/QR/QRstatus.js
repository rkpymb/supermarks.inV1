import axios from 'axios';
export default function handler(req, res) {
    if (req.method === 'POST') {
        axios.post(`https://merchant.upigateway.com/api/check_order_status`, { key: process.env.QRKEY, client_txn_id: req.body.OrderID, txn_date: req.body.txn_date })
            .then((rest) =>
                res.status(200).json(rest.data));
    } else {

    }
}