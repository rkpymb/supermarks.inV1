
const jwt = require('jsonwebtoken');
export default function handler(req, res) {
    const token = jwt.sign({ usermob: req.body.usermobile }, process.env.MYKEY, { expiresIn: '1d' });
    res.status(200).json(token);
}
