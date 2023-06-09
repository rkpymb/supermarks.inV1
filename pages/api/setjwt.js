
const jwt = require('jsonwebtoken');
const CryptoJS = require("crypto-js");
export default function handler(req, res) {
    const Newtoken = CryptoJS.AES.encrypt(
        JSON.stringify(req.body.usermobile),
        process.env.CryptoJSKEY
    ).toString();
    res.status(200).json(Newtoken);
}
