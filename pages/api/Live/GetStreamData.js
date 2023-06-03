import axios from 'axios';
export default function handler(req, res) {
    if (req.method === 'POST') {
        axios.post(`${process.env.API_URL}admin/Live/GetStreamData.php`, { updatekey: process.env.MYKEY, Livekey: req.body.Livekey })
            .then((rest) =>
                res.status(200).json(rest.data));
    } else {

    }
}