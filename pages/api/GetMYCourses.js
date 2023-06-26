import axios from 'axios';
import jwt from 'jsonwebtoken';
export default function handler(req, res) {
    if (req.method === 'POST') {
        const decoded = jwt.verify(req.body.usermobnow, process.env.MYKEY);
        axios.post(`${process.env.API_URL}Website/Datalist/GetMYCourses.php`, { updatekey: process.env.MYKEY, userid: decoded.userM })
            .then((rest) =>
                res.status(200).json(rest.data));
        
    } 
}