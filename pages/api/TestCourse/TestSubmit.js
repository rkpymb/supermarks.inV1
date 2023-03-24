import axios from 'axios';
export default function handler(req, res) {
    if (req.method === 'POST') {
        axios.post(`${process.env.API_URL}Website/TestCourse/TestSubmit.php`, { updatekey: process.env.MYKEY, OPS: req.body.OPS, Atempttestid: req.body.Atempttestid, mobile: req.body.mobile, takenTime: req.body.takenTime, takenTimeSec: req.body.takenTimeSec })
            .then((rest) =>
                res.status(200).json(rest.data));
    } else {
        // Handle any other HTTP method
    }
}