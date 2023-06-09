import axios from 'axios';
import CryptoJS from "crypto-js";
export default function handler(req, res) {
    if (req.method === 'POST') {
        const bytes = CryptoJS.AES.decrypt(req.body.usermobile, process.env.CryptoJSKEY);
        const dataNew = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
        axios.post(`${process.env.API_URL}Website/UserProfileData.php`, { updatekey: process.env.MYKEY, mob: dataNew }).then((response) => {
            console.log(response.data);
            if (response.data.statusdata == true) {
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

