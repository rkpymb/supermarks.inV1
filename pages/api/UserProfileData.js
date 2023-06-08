import axios from 'axios';
const jwt = require('jsonwebtoken');
const CryptoJS = require("crypto-js");
export default function handler(req, res) {
    if (req.method === 'POST') {
        const decoded = jwt.verify(req.body.usermobile, process.env.MYKEY);
        axios.post(`${process.env.API_URL}Website/UserProfileData.php`, { updatekey: process.env.MYKEY, mob: decoded.usermob }).then((response) => {
            // console.log(response.data);
            if (response.data.statusdata = true) {
                const userData = response.data;
                const Newtoken = CryptoJS.AES.encrypt(
                   JSON.stringify(userData),
                    process.env.CryptoJSKEY
                ).toString();
                res.status(200).json({ usertype: true, token: Newtoken });
            } else {
                res.status(200).json({ usertype: false });
            }
        });
       
     
    } 
}


const secretPass = "XkhZG4fW2t2W";
