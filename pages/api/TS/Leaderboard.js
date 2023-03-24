import axios from 'axios';
export default function handler(req, res) {

    if (req.method === 'POST') {
        axios.post(`${process.env.API_URL}Website/TS/Leaderboard.php`, { updatekey: process.env.MYKEY, QTitle: req.body.QTitle })
            .then((rest) =>
                res.status(200).json(rest.data));
    } else {

    }
}