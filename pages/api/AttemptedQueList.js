import axios from 'axios';
export default function handler(req, res) {
    
    if (req.method === 'POST') {
        axios.post(`${process.env.API_URL}AttemptedQueList.php`, { updatekey: process.env.MYKEY, ID: req.body.ID })
            .then((rest) =>
                res.status(200).json(rest.data));
    } else {

    }
}