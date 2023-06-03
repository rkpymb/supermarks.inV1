import axios from 'axios';
export default function handler(req, res) {

    if (req.method === 'POST') {
        axios.post(`${process.env.API_URL}CheckOTP.php`, { updatekey: process.env.MYKEY, usermobile: req.body.usermobile, EnterText: req.body.EnterText })
            .then((rest) =>
                res.status(200).json(rest.data));
    } else {

    }
}