import axios from 'axios';
export default function handler(req, res) {
    if (req.method === 'POST') {
        axios.post(`${process.env.API_URL}Website/Course/GetCourseEducators.php`, { updatekey: process.env.MYKEY, Pid: req.body.Pid })
            .then((rest) =>
                res.status(200).json(rest.data));
    } else {

    }
}