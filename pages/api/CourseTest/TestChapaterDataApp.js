import axios from 'axios';
export default function handler(req, res) {

    if (req.method === 'POST') {
        axios.post(`${process.env.API_URL}Website/TS/TestChapaterDataApp.php`, { updatekey: process.env.MYKEY, GETID: req.body.GETID })
            .then((rest) =>
                res.status(200).json(rest.data));
    } else {

    }
}