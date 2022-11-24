import axios from 'axios';
export default function handler(req, res) {
    if (req.method === 'POST') {
        axios.post(`${process.env.API_URL}TestSubmit.php`, { updatekey: process.env.MYKEY, OPS: req.body.OPS, Atempttestid: req.body.Atempttestid, mobile: req.body.mobile })
            .then((rest) =>
                res.status(200).json(rest.data));
    } else {
        // Handle any other HTTP method
    }
}