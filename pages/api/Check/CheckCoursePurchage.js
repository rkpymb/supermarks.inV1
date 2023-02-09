import axios from 'axios';
export default function handler(req, res) {
    if (req.method === 'POST') {
        axios.post(`${process.env.API_URL}Website/Course/CheckCoursePurchage.php`, { updatekey: process.env.MYKEY, UserMob: req.body.UserMob, pid: req.body.pid })
            .then((rest) =>
                res.status(200).json(rest.data));
    } else {

    }
}