import axios from 'axios';
export default function handler(req, res) {
    if (req.method === 'POST') {
        axios.post(`${process.env.API_URL}Website/Course/TestByCatid.php`, { updatekey: process.env.MYKEY, CATID: req.body.CATID })
            .then((rest) =>
                res.status(200).json(rest.data));
    } else {

    }
}