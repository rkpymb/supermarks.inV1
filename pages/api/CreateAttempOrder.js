import axios from 'axios';
export default function handler(req, res) {
    if (req.method === 'POST') {
        axios.post(`${process.env.API_URL}CreateAttempOrder.php`, { updatekey: process.env.MYKEY, AtemptTitle: req.body.AtemptTitle, Atempttestid: req.body.Atempttestid, Atemptchapterid: req.body.Atemptchapterid, usermob: req.body.usermob })
            .then((rest) =>
                res.status(200).json(rest.data));
    } else {
        // Handle any other HTTP method
    }
}