import axios from 'axios';
const CryptoJS = require("crypto-js");
export default function handler(req, res) {
   
    if (req.method === 'POST') {
        const bytes = CryptoJS.AES.decrypt(req.body.usermobnow, process.env.CryptoJSKEY);
        const dataNew = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
       
        axios.post(`${process.env.API_URL}Website/Datalist/GetMYCourses.php`, { updatekey: process.env.MYKEY, userid: dataNew })
            .then((rest) =>
                res.status(200).json(rest.data));
    } else {

    }
}